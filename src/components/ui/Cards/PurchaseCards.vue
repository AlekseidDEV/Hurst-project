<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData";
import {onMounted, ref, Ref} from "vue";
import {Elem} from "@/models/types";
import {useGeneratorStars} from "@/shared/useGeneratorStars";
import {useRouter} from "vue-router";
import {useAddCart} from "@/shared/useAddCart";

const {card} = defineProps<{
  card: ResponceData
}>()

const emits = defineEmits<{
  (e: "openModal", card: ResponceData): void
}>()

const router = useRouter()
const stars: Ref<Elem | null> = ref(null)

const cleckableCard = () => {
  router.push({name: 'single-product', params: {name: card.name.split(' ').join('')}})
}

onMounted(() => useGeneratorStars(card, stars))
</script>

<template>
  <div @click.stop="cleckableCard" class="single-product col-xl-3 col-lg-4 col-md-6 cursor-pointer">
    <div class="product-img">
      <span :class="['pro-label', `${card.label}-label`]">{{ card.label }}</span>
      <img class="img-card-purchase" :src="card.image" :alt="card.name">
      <div class="product-action d-flex justify-content-center clearfix">
      <span class="icon-card cursor-pointer" title="Wishlist">
        <i class="bi bi-heart"></i>
        </span>
        <span class="icon-card cursor-pointer" title="Quick View" @click.stop="emits('openModal', card)">
         <i class="bi bi-zoom-in"></i>
      </span>
        <span class="icon-card cursor-pointer" title="Compare">
        <i class="bi bi-arrow-repeat"></i>
      </span>
        <span class="icon-card cursor-pointer" @click.stop="useAddCart(card)" title="Add To Cart">
        <i class="bi bi-cart-plus"></i>
      </span>
      </div>

    </div>
    <div class="product-info clearfix">
      <div class="fix">
        <h4 class="post-title floatleft"><a href="#">{{ card.name }}</a></h4>
        <p class="floatright hidden-sm">{{ card.category }}</p>
      </div>
      <div class="fix">
        <span class="pro-price floatleft">$ {{ card.price }}</span>
        <span class="pro-rating floatright" ref="stars">

                      </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img-card-purchase {
  max-height: 274px;
  min-height: 274px;
  object-fit: cover;
}

.icon-card {
  height: 40px;
  width: 25%;
  line-height: 40px;
  font-size: 16px;
  position: relative;
}

.icon-card:nth-child(1)::before,
.icon-card:nth-child(2)::before,
.icon-card:nth-child(3)::before {
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