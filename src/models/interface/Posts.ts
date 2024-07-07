import {Commentators} from "@/models/interface/commentators.ts";

export interface Posts {
    imagePath: string
    createdAt: string
    authorName: string
    "likes": number
    "commentsCount": number
    "reposts": number
    "title": string
    "text": string
    comments: Commentators
}

