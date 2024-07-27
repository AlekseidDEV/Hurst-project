<script setup lang="ts">
import { onMounted, Ref, ref} from "vue";
import {useRoute} from "vue-router";
import {axiosClient} from "@/axiosClient";
import {ResponceData} from "@/models/interface/responceData";
import TheHeadingBanner from "@/components/common/TheHeadingBanner.vue";
import SingleProdPreview from "@/components/ui/SingleProduct/ProdPreview.vue";

const route = useRoute()

let product: Ref<ResponceData> = ref({} as ResponceData)
let isData = ref(false)

const getSingleCard = (name: string) => {
  const formatedName = name.replace(/([A-Z])/g, ' $1').trim()

  axiosClient.get(`products?name=${formatedName}`).then((res) => {
    product.value = res.data[0] as ResponceData
  }).finally(() => {
    isData.value = true
  })
}

onMounted(() => {
  getSingleCard(route.params.name as string)
})
</script>

<template>
  <TheHeadingBanner
      :params="route.name as string"
  />
  <div class="product-area single-pro-area product-style-2">
    <div class="bg-grey pt-80 pb-80">
      <div class="container">
        <div v-if="!isData" class="text-center">
          <img src="/img/lightbox/1496.gif" alt="preload">
        </div>
        <SingleProdPreview
            v-if="isData"
            :prod="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grey {
  background: #f0f0f0;
}
</style>