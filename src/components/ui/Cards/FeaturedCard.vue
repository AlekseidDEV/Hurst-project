<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData";
import {onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types";
import {useGeneratorStars} from "@/shared/useGeneratorStars";
import {useRouter} from "vue-router";
import {useAddCart} from "@/shared/useAddCart";

const router = useRouter()

const {slideInfo} = defineProps<{
  slideInfo: ResponceData
}>()

const emits = defineEmits<{
  (e: "openModal", card: ResponceData): void
}>()

const stars: Ref<Elem | null> = ref(null)

const clickableCard = () => {
  router.push({name: 'single-product', params: {name: slideInfo.name.split(' ').join('')}})
}

onMounted(() => {
useGeneratorStars(slideInfo, stars)
})

</script>

<template>
  <!-- Single-product start -->
  <div @click.stop="clickableCard" class="single-product cursor-pointer px-2">
    <div class="product-img">
      <span class="pro-label advice-label">{{ slideInfo.label }}</span>
      <img class="slide-img" :src="slideInfo.image" alt="img">
      <div class="product-action clearfix d-flex justify-content-center">
        <span class="icon-card cursor-pointer"  title="Wishlist"><i class="bi bi-heart"></i></span>
        <span class="icon-card cursor-pointer"  title="Quick View" @click.stop="emits('openModal', slideInfo)">
          <i class="bi bi-zoom-in"></i>
        </span>
        <span class="icon-card cursor-pointer"  title="Compare"><i class="bi bi-arrow-repeat"></i></span>
        <span class="icon-card cursor-pointer" @click.stop="useAddCart(slideInfo)"  title="Add To Cart">
          <i class="bi bi-cart-plus"></i></span>
      </div>
    </div>
    <div class="product-info clearfix">
      <div class="fix">
        <h4 class="post-title floatleft"><a href="#">{{ slideInfo.name }}</a></h4>
        <p class="floatright hidden-sm d-none d-md-block">{{ slideInfo.category }}</p>
      </div>
      <div class="fix">
        <span class="pro-price floatleft">$ {{ slideInfo.price }}</span>
        <span class="pro-rating floatright" ref="stars">

        </span>
      </div>
    </div>
  </div>
  <!-- Single-product end -->
</template>

<style scoped>
.slide-img {
  max-height: 227px;
  min-height: 227px;
  object-fit: cover;
}

.icon-card{
  height: 40px;
  width: 25%;
  line-height: 40px;
  font-size: 16px;
  position: relative;
}

.icon-card:nth-child(1)::before,
.icon-card:nth-child(2)::before,
.icon-card:nth-child(3)::before
{
  background: #999 none repeat scroll 0 0;
  content: "";
  height: 16px;
  margin-top: -8px;
  position: absolute;
  right: 0;
  top: 50%;
  width: 2px;
}

</style>