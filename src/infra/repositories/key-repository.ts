import { KeyRepository } from "../../data/contracts/repositories/key-repository";
import { KeyEntity } from "../../data/entities/key";
import { postgres } from "../../main/config/postgres";

export class KeyRepositoryPostgres implements KeyRepository {
    async findByKey(key: string): Promise<KeyEntity> {
        return await postgres.oneOrNone('select * from key where key = $1', [key]);
    }
}