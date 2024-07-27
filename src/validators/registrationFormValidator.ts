import {FormValidRegister} from "@/models/interface/formValidRegister";
import {axiosClient} from "@/axiosClient";

export async function  registrationFormValidator(form: FormValidRegister) {
    const regExpName = /^[a-zа-я\s]{3,30}$/i
    const regExpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
    const regExpPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    const regExpPassword = /^(?=.*[A-Z])(?=.*[\W_]).*$/

    let succes = false
    let errors: Partial<Record<string, string>> = {}

    const uniquEmail = async () => {
        const responce = await axiosClient.get(`/users?email=${form.email}`)

        if (responce.data.length > 0) {
            errors.email = 'such a user already exists'
        }
    }

    if (form.name === '') {
        errors.name = 'Obligatory field'
    } else if (!regExpName.test(form.name)) {
        errors.name = 'Invalid name'
    }

    if (form.email === '') {
        errors.email = 'Obligatory field'
    } else if (!regExpEmail.test(form.email)) {
        errors.email = 'Invalid email'
    } else {
       await uniquEmail()
    }

    if (form.phone === '') {
        errors.phone = 'Obligatory field'
    } else if (!regExpPhone.test(form.phone)) {
        errors.phone = 'Invalid phone'
    }

    if (form.nameCompany === '') {
        errors.nameCompany = 'Obligatory field'
    }

    if (form.password === '') {
        errors.password = 'Obligatory field'
    } else if (form.password.length < 8) {
        errors.password = 'your password is too short'
    } else if (!regExpPassword.test(form.password)) {
        errors.password = 'The password must contain at least one Number | Capital letter | special symbol'
    }

    if (form.passwordRepet === '') {
        errors.passwordRepet = 'Obligatory field'
    } else if (form.passwordRepet !== form.password) {
        errors.passwordRepet = 'Password mismatch'
    }

    Object.keys(errors).length === 0 ? succes = true : succes = false

    return {succes, errors}
}