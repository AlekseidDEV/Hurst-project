<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData";
import {onMounted, ref, Ref} from "vue";
import {Elem} from "@/models/types";
import {useGeneratorStars} from "@/shared/useGeneratorStars";
import SingleProdColors from "@/components/ui/SingleProduct/ProdColors.vue";
import SingleProdSize from "@/components/ui/SingleProduct/ProdSize.vue";
import SingleProdBtnsControll from "@/components/ui/SingleProduct/ProdBtnsControll.vue";

const props = defineProps<{
  prod: ResponceData
}>()

const stars: Ref<Elem | null> = ref(null)


onMounted(() => {
  useGeneratorStars(props.prod, stars)
})
</script>

<template>
  <div class="row shop-list single-pro-info no-sidebar">
    <!-- Single-product start -->
    <div class="col-lg-12 bg-block">
      <div class="single-product clearfix">
        <!-- Single-pro-slider Big-photo start -->
        <div class="d-flex">
          <div class="position-relative">
            <img class="big-img" :src="prod.image" alt="img">
            <span class="view-full-screen">
              <i class="bi bi-zoom-in"></i>
            </span>
          </div>

          <div class="product-info">
            <div class="fix d-flex justify-content-between">
              <h4 class="post-title floatleft">{{prod.name}}</h4>
              <div class="d-flex align-items-center gap-2">
                <div class="pro-rating" ref="stars"></div>
                <span>( {{prod.rating}} Rating )</span>
              </div>
            </div>
            <div class="fix mb-20">
              <span class="pro-price">$ {{prod.price}}</span>
            </div>
            <div class="product-description">
              <p>{{prod.description}}</p>
            </div>
            <SingleProdColors
            :colors="prod.colors"
            />
            <SingleProdSize
            :sizeArr="prod.size"
            />
            <SingleProdBtnsControll/>
<!--btns controll-->
<!--            chumbsSlider-->
          </div>
        </div>
        <!-- Single-pro-slider Big-photo end -->
      </div>
    </div>
    <!-- Single-product end -->
  </div>
</template>

<style scoped>
.big-img{
  max-width: 370px;
  height: 100%;
  object-fit: contain;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.2);
}

.pro-rating i {
  color: #c87065
}
</style>