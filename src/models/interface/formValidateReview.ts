export interface FormValidateReview {
    name: string
    email: string
    textArea: string
    [key: string]: unknown
    errors: {
        name?: string
        email?: string
        textArea?: string
    }
}