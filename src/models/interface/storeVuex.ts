import {Posts} from "@/models/interface/posts.ts";
import {ResponceData} from "@/models/interface/responceData.ts";
import {SlidesDiscount, SlidesSliderBanner} from "@/models/interface/sliderStore.ts";
import {FooterLinks} from "@/models/interface/footerStores.ts";

type Dispatch = <T>(type: string, payload?: T | T[]) => void

interface Getters {
    getPosts: Posts[]
    getFooterLink: FooterLinks[]
    getPurchaseCard: ResponceData[]
    getSlideDiscount: SlidesDiscount[]
    getSlidesBanner: SlidesSliderBanner[]
}

export interface StoreVuex {
    getters: Getters
    dispatch: Dispatch
}