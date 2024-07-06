const sliderBanner = {
    state: {
        slides: [
            {
                imgSlide: "../../../assets/img/slider/slider-1/1.png",
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderTitle2: 'gallery 2024'
            },
            {
                imgSlide: '../../../assets/img/slider/slider-1/2.jpg',
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable'
            },
            {
                imgSlide: '../../../assets/img/slider/slider-1/3.jpg',
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderTitle2: 'gallery 2024',
                sliderText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable'
            }
        ]
    },
    getters: {
        getSlidesBanner(state){
            return state.slides
        }
    }
}

export default sliderBanner