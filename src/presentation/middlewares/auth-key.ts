import { KeyValidatorUseCase } from "../../domain/useCases/key-validator"
import { HttpRequest, HttpResponse } from "../contracts/http"
import { ok, serverError, unauthorized } from "../contracts/http-helper"
import { Middleware } from "../contracts/middleware"
import { UnathorizedError } from "../errors/unathorized-error"

export class AuthKeyMiddleware implements Middleware {
    constructor(private readonly keyValidatorUseCase: KeyValidatorUseCase) { }
    async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
        try {
            const { key } = httpRequest.body
            const isValid = await this.keyValidatorUseCase.valid(key)
            if (!isValid) {
                return unauthorized(new UnathorizedError())
            }
            return ok(null)
        } catch (error) {
            return serverError()
        }
    }
}