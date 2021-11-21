export interface MailRequest {
    to: string
    subject: string
    text: string
}

export interface MailResponse {
    sent: boolean
    error?: string
}

export interface MailProvider {
    send: (request: MailRequest) => Promise<MailResponse>
}