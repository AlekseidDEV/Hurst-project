<script setup lang="ts">

import {useStore} from "vuex";
import {computed, onMounted} from "vue";
import {Elem} from "@/models/types.ts";
import PurchaseCards from "@/components/ui/Cards/PurchaseCards.vue";
import {StoreVuex} from "@/models/interface/storeVuex.ts";

const store: StoreVuex = useStore()
const purchaseCards = computed(() => store.getters['getPurchaseCard'])

const cnangeTab = (e: Event) => {
  const links = document.querySelectorAll('.link-purchase')

  links.forEach((link) => {
    if (e.target === link && !(e.target as Elem).matches('.active')) {
      (e.target as Elem).classList.add('active')
      store.dispatch('setPurchaseCard', `products?label=${(e.target as Elem).dataset['bsToggle']}`)
    } else {
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
              <div class="row">
                <!-- Single-product start -->
                <PurchaseCards
                v-for="card of purchaseCards"
                :card="card"
                />
                <!-- Single-product end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- PURCHASE-ONLINE-AREA END -->
</template>

<style scoped>

</style>