<script setup lang="ts">
import HeaderCartModal from "@/components/ui/header/HeaderCartModal.vue";
import HeaderMenuModal from "@/components/ui/header/HeaderMenuModal.vue";

</script>

<template>
  <header id="sticky-menu" class="header">
    <div class="header-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-4 col-7">
            <div class="logo text-md-center">
              <router-link to="/">
                <img src="../../assets/img/logo/logo.png" alt="logo" class="logo py-0">
              </router-link>
            </div>
          </div>
          <HeaderCartModal/>
        </div>
      </div>
    </div>
    <HeaderMenuModal/>
  </header>
</template>

<style scoped>

</style>