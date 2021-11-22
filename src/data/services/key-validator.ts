import { KeyValidatorUseCase } from "../../domain/useCases/key-validator";
import { KeyRepository } from "../contracts/repositories/key-repository";

export class KeyValidatorService implements KeyValidatorUseCase {
    constructor (private readonly keyRepository: KeyRepository) {}
    async valid(key: string): Promise<boolean> {
        const keyEntity = await this.keyRepository.findByKey(key)
        return keyEntity && keyEntity.active
    }
}