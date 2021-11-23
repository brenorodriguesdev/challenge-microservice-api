import {
    badRequest,
    serverError,
    unauthorized
} from './components/'

export default {
    badRequest,
    serverError,
    unauthorized,
    securitySchemes: {
        bearerAuth: {
            type: 'apiKey',
            name: 'key',
            in: 'header',
        },
    }
}