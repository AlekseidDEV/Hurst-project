<script setup lang="ts">
import SingleProductArea from "@/components/ui/SingleProduct/SingleProductArea.vue";
import {onMounted} from "vue";
import {useRoute} from "vue-router";
import {axiosClient} from "@/axiosClient";
import {ResponceData} from "@/models/interface/responceData";
const route = useRoute()

let product: ResponceData, {} = {}

const getSingleCard = (name: string) => {
  const formatedName = name.replace(/([A-Z])/g, ' $1').trim()

  axiosClient.get(`products?name=${formatedName}`).then((res) => {
    product = res.data[0]
  })

  console.log(product)
}

onMounted(() => {
  getSingleCard(route.params.name as string)
})
</script>

<template>
  <div class="heading-banner-area overlay-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading-banner">
            <div class="heading-banner-title">
              <h2>Single Product</h2>
            </div>
            <div class="breadcumbs pb-15">
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li>Single Product</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <SingleProductArea/>
</template>

<style scoped>

</style>