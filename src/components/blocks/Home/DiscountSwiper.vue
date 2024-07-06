<script setup lang="ts">
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Autoplay} from "swiper/modules";
import {useStore} from "vuex";

const store = useStore()
const slides = store.getters['getSlideDiscount']

const getImg = (path: string) => {
  return new URL(path, import.meta.url).href
}

</script>

<template>
  <!-- DISCOUNT-PRODUCT START -->
  <div class="discount-product-area">
    <div class="container">
      <swiper
          :modules="[Autoplay, Pagination]"
          :autoplay="{ delay: 5000, disableOnInteraction: true }"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          :grab-cursor="true"
          :loop="true"
      >
        <swiper-slide v-for="slide of slides">
          <div class="col-lg-12">
            <div class="discount-product">
              <img src="../../../assets" alt="">
              <img :src="getImg(slide.images)" alt="img">
              <div class="discount-img-brief">
                <div class="onsale">
                  <span class="onsale-text">{{ slide.saleText }}</span>
                  <span class="onsale-price">$ {{ slide.salePrice }}</span>
                </div>
                <div class="discount-info">
                  <h1 class="text-dark-red d-none d-md-block">{{ slide.titleSlide }}</h1>
                  <p class="d-none d-md-block">{{ slide.descr }}</p>
                  <a href="#" class="button-one font-16px style-3 text-uppercase mt-md-5" data-text="Buy now">Buy
                    now</a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination pagination-right"></div>
      </swiper>
    </div>
  </div>
  <!-- DISCOUNT-PRODUCT END -->
</template>

<style scoped>

</style>