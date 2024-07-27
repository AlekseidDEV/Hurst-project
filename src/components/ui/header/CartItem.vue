<script setup lang="ts">
import {useStore} from "vuex";
import {DataCart} from "@/models/interface/dataCart";

defineProps<{
  item: DataCart
}>()

const store = useStore()

const numQuntity = (qty: number) => {
  return qty < 10 ? '0' + qty.toString() : qty
}

const removeCart = (itemName: string) => {
  store.dispatch('removeCart', itemName)
}
</script>

<template>
  <div class="single-cart clearfix">
    <div class="cart-photo">
      <img class="img-cart" :src="item.image" alt="img">
    </div>
    <div class="cart-info">
      <h5><a href="#">{{item.name}}</a></h5>
      <p class="mb-0">Price : $ {{Math.round((item.qty * item.price) * 100) / 100}}</p>
      <p class="mb-0">Qty : {{numQuntity(item.qty)}} </p>
      <span @click.prevent="removeCart(item.name)" class="cart-delete"><a href="#"><i class="bi bi-x"></i></a></span>
    </div>
  </div>
</template>

<style scoped>
.img-cart {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
</style>