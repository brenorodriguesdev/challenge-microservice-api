export interface KeyValidatorUseCase {
    valid: (key: string) => Promise<boolean>
}