<script setup lang="ts">
import {computed, onMounted, Ref, ref} from "vue";
import {Swiper, SwiperSlide} from "swiper/vue";
import FeaturedCard from "@/components/ui/Cards/FeaturedCard.vue";

import { SwiperClass } from "@/swipers";


import 'swiper/css/navigation';
import 'swiper/css'
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import ProductModal from "@/components/ui/modals/ProductModal.vue";
import {ResponceData} from "@/models/interface/responceData.ts";

const store: StoreVuex = useStore()
const slider: Ref<SwiperClass | null> = ref(null)
const adviceCards = computed(() => store.getters['getFeatureCard'])
const countSlides = ref(0)
const productModalOn = ref(false)
const cardInfoModal: Ref<ResponceData | {}> = ref({})

const openModalCard = (card: ResponceData) => {
  cardInfoModal.value = card

  productModalOn.value = !productModalOn.value
}

const nextSlide = () => {
  countSlides.value++

  if(slider.value?.isEnd) countSlides.value = slider.value?.activeIndex

  slider.value?.slideTo(countSlides.value)
}

const prevSlide = () => {
  countSlides.value--

  if(slider.value?.activeIndex === 0) countSlides.value = 0

  slider.value?.slideTo(countSlides.value)
}

const onSwiper = (swiper: SwiperClass) => {
  slider.value = swiper
}

onMounted(() => {
store.dispatch('setFeatureCard', 'products?label=advice')
})
</script>

<template>
  <!-- PRODUCT-AREA START -->
  <div class="product-area pt-80 pb-35">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title-border">Featured Products</h2>
          </div>
          <div class="position-relative">
            <swiper
                :slides-per-view="4"
                :space-between="20"
                @swiper="onSwiper"
                :breakpoints="{
                  '991': {
                    slidesPerView: 4,
                    spaceBetween: 50,
                  },
                  '780': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  '600': {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                   '320': {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  }
                }"
            >
              <swiper-slide v-for="slide of adviceCards">
                <FeaturedCard
                    :slideInfo="slide"
                    @openModal="openModalCard"
                />
              </swiper-slide>
            </swiper>
            <button @click="prevSlide" class="prev-btn">prev</button>
            <button @click="nextSlide" class="next-btn">next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- PRODUCT-AREA END -->
  <transition>
    <ProductModal
        v-if="productModalOn"
        :cardInfo="cardInfoModal as ResponceData"
        @close="productModalOn = false"
    />
  </transition>
</template>


<style scoped>

.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}

  .prev-btn{
    background: #fff none repeat scroll 0 0;
    border: 2px solid #eeeeee;
    color: #a6a6a6;
    font-weight: 700;
    left: -50px;
    line-height: 20px;
    position: absolute;
    padding: 5px 5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    writing-mode: vertical-lr;
    text-orientation: upright;
    cursor: pointer;
  }

  .next-btn{
    background: #fff none repeat scroll 0 0;
    border: 2px solid #eeeeee;
    color: #a6a6a6;
    font-weight: 700;
    right: -50px;
    line-height: 20px;
    position: absolute;
    padding: 5px 5px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
    writing-mode: vertical-lr;
    text-orientation: upright;
    cursor: pointer;
  }

  .next-btn:hover,
  .prev-btn:hover{
    background: #C8A165;
    color: white;
  }

  @media (max-width: 375px) {
    .next-btn{
      right: -30px;
    }

    .prev-btn{
      left: -30px;
    }
  }
</style>