import {Posts} from "@/models/interface/posts";
import {ResponceData, ResponceDataCart} from "@/models/interface/responceData";
import {SlidesDiscount, SlidesSliderBanner} from "@/models/interface/sliderModuleStore";
import {FooterObj} from "@/models/interface/footerLinks";

type Dispatch = <T>(type: string, payload?: T | T[]) => void

interface Getters {
    getPosts: Posts[]
    getFooterLink: FooterObj[]
    getPurchaseCard: ResponceData[]
    getSlideDiscount: SlidesDiscount[]
    getSlidesBanner: SlidesSliderBanner[]
    getFeatureCard: ResponceData[]
    getCart: ResponceDataCart[]
}

export interface StoreVuex {
    getters: Getters
    dispatch: Dispatch
}