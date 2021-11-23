import cors from 'cors'
import express from 'express'
import setupRoutes from './routes'
import setupSwagger from './swagger'

const app = express()

var allowedOrigins = ['http://localhost:4500'];

app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'Você não tem permissão para acessar este serviço!';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))
setupSwagger(app)
setupRoutes(app)

export default app