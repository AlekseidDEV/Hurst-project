<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData.ts";
import {onMounted, ref, Ref} from "vue";
import {Elem} from "@/models/types.ts";
import {useGeneratorStars} from "@/shared/useGeneratorStars.ts";

const { card } = defineProps<{
  card: ResponceData
}>()

const stars: Ref<Elem | null> = ref(null)

onMounted(() => useGeneratorStars(card, stars))

</script>

<template>
  <div class="single-product col-xl-3 col-lg-4 col-md-6">
  <div class="product-img">
    <span :class="['pro-label', `${card.label}-label`]">{{card.label}}</span>
    <img class="img-card-purchase" :src="card.image" :alt="card.name">
    <div class="product-action clearfix">
      <a href="wishlist.html" data-bs-toggle="tooltip" data-placement="top" title="Wishlist"><i
          class="zmdi zmdi-favorite-outline"></i></a>
      <a href="#" data-bs-toggle="modal" data-bs-target="#productModal" title="Quick View"><i
          class="zmdi zmdi-zoom-in"></i></a>
      <a href="#" data-bs-toggle="tooltip" data-placement="top" title="Compare"><i
          class="zmdi zmdi-refresh"></i></a>
      <a href="cart.html" data-bs-toggle="tooltip" data-placement="top" title="Add To Cart"><i
          class="zmdi zmdi-shopping-cart-plus"></i></a>
    </div>
  </div>
  <div class="product-info clearfix">
    <div class="fix">
      <h4 class="post-title floatleft"><a href="#">{{card.name}}</a></h4>
      <p class="floatright hidden-sm">{{card.category}}</p>
    </div>
    <div class="fix">
      <span class="pro-price floatleft">$ {{card.price}}</span>
      <span class="pro-rating floatright" ref="stars">

                      </span>
    </div>
  </div>
</div>
</template>

<style scoped>
.img-card-purchase{
  max-height: 274px;
  min-height: 274px;
  object-fit: cover;
}
</style>