<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData.ts";
import {onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types.ts";

const {slideInfo} = defineProps<{
  slideInfo: ResponceData
}>()

const stars: Ref<Elem | null> = ref(null)

const generateStars = () => {
  for (let i = 0; i < 5; i++) {
    const items = document.createElement('i')

    if (Math.floor(slideInfo.rating) > i) {
      items.classList.add('zmdi', 'zmdi-star');
    } else if (slideInfo.rating - i < 1 && slideInfo.rating - i > 0) {
      items.classList.add('zmdi', 'zmdi-star-half');
    } else {
      items.classList.add('zmdi', 'zmdi-star-outline');
    }

    stars.value?.append(items)
  }
}

onMounted(() => {
  generateStars()
})
</script>

<template>
  <!-- Single-product start -->
  <div class="single-product">
    <div class="product-img">
      <span class="advice-label">{{ slideInfo.label }}</span>
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
.advice-label {
  left: 20px;
  position: absolute;
  top: 20px;
  z-index: 2;
  background: #84c865 none repeat scroll 0 0;
  border-radius: 5px;
  color: #fff;
  height: 25px;
  line-height: 25px;
  padding: 0 10px;
  text-transform: capitalize;
}

.slide-img {
  max-height: 227px;
  min-height: 227px;
  object-fit: cover;
}
</style>