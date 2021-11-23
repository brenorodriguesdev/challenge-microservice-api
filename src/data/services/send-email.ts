import e from "express"
import { SendEmailRequestModel } from "../../domain/models/send-email-request"
import { SendEmailResponseModel } from "../../domain/models/send-email-response"
import { SendEmailUseCase } from "../../domain/useCases/send-email"
import { MailProvider } from "../contracts/providers/mail-provider"

export class SendEmailService implements SendEmailUseCase {
    constructor(private readonly mailProvider: MailProvider) { }
    async send(request: SendEmailRequestModel): Promise<SendEmailResponseModel[]> {
        let sendEmailResponseModels = []
        await Promise.all(request.emails.map(async email => {
            const mailResponse = await this.mailProvider.send({
                to: email,
                subject: request.subjectEmail,
                text: request.htmlEmail
            })
            sendEmailResponseModels.push({
                email,
                sent: mailResponse.sent,
                error: mailResponse.error
            })
        }))

        return sendEmailResponseModels
    }
}