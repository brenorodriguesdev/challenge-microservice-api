import { MailProvider, MailRequest, MailResponse } from "../../data/contracts/providers/mail-provider"
import * as mailgun from 'mailgun-js'

export class MailgunProvider implements MailProvider {
    async send(request: MailRequest): Promise<MailResponse> {
        const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });
        const data = {
            from: `${process.env.MAILGUN_NAME} <${process.env.MAILGUN_DOMAIN}>`,
            to: request.to,
            subject: request.subject,
            text: request.text
        };
        try {
            mg.messages().send(data, function (error, body) {
                console.log(body);
            });
            return {
                sent: true
            }
        }
        catch (error) {
            return {
                sent: false,
                error: error.message
            }
        }
    }
}