<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {axiosClient} from '../../../axiosClient.ts'
import {ResponceData} from "@/models/interface/responceData.ts";

const firstProduct: Ref<ResponceData | null> = ref(null)
const aboutProduct: Ref<ResponceData |  null> = ref(null)

const randomProduct = (lenght: number, data: ResponceData[]) => {
  for(let i = 0; i < 2; i++){
    const randomProduct = Math.floor(Math.random() * lenght) + 1

    if(i === 0){
      firstProduct.value = data[randomProduct]
    }else {
      aboutProduct.value = data[randomProduct]
    }
  }
}

onMounted(() => {
  axiosClient.get('products?label=new').then((res) => {
    randomProduct(res.data.length, res.data)
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
        <a class="banner-thumb" href="#"><img class="img-banner" :src="aboutProduct?.image" alt="img"></a>
        <div class="banner-brief">
          <h2 class="banner-title"><a href="#">New Product 2021</a></h2>
          <p class="hidden-md hidden-sm d-none d-md-block">Lorem Ipsum is simply dummy text of the printing and types sate industry. Lorem Ipsum has been the industry.</p>
          <a href="#" class="button-one font-16px" data-text="Buy now">Buy now</a>
        </div>
      </div>
    </div>
    <!-- Slider-banner end -->
  </div>
</template>

<style scoped>
.img-banner{
  max-height: 323px;
  object-fit: cover;
  height: 323px;
  max-width: 410px;
}

@media (max-width: 1715px) {

}

.wrapper-breaf{
  position: relative;
  z-index: 999;
}

.single-banner{
  position: relative;
}

.single-banner::after{
  background: rgba(91, 91, 91, 0.4);
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>