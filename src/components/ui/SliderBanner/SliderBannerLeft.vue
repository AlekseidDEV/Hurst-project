<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {axiosClient} from '@/axiosClient'
import {ResponceData} from "@/models/interface/responceData";
import {useRandomArray} from "@/shared/useRandomArray";

const firstProduct: Ref<ResponceData | null> = ref(null)
const aboutProduct: Ref<ResponceData |  null> = ref(null)

onMounted(() => {
  axiosClient.get('products?label=new').then((res) => {
      const randomCard = useRandomArray(res.data, 2)

      firstProduct.value = randomCard[0] as ResponceData
      aboutProduct.value = randomCard[1] as ResponceData
  })
})
</script>

<template>
  <div class="banner-left floatleft">
    <!-- Slider-banner start -->
    <div class="slider-banner">
      <div class="single-banner banner-1">
        <img class="img-banner" :src="firstProduct?.image" alt="img">
        <span class="pro-label new-label">new</span>
        <span class="price">${{firstProduct?.price}}</span>
        <div class="wrapper-breaf">
          <div class="banner-brief">
            <h2 class="banner-title text-white">{{firstProduct?.name}}</h2>
            <p class="mb-0 text-white">{{firstProduct?.category}}</p>
          </div>
          <a href="#" class="button-one font-16px" data-text="Buy now">Buy now</a>
        </div>
      </div>
      <div class="single-banner banner-2">
        <img class="img-banner" :src="aboutProduct?.image" alt="img">
        <div class="banner-brief">
          <h2 class="banner-title text-white">New Product 2024</h2>
          <p class="hidden-md hidden-sm d-none d-md-block text-white">Lorem Ipsum is simply dummy text of the printing and types sate industry. Lorem Ipsum has been the industry.</p>
          <a href="#" class="button-one font-16px" data-text="Buy now">Buy now</a>
        </div>
      </div>
    </div>
    <!-- Slider-banner end -->
  </div>
</template>

<style scoped>
.img-banner{
  height: 100%;
  object-fit: cover;
  max-height: 323px;
  min-height: 250px;
}

@media (min-width: 1700px) {
  .img-banner{
    max-height: 280px;
  }
}

@media (min-width: 2000px) {
  .img-banner{
    max-height: 400px;
  }
}

@media (min-width: 2580px) {
  .img-banner{
    max-height: 550px;
  }
}

.wrapper-breaf{
  position: relative;
  z-index: 10;
}

.single-banner{
  position: relative;
}

.single-banner::after{
  background: rgba(35, 35, 35, 0.7);
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>