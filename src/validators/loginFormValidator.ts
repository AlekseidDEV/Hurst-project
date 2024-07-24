export function loginFormValidator(email: string, password: string) {
    const regExpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

    let succes = false
    let errors: Partial<Record<string, string>> = {}

    if (email === '') {
        errors.email = 'Obligatory field'
    } else if (!regExpEmail.test(email)) {
        errors.email = 'Invalid email'
    }

    if (password === '') {
        errors.password = 'Obligatory field'
    }

    Object.keys(errors).length === 0 ? succes = true : succes = false

    return {succes, errors}
}