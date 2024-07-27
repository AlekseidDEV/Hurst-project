<script setup lang="ts">
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import {computed, onMounted} from "vue";
import CartItem from "@/components/ui/header/CartItem.vue";

const store: StoreVuex = useStore()
const arrCart = computed(() => store.getters['getCart'])

const sumCart = computed(() => {
  return arrCart.value.reduce((sum, item) => {
    return sum += item.qty * item.price
  }, 0)
})

onMounted(() => {
  store.dispatch('setLocalStorageCart')
})
</script>

<template>
  <div class="col-md-4 col-5 d-flex align-items-center justify-content-end">
    <div class="mini-cart text-end">
      <ul>
        <li>
          <span class="cart-icon cursor-pointer">
            <i class="bi bi-cart-fill"></i>
            <span>{{ arrCart.length }}</span>
          </span>
          <div class="mini-cart-brief text-left">
            <div class="cart-items">
              <p class="mb-0">You have <span>{{ arrCart.length }} items</span> in your shopping bag</p>
            </div>
            <div class="all-cart-product clearfix position-relative">
              <div v-if="arrCart.length === 0" class="d-flex align-items-center justify-content-end">
                <span class="px-4">cart is empty</span>
              </div>
              <transition-group name="list">
                <CartItem
                    v-for="cartItem in arrCart"
                    :key="cartItem.name"
                    :item="cartItem"
                />
              </transition-group>
            </div>
            <div class="cart-totals">
              <h5 class="mb-0">Total <span class="floatright">${{ sumCart === 0 ? "0.00" : sumCart.toFixed(2) }}</span>
              </h5>
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
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}

.list-leave-active {
  position: absolute;
}
</style>