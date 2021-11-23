import { MailProvider, MailRequest, MailResponse } from "../../data/contracts/providers/mail-provider"
import Mailgun from 'mailgun-js'

export class MailgunProvider implements MailProvider {
    async send(request: MailRequest): Promise<MailResponse> {
        try {
            const mg = new Mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });
            const data = {
                from: `${process.env.MAILGUN_NAME} <${process.env.MAILGUN_EMAIL}>`,
                to: request.to,
                subject: request.subject,
                html: request.text
            };
            
            await mg.messages().send(data);
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