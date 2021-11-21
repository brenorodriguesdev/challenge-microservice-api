import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { makeSendEmailController } from "../factories/controllers/send-email"

export default (router: Router): void => {
    router.post('/send', adaptRouter(makeSendEmailController()))
}