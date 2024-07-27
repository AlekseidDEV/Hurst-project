import {CommentProduct} from "@/models/interface/responceData";

export interface DataCart {
    qty: number
    size: string
    colors: string
    name: string
    category: string
    description: string
    image: string
    label: string
    price: number
    rating: number
    comments: CommentProduct[]
}
