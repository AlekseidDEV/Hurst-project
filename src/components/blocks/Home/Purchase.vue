<script setup lang="ts">

import {useStore} from "vuex";
import {computed, onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types";
import PurchaseCards from "@/components/ui/Cards/PurchaseCards.vue";
import {StoreVuex} from "@/models/interface/storeVuex";
import {useUuidGenerator} from "@/shared/useUuidGenerator";
import {ResponceData} from "@/models/interface/responceData.ts";
import ProductModal from "@/components/ui/modals/ProductModal.vue";

const store: StoreVuex = useStore()
const purchaseCards = computed(() => store.getters['getPurchaseCard'])
const productModalOn = ref(false)
const cardInfoModal: Ref<ResponceData | {}> = ref({})

const openModalCard = (card: ResponceData) => {
  cardInfoModal.value = card

  productModalOn.value = !productModalOn.value
}

const cnangeTab = (e: Event) => {
  const links = document.querySelectorAll('.link-purchase')

  links.forEach((link) => {
    if (e.target === link && !(e.target as Elem).matches('.active')) {
      (e.target as Elem).classList.add('active')
      store.dispatch('setPurchaseCard', `products?label=${(e.target as Elem).dataset['bsToggle']}`)
    } else if((e.target as Elem).closest('li')) {
      link.classList.remove('active')
    }
  })
}

onMounted(() => {
  store.dispatch('setPurchaseCard', 'products?label=new')
})
</script>

<template>
  <!-- PURCHASE-ONLINE-AREA START -->
  <div class="purchase-online-area pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title text-center">
            <h2 class="title-border">Purchase Online on Hurst</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 text-center">
          <!-- Nav tabs -->
          <ul class="tab-menu nav clearfix" @click.prevent="cnangeTab">
            <li><a class="link-purchase active" href="#" data-bs-toggle="new">New Arrivals</a></li>
            <li><a class="link-purchase" href="#" data-bs-toggle="advice">Best Seller </a></li>
            <li><a class="link-purchase" href="#" data-bs-toggle="sale">Discounts</a></li>
          </ul>
        </div>
        <div class="col-lg-12">
          <!-- Tab panes -->
          <div class="tab-content">
            <div class="tab-pane active" id="new-arrivals">
              <div class="row position-relative">
                <!-- Single-product start -->
                <transition-group name="list">
                  <PurchaseCards
                      v-for="card of purchaseCards"
                      :key="useUuidGenerator()"
                      :card="card"
                      @openModal="openModalCard"
                  />
                </transition-group>
                <!-- Single-product end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- PURCHASE-ONLINE-AREA END -->
  <transition>
    <ProductModal
        v-if="productModalOn"
        :cardInfo="cardInfoModal as ResponceData"
        @close="productModalOn = false"
    />
  </transition>
</template>

<style scoped>
.list-move, /* применять переход к движущимся элементам */
.list-enter-active,
.list-leave-active {
  transition: all 0.8s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: rotate(45deg);
}

.list-leave-active {
  position: absolute;
  top: 50%;
  left: -500px;
  transform: translateY(-50%);
}

.v-enter-active,
.v-leave-active {
  transition: 0.7s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>