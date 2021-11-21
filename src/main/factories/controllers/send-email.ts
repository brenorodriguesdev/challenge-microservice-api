import { SendEmailService } from "../../../data/services/send-email"
import { MailgunProvider } from "../../../infra/providers/mailgun"
import { Controller } from "../../../presentation/contracts/controller"
import { SendEmailController } from "../../../presentation/controllers/send-email"
import { makeSendEmailValidation } from "../validations/send-email"

export const makeSendEmailController = (): Controller => {
    const mailgunProvider = new MailgunProvider()
    const sendEmailService = new SendEmailService(mailgunProvider)
    return new SendEmailController(makeSendEmailValidation(), sendEmailService)
}
