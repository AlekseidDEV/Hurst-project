import {Colors} from "@/models/interface/colors.ts";

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
}