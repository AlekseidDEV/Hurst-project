import {Colors} from "@/models/interface/colors";

export interface ResponceData {
    category: string
    colors: Colors
    description: string
    image: string
    label: string
    name: string
    price: number
    rating: number
    size: string[]
    comments: CommentProduct[]
    [key: string]: unknown
}

export interface ResponceDataCart extends ResponceData {
    qty: number
}

interface CommentProduct {
    userName: string
    review: string,
    subject: string,
    dateAdd: number,
    rating: number
}