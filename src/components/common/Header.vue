<script setup lang="ts">
import HeaderCartModal from "@/components/ui/header/HeaderCartModal.vue";
import HeaderMenuModal from "@/components/ui/header/HeaderMenuModal.vue";
import MobileHeaderMenu from "@/components/ui/header/HeaderMobileMenu.vue";
import {onBeforeMount, onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types.ts";
import HeaderMobileTop from "@/components/ui/header/HeaderMobileTop.vue";

const stickyMenu: Ref<Elem | null> = ref(null)
const onStick = ref(false)

const stickyHeader = () => {
  if(!stickyMenu.value) return

  if(window.scrollY > stickyMenu.value!.offsetHeight){
    onStick.value = true
  }else {
    onStick.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', stickyHeader)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', stickyHeader)
})

</script>

<template>
  <!-- Mobile-header-top Start -->
  <div class="mobile-header-top d-block d-md-none">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <HeaderMobileTop/>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile-header-top End -->
  <header class="header" :class="onStick ? 'fixed-header' : ''" ref="stickyMenu">
    <div class="header-area position-relative">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-4 col-7 d-flex justify-content-center">
              <router-link to="/" class="d-flex justify-content-center">
                <img src="/img/logo/logo.png" alt="logo" class="logo py-0 m-auto">
              </router-link>
          </div>
          <HeaderCartModal/>
        </div>
      </div>
      <HeaderMenuModal/>
    </div>
  </header>
  <MobileHeaderMenu/>
</template>

<style scoped>
.header{
  padding: 40px 0px;
}

.fixed-header{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.1);
}

.header.fixed-header{
  padding: 20px 0px;
}
</style>