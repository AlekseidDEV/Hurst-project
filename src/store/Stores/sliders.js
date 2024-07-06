const sliders = {
    state: {
        slidesSliderBanner: [
            {
                imgSlide: "../../../assets/img/slider/slider-1/1.png",
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderTitle2: 'gallery 2024'
            },
            {
                imgSlide: '../../../assets/img/slider/slider-1/2.png',
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable'
            },
            {
                imgSlide: '../../../assets/img/slider/slider-1/3.png',
                sliderTitle: 'welcom to our',
                sliderTitle1: 'furniture',
                sliderTitle2: 'gallery 2024',
                sliderText: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable'
            }
        ],
        slidesDiscount:
            [
                {
                    images: '../../../assets/img/discount/1.jpg',
                    saleText: 'On Sale',
                    salePrice: '95.00',
                    titleSlide: 'Discount 50%',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.'
                },

                {
                    images: '../../../assets/img/discount/2.jpg',
                    saleText: 'On Sale',
                    salePrice: '80.00',
                    titleSlide: 'Discount 50%',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.'
                },
                {
                    images: '../../../assets/img/discount/3.jpg',
                    saleText: 'On Sale',
                    salePrice: '70.00',
                    titleSlide: 'Discount 50%',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.'
                },
                {
                    images: '../../../assets/img/discount/4.jpg',
                    saleText: 'On Sale',
                    salePrice: '50.00',
                    titleSlide: 'Discount 50%',
                    descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed does eiusmodes tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venim, quis nostrud exercitation ullamco laboris.'
                }
            ]
    },
    getters: {
        getSlidesBanner(state){
            return state.slidesSliderBanner
        },
        getSlideDiscount(state){
            return state.slidesDiscount
        }
    }
}

export default sliders