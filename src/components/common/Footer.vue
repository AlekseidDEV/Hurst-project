<script setup lang="ts">
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex.ts";

const store: StoreVuex = useStore()
const arrLinks = store.getters['getFooterLink']

</script>

<template>
  <footer>
    <!-- Footer-area start -->
    <div class="footer-area">
      <div class="container">
        <div class="row">
          <div v-for="item of arrLinks" :class="item.class">
            <div class="single-footer">
              <h3 class="footer-title  title-border">{{item.title}}</h3>
              <ul v-if="item.ulClass === 'footer-contact'" :class="item.ulClass">
                <li v-for="linkItem of item.links"><span>{{linkItem.title}}</span><p v-html="linkItem.text"></p></li>
              </ul>
              <ul v-else :class="item.ulClass">
                <li v-for="linkItem of item.links">
                  <router-link :to="linkItem.url">
                    <i class="zmdi zmdi-dot-circle"></i>{{linkItem.title}}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-footer">
              <h3 class="footer-title  title-border">your choice Products</h3>
              <div class="footer-product">
                <div class="row">
                  <div class="col-sm-6 col-12">
                    <div class="footer-thumb">
                      <a href="#"><img src="../../assets/img/footer/1.jpg" alt=""></a>
                      <div class="footer-thumb-info">
                        <p><a href="#">Furniture Product<br>Name</a></p>
                        <h4 class="price-3">$ 60.00</h4>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-6 col-12">
                    <div class="footer-thumb">
                      <a href="#"><img src="../../assets/img/footer/1.jpg" alt=""></a>
                      <div class="footer-thumb-info">
                        <p><a href="#">Furniture Product<br>Name</a></p>
                        <h4 class="price-3">$ 60.00</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer-area end -->
    <!-- Copyright-area start -->
    <div class="copyright-area">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="copyright">
              <p class="mb-0">&copy; <a href="https://github.com/AlekseidDEV" target="_blank">FCI</a> 2024. All Rights Reserved.</p>
            </div>
          </div>
          <div class="col-md-6">
            <div class="payment  text-md-end">
              <a href="#"><img src="../../assets/img/payment/1.png" alt=""></a>
              <a href="#"><img src="../../assets/img/payment/2.png" alt=""></a>
              <a href="#"><img src="../../assets/img/payment/3.png" alt=""></a>
              <a href="#"><img src="../../assets/img/payment/4.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Copyright-area start -->
  </footer>
</template>

<style scoped>

</style>