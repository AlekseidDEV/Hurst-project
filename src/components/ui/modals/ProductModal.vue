<script setup lang="ts">
import {ResponceData} from "@/models/interface/responceData";
import {ref} from "vue";
import {Elem} from "@/models/types";
import {useAddCart} from "@/shared/useAddCart.ts";

const props = defineProps<{
  cardInfo: ResponceData
}>()

const emits = defineEmits<{
  (e:'close'): void
}>()

const inputQuntity = ref(1)

const addCart = () => {
  if(inputQuntity.value <= 0){
    inputQuntity.value = 1
  }

  useAddCart(props.cardInfo, inputQuntity.value)
  emits('close')
}

const closeModal = (e: Event) => {
  if((e.target as Elem).matches('.modal') || (e.target as Elem).closest('.close')){
    emits('close')
  }
}

</script>

<template>
  <!-- QUICKVIEW PRODUCT -->
  <div id="quickview-wrapper">
    <!-- Modal -->
      <div class="modal fade show"  id="productModal" tabindex="-1" role="dialog" @click="closeModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="modal-product">
                <div class="product-images">
                  <div class="main-image images">
                    <img class="modal-img" alt="#" :src="cardInfo.image">
                  </div>
                </div><!-- .product-images -->

                <div class="product-info">
                  <h1>{{cardInfo?.name}}</h1>
                  <div class="price-box-3">
                    <hr>
                    <div class="s-price-box">
                      <span class="new-price">${{cardInfo?.price}}</span>
                      <span v-if="cardInfo?.label === 'sale'" class="old-price">${{cardInfo?.price + 50}}</span>
                    </div>
                    <hr>
                  </div>
                  <a href="#" class="see-all">See all features</a>
                  <div class="quick-add-to-cart">
                    <div class="cart">
                      <div class="numbers-row">
                        <input type="number" id="french-hens" min="1" v-model="inputQuntity">
                      </div>
                      <button class="single_add_to_cart_button" @click="addCart">Add to cart</button>
                    </div>
                  </div>
                  <div class="quick-desc">
                    {{cardInfo?.description}}
                  </div>
                  <div class="social-sharing">
                    <div class="widget widget_socialsharing_widget">
                      <h3 class="widget-title-modal">Share this product</h3>
                      <ul class="social-icons">
                        <li><a target="_blank" title="Google +" href="#" class="gplus social-icon"><i class="bi bi-google"></i></a></li>
                        <li><a target="_blank" title="Twitter" href="#" class="twitter social-icon"><i class="bi bi-twitter"></i></a></li>
                        <li><a target="_blank" title="Facebook" href="#" class="facebook social-icon"><i class="bi bi-facebook"></i></a></li>
                        <li><a target="_blank" title="LinkedIn" href="#" class="linkedin social-icon"><i class="bi bi-linkedin"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div><!-- .product-info -->
              </div><!-- .modal-product -->
            </div><!-- .modal-body -->
          </div><!-- .modal-content -->
        </div><!-- .modal-dialog -->
      </div>
    <!-- END Modal -->
  </div>
  <!-- END QUICKVIEW PRODUCT -->
</template>

<style scoped>
  .modal{
    display: block;
  }

  #quickview-wrapper{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background: #000000a8;
    z-index: 99999;
  }

  .modal-img{
    max-height: 387px;
    min-height: 387px;
    max-width: 318px;
    min-width: 318px;
    object-fit: cover;
  }

  .modal-dialog{
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) !important;
    left: 50%;
  }
</style>