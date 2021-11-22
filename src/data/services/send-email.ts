import { SendEmailRequestModel } from "../../domain/models/send-email-request"
import { SendEmailResponseModel } from "../../domain/models/send-email-response"
import { SendEmailUseCase } from "../../domain/useCases/send-email"
import { MailProvider } from "../contracts/providers/mail-provider"

export class SendEmailService implements SendEmailUseCase {
    constructor (private readonly mailProvider: MailProvider) { }
    async send(request: SendEmailRequestModel): Promise<SendEmailResponseModel[]> {
        let to = ""
        request.emails.map(email => {
            to = to + " " + email + ","
        })
        await this.mailProvider.send({
           to,
           subject: request.subjectEmail,
           text: request.htmlEmail
        })
        return []
    }
}