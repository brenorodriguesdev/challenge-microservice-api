import { Request, Response, NextFunction } from 'express'
import { Controller } from '../../presentation/contracts/controller'
import { HttpRequest } from '../../presentation/contracts/http'

export const adaptMiddleware = (middleware: Controller) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        const key = req.headers.key

        const httpRequest : HttpRequest = {
            body: {
                key
            },
        }

        const httpResponse = await middleware.handle(httpRequest)
        if (httpResponse.statusCode === 200) {
            Object.assign(req.body, httpResponse.data)
            next()
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.data.message
            })
        }
    }
}