import { SendEmailRequestModel } from "../models/send-email-request";
import { SendEmailResponseModel } from "../models/send-email-response"

export interface SendEmailUseCase {
    send: (request: SendEmailRequestModel) => Promise<SendEmailResponseModel[]>
}