import {FormValidateReview} from "@/models/interface/formValidateReview";

export function reviewFormValidator(form: FormValidateReview){
    const regExpName = /^[a-zа-я\s]{3,30}$/i
    const regExpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

    let succes = false
    let errors: Partial<Record<string, string>> = {}

    if (form.name === '') {
        errors.name = 'Obligatory field'
    } else if (!regExpName.test(form.name)) {
        errors.name = 'Invalid name'
    }

    if (form.email === '') {
        errors.email = 'Obligatory field'
    } else if (!regExpEmail.test(form.email)) {
        errors.email = 'Invalid email'
    }

    if(form.textArea === ''){
        errors.textArea = 'Obligatory field'
    }

    Object.keys(errors).length === 0 ? succes = true : succes = false

    return {succes, errors}
}