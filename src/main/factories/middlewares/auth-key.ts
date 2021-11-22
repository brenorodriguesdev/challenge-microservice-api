import { KeyValidatorService } from "../../../data/services/key-validator";
import { KeyRepositoryPostgres } from "../../../infra/repositories/key-repository";
import { Middleware } from "../../../presentation/contracts/middleware";
import { AuthKeyMiddleware } from "../../../presentation/middlewares/auth-key";

export const makeAuthKeyMiddleware = (): Middleware => {
    const keyRepositoryPostgres = new KeyRepositoryPostgres()
    const keyValidatorService = new KeyValidatorService(keyRepositoryPostgres)
    return new AuthKeyMiddleware(keyValidatorService)
}