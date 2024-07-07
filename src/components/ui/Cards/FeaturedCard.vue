<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData.ts";
import {onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types.ts";
import {useGeneratorStars} from "@/shared/useGeneratorStars.ts";

const {slideInfo} = defineProps<{
  slideInfo: ResponceData
}>()

const stars: Ref<Elem | null> = ref(null)


onMounted(() => {
useGeneratorStars(slideInfo, stars)
})
</script>

<template>
  <!-- Single-product start -->
  <div class="single-product">
    <div class="product-img">
      <span class="pro-label advice-label">{{ slideInfo.label }}</span>
      <img class="slide-img" :src="slideInfo.image" alt="img">
      <div class="product-action clearfix">
        <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i
            class="zmdi zmdi-favorite-outline"></i></a>
        <a href="#" data-bs-toggle="modal" data-bs-target="#productModal" title="Quick View"><i
            class="zmdi zmdi-zoom-in"></i></a>
        <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i class="zmdi zmdi-refresh"></i></a>
        <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i
            class="zmdi zmdi-shopping-cart-plus"></i></a>
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
</style>