import {Posts} from "@/models/interface/posts";
import {ResponceData} from "@/models/interface/responceData";
import {SlidesDiscount, SlidesSliderBanner} from "@/models/interface/sliderModuleStore";
import {FooterObj} from "@/models/interface/footerLinks";
import {UserData} from "@/models/interface/userData";
import {DataCart} from "@/models/interface/dataCart";

type Dispatch = <T>(type: string, payload?: T | T[]) => void

interface Getters {
    getPosts: Posts[]
    getFooterLink: FooterObj[]
    getPurchaseCard: ResponceData[]
    getSlideDiscount: SlidesDiscount[]
    getSlidesBanner: SlidesSliderBanner[]
    getFeatureCard: ResponceData[]
    getCart: DataCart[]
    getLabelsSearch: string[]
    getUser: UserData
    isModalLogin: boolean
    isModalRegister: boolean
    getNewEmail: string
}

export interface StoreVuex {
    getters: Getters
    dispatch: Dispatch
}