<script setup lang="ts">
import HeaderCartModal from "@/components/ui/header/HeaderCartModal.vue";
import HeaderMenuModal from "@/components/ui/header/HeaderMenuModal.vue";
import MobileHeaderMenu from "@/components/ui/header/HeaderMobileMenu.vue";

</script>

<template>
  <!-- Mobile-header-top Start -->
  <div class="mobile-header-top d-block d-md-none">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- header-search-mobile start -->
          <div class="header-search-mobile">
            <div class="table">
              <div class="table-cell">
                <ul>
                  <li><a class="search-open" href="#"><i class="zmdi zmdi-search"></i></a></li>
                  <li><a href="login.html"><i class="zmdi zmdi-lock"></i></a></li>
                  <li><a href="my-account.html"><i class="zmdi zmdi-account"></i></a></li>
                  <li><a href="wishlist.html"><i class="zmdi zmdi-favorite"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
          <!-- header-search-mobile start -->
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile-header-top End -->
  <header id="sticky-menu" class="header">
    <div class="header-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 offset-md-4 col-7">
            <div class="logo text-md-center">
              <router-link to="/">
                <img src="/img/logo/logo.png" alt="logo" class="logo py-0">
              </router-link>
            </div>
          </div>
          <HeaderCartModal/>
        </div>
      </div>
    </div>
    <HeaderMenuModal/>
  </header>
  <MobileHeaderMenu/>
</template>

<style scoped>

</style>