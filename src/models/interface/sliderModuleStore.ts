export interface SlidesSliderBanner {
    imgSlide: string
    sliderTitle: string
    sliderTitle1: string
    sliderTitle2?: string
    sliderText?:  string
}

export interface SlidesDiscount {
    images: string
    saleText: string
    salePrice: string
    titleSlide: string
    descr: string
}


interface State {
    slidesSliderBanner: SlidesSliderBanner[]
    slidesDiscount: SlidesDiscount[]
}

interface Getters {
    getSlidesBanner:(state: State) => SlidesSliderBanner[]
    getSlideDiscount: (state: State) => SlidesDiscount[]
}

export  interface SlidersStore {
    state: State
    getters: Getters
}
