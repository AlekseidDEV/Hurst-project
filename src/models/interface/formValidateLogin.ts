export interface FormValidateLogin {
    email: string
    password: string
    errors: {
        email?: string
        password?: string
    };
}