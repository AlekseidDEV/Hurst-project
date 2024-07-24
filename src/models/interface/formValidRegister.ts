export interface FormValidRegister {
    name: string
    email: string
    phone: string
    nameCompany: string
    password: string
    passwordRepet: string
    errors: {
        name?: string
        email?: string
        phone?: string
        nameCompany?: string
        password?: string
        passwordRepet?: string
    }
}