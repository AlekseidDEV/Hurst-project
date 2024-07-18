import {Commentators} from "@/models/interface/commentators";

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

