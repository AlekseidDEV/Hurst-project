<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {onBeforeMount, onMounted, Ref, ref} from "vue";
import {Pagination, Autoplay, Navigation} from "swiper/modules";
import {Elem} from "@/models/types";
import {useStore} from "vuex";

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {StoreVuex} from "@/models/interface/storeVuex";

const store: StoreVuex = useStore()
const slides = store.getters['getSlidesBanner']
const refObserver: Ref<IntersectionObserver | null> = ref(null)

const startAnimations = (elem: Elem) => {
  const swipeElements = elem.querySelectorAll('.fadeIn')

  swipeElements.forEach((elem, index) => {
    const delay = index * 250

    setTimeout(() => {
      elem.classList.remove('fadeIn')
    }, delay)
  })
}

const delAnimations = (elem: Elem) => {
  const swipeElements = elem.querySelectorAll('.wow')

  swipeElements.forEach((elem) => {
    elem.classList.add('fadeIn')
  })
}

onMounted(() => {
  const slides = document.querySelectorAll('.slide-custom')

  const handlerObserver: IntersectionObserverCallback = (entryes) => {
    entryes.forEach((entry) => {
      if(entry.isIntersecting){
        startAnimations(entry.target as Elem)
      }else {
        delAnimations(entry.target as Elem)
      }
    })
  }

  const observer = new IntersectionObserver(handlerObserver, {
    rootMargin: "0px",
    threshold: 0.5
  })

  slides.forEach((slide) => {
    observer.observe(slide)
  })

  refObserver.value = observer
})

onBeforeMount(() => {
  refObserver.value?.disconnect()
})

</script>

<template>
  <div class="slider-right floatleft">
    <!-- Slider-area start -->
    <div class="slider-area">
      <div class="bend niceties preview-2">
        <div id="ensign-nivoslider" class="slides">
          <swiper
              :modules="[Pagination, Autoplay, Navigation]"
              :autoplay="{ delay: 8000, disableOnInteraction: true } as any"
              :pagination="{ el: '.swiper-pagination', clickable: true } as any"
              :loop="true"
              :navigation="{
                prevEl: '.prev',
                nextEl: '.next'
              } as any"
          >
            <swiper-slide v-for="slide of slides">
              <div class="position-relative wrapper-cont slide-custom">
                <img class="img-slider" :src="slide.imgSlide" alt="img">
                <div id="slider-direction" class="t-cn slider-direction">
                  <div class="slider-progress"></div>
                  <div class="slider-content t-lfl s-tb slider-1">
                    <div class="title-container s-tb-c title-compress">
                      <div class="layer-1">
                        <div class="wow fadeIn">
                          <h2 class="slider-title3 text-uppercase mb-0">{{slide.sliderTitle}}</h2>
                        </div>
                        <div class="wow fadeIn">
                          <h2 class="slider-title1 text-uppercase mb-0">{{slide.sliderTitle1}}</h2>
                        </div>
                        <div class="wow fadeIn" v-if="slide.sliderTitle2">
                          <h3 class="slider-title2 text-uppercase">{{slide.sliderTitle2}}</h3>
                        </div>
                        <div class="wow fadeIn" v-if="slide.sliderText">
                          <p class="slider-pro-brief">{{slide.sliderText}}</p>
                        </div>
                        <div class="wow fadeIn">
                          <a href="#" class="button-one style-2 text-uppercase mt-20" data-text="Shop now">Shop now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
            <div class="prev"><i class="bi bi-chevron-left"></i></div>
            <div class="next"><i class="bi bi-chevron-right"></i></div>
          </swiper>
        </div>
      </div>
    </div>
    <!-- Slider-area end -->
  </div>
</template>

<style scoped>

.wrapper-cont{
  background: #f4f4f2;
}

.slider-direction {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  width: 100%;
}

.wow{
  transition: 0.9s;
}

.fadeIn{
  transform: translateY(500px);
  opacity: 0;
}

.prev > i {
  margin-left: 2px;
  font-size: 14px;
}

.prev > i::before{
  font-weight: 600;
}

.prev{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0px;
  z-index: 9;
}

.prev::after{
  position: absolute;
  content: '';
  cursor: pointer;
  border-bottom: 29px solid transparent;
  border-left: 35px solid #F9F9F8;
  border-top: 29px solid transparent;
  transition: all 0.5s ease 0s;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
}

.prev:hover::after{
  border-bottom: 29px solid transparent;
  border-left: 35px solid #C8A165;
  border-top: 29px solid transparent;
}

.prev:hover i{
  color: #fff;
}

.next:hover::after{
  border-bottom: 29px solid transparent;
  border-right: 35px solid #C8A165;
  border-top: 29px solid transparent;
}

.next:hover i{
  color: #fff;
}

.next{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  z-index: 9;
  cursor: pointer;
}

.next::after{
  border-bottom: 29px solid transparent;
  border-right: 35px solid #F9F9F8;
  border-top: 29px solid transparent;
  content: "";
  right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  transition: all 0.5s ease 0s;
}

.next > i {
  font-size: 14px;
  margin-right: 2px;
}

.next > i::before{
  font-weight: 600;
}
</style>