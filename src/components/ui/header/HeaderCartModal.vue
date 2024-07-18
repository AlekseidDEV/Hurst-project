<script setup lang="ts">
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import {computed, onMounted} from "vue";
import {useUuidGenerator} from "@/shared/useUuidGenerator.ts";

const store: StoreVuex = useStore()
const arrCart = computed(() => store.getters['getCart'])

const sumCart = computed(() => {
  return arrCart.value.reduce((sum, item) => {
    return sum += item.qty * item.price
  }, 0)
})

const numQuntity = (qty: number) => {
  return qty < 10 ? '0' + qty.toString() : qty
}

onMounted(() => {
  store.dispatch('setLocalStorageCart')
})
</script>

<template>
  <div class="col-md-4 col-5">
    <div class="mini-cart text-end">
      <ul>
        <li>
          <a class="cart-icon" href="#">
            <i class="zmdi zmdi-shopping-cart"></i>
            <span>{{arrCart.length}}</span>
          </a>
          <div class="mini-cart-brief text-left">
            <div class="cart-items">
              <p class="mb-0">You have <span>{{arrCart.length}} items</span> in your shopping bag</p>
            </div>
            <div class="all-cart-product clearfix">
              <div v-if="arrCart.length === 0" class="d-flex align-items-center justify-content-end">
                <span class="px-4">cart is empty</span>
              </div>
              <div v-for="item of arrCart" :key="useUuidGenerator()" class="single-cart clearfix">
                <div class="cart-photo">
                  <img class="img-cart" :src="item.image" alt="img">
                </div>
                <div class="cart-info">
                  <h5><a href="#">{{item.name}}</a></h5>
                  <p class="mb-0">Price : $ {{Math.round((item.qty * item.price) * 100) / 100}}</p>
                  <p class="mb-0">Qty : {{numQuntity(item.qty)}} </p>
                  <span class="cart-delete"><a href="#"><i class="zmdi zmdi-close"></i></a></span>
                </div>
              </div>
            </div>
            <div class="cart-totals">
              <h5 class="mb-0">Total <span class="floatright">${{sumCart === 0 ? "0.00" : sumCart.toFixed(2)}}</span></h5>
            </div>
            <div class="cart-bottom  clearfix">
              <a href="cart.html" class="button-one floatleft text-uppercase" data-text="View cart">View cart</a>
              <a href="checkout.html" class="button-one floatright text-uppercase" data-text="Check out">Check out</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.img-cart{
  max-height: 70px;
  min-height: 70px;
  max-width: 70px;
  min-width: 70px;
  object-fit: cover;
}
</style>