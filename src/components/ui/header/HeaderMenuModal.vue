<script setup lang="ts">

import {Ref, ref} from "vue";

let isShowMenu: Ref<boolean> = ref(false)

const openMegaMenu = () => {
  isShowMenu.value = !isShowMenu.value
}

</script>

<template>
  <!-- MAIN-MENU START -->
  <div @click="openMegaMenu" class="menu-toggle hamburger hamburger--emphatic d-none d-md-block">
    <div v-if="!isShowMenu" class="hamburger-box">
      <i class="bi bi-list"></i>
    </div>
    <div v-if="isShowMenu">
      <div class="close-hamburger">
        <i class="bi bi-x-circle"></i>
      </div>
    </div>
  </div>
  <div class="main-menu  d-none d-md-block" :class="isShowMenu ? 'active-menu' : ''">
    <nav>
      <ul>
        <li><a href="index.html">home</a></li>
        <li><a href="shop.html">products</a>
          <div class="mega-menu menu-scroll">
            <div class="table">
              <div class="table-cell">
                <div class="half-width">
                  <ul>
                    <li class="menu-title">best brands</li>
                    <li><a href="#">henning koppel</a></li>
                    <li><a href="#">jehs + Laub</a></li>
                    <li><a href="#">vicke lindstrand</a></li>
                    <li><a href="#">don chadwick</a></li>
                    <li><a href="#">akiko kuwahata</a></li>
                    <li><a href="#">barbro berlin</a></li>
                    <li><a href="#">cecilia hall</a></li>
                    <li><a href="#">don chadwick</a></li>
                  </ul>
                </div>
                <div class="half-width">
                  <ul>
                    <li class="menu-title">popular brands</li>
                    <li><a href="#">akiko kuwahata</a></li>
                    <li><a href="#">barbro berlin</a></li>
                    <li><a href="#">cecilia hall</a></li>
                    <li><a href="#">don chadwick</a></li>
                    <li><a href="#">henning koppel</a></li>
                    <li><a href="#">jehs + Laub</a></li>
                    <li><a href="#">vicke lindstrand</a></li>
                    <li><a href="#">don chadwick</a></li>
                  </ul>
                </div>
                <div class="full-width">
                  <div class="mega-menu-img">
                    <img src="/img/megamenu/1.jpg" alt="img">
                  </div>
                </div>
                <div class="pb-80"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="shop-sidebar.html">accesories</a></li>
        <li><a href="shop-list.html">lookbook</a></li>
        <li><a href="blog.html">blog</a></li>
        <li><a href="#">pages</a>
          <div class="sub-menu menu-scroll">
            <ul>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
              <li class="menu-title">Test Pages</li>
            </ul>
          </div>
        </li>
        <li><a href="about.html">about us</a></li>
        <li><a href="contact.html">contact</a></li>
      </ul>
    </nav>
  </div>
  <!-- MAIN-MENU END -->
</template>

<style scoped>
  .close-hamburger{
    font-size: 25px;
    cursor: pointer;
  }

  .hamburger-box{
    font-size: 30px;
    cursor: pointer;
  }

  .hamburger-box i::before{
    font-weight: 800;
  }

  .active-menu{
    left: -35px !important;
    transition: 0.5s;
  }

</style>