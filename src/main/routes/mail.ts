import { Router } from "express"
import { adaptRouter } from "../adapters/express-controller"
import { adaptMiddleware } from "../adapters/express-middleware"
import { makeSendEmailController } from "../factories/controllers/send-email"
import { makeAuthKeyMiddleware } from "../factories/middlewares/auth-key"

export default (router: Router): void => {
    router.post('/send', adaptMiddleware(makeAuthKeyMiddleware()),adaptRouter(makeSendEmailController()))
}