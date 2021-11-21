import { HttpRequest, HttpResponse } from "../contracts/http";
import { Controller } from "../contracts/controller"
import { badRequest, ok, serverError } from "../contracts/http-helper"
import { SendEmailUseCase } from "../../domain/useCases/send-email"
import { Validator } from "../../validation/contracts/validator";

export class SendEmailController implements Controller {
    constructor (private readonly validator: Validator, private readonly sendEmailUseCase: SendEmailUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const error = this.validator.validate(httpRequest.body)

            if (error) {
                return badRequest(error)
            }

            const {
                htmlEmail,
                subjectEmail,
                emails
            } = httpRequest.body

            const response = await this.sendEmailUseCase.send({
                htmlEmail,
                subjectEmail,
                emails
            })

            return ok(response)
        }
        catch (error) {
            return serverError()
        }
    }
}