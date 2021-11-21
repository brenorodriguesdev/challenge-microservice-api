import { Validator } from "../../../validation/contracts/validator"
import { RequiredFieldValidator } from "../../../validation/validators/required-field"
import { ValidatorComposite } from "../../../validation/validators/validator-composite"

export const makeSendEmailValidation = (): Validator => {
    const requiredFields = ['subjectEmail', 'htmlEmail', 'emails']
    const validators = []
    for (let requiredField of requiredFields) {
        validators.push(new RequiredFieldValidator(requiredField))
    }
    return new ValidatorComposite(validators)
}