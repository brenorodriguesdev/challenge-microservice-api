import { KeyEntity } from "../../entities/key"

export interface KeyRepository {
    findByKey: (key: string) => Promise<KeyEntity>
}