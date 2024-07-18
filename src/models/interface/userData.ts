
type BillingObject = Omit<UserData, "wishList" | "orderHistory" | "billingAdress">

export interface UserData {
    name: string
    id: number
    email: string
    phone: string
    companyName: string
    contry: string
    state: string
    townCity: string
    address: string
    billingAdress: BillingObject
    orderHistory: any[],
    wishList: any[]
}