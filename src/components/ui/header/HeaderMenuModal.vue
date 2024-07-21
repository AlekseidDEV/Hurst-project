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
      <div class="hamburger-inner"></div>
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
        <li><a href="index.html">home</a>
          <div class="sub-menu menu-scroll">
            <ul>
              <li class="menu-title">Page's</li>
              <li><a href="index.html">Home Version 1</a></li>
              <li><a href="index-2.html">Home Version 2</a></li>
            </ul>
          </div>
        </li>
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
                    <!--                      <a href="#"><img src="@assets/megamenu/1.jpg" alt=""></a>-->
                    <!--                      <a href="single-product.html"><img src="2/img/megamenu/1.jpg" alt="icon"></a>-->
                  </div>
                </div>
                <div class="pb-80"></div>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">Shortcodes</a>
          <div class="sub-menu menu-scroll">
            <ul>
              <li class="menu-title">Shortcodes</li>
              <li><a href="elements-accordions.html">Accordion</a></li>
              <li><a href="elements-toggles.html">Toggles</a></li>
              <li><a href="elements-tab.html">Tab</a></li>
              <li><a href="elements-product-tab.html">Product Tab</a></li>
              <li><a href="elements-product-tab-2.html">Product Tab 2</a></li>
              <li><a href="elements-carousel.html">product carousel</a></li>
              <li><a href="elements-carousel-2.html">product carousel 2</a></li>
              <li><a href="elements-featured-product.html">Featured Product</a></li>
              <li><a href="elements-featured-product-2.html">Featured Product 2</a></li>
              <li><a href="elements-button.html">Button</a></li>
              <li><a href="elements-table.html">Table</a></li>
              <li><a href="elements-progress-bars.html">Progress Bar</a></li>
              <li><a href="elements-blog.html">Blog</a></li>
              <li><a href="elements-blog-2.html">Blog - 2</a></li>
              <li><a href="elements-team.html">Team</a></li>
              <li><a href="elements-footer.html">Footer</a></li>
              <li><a href="elements-footer-2.html">Footer 2</a></li>
              <li><a href="elements-map.html">Map</a></li>
            </ul>
          </div>
        </li>
        <li><a href="shop-sidebar.html">accesories</a></li>
        <li><a href="shop-list.html">lookbook</a></li>
        <li><a href="blog.html">blog</a></li>
        <li><a href="#">pages</a>
          <div class="sub-menu menu-scroll">
            <ul>
              <li class="menu-title">Page's</li>
              <li><a href="shop.html">Shop</a></li>
              <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
              <li><a href="shop-grid-right-sidebar.html">Shop Right Sidebar</a></li>
              <li><a href="shop-list.html">Shop List</a></li>
              <li><a href="shop-list-right-sidebar.html">Shop List right sidebar</a></li>
              <li><a href="single-product.html">Single Product</a></li>
              <li><a href="single-product-sidebar.html">Single Product Sidebar</a></li>
              <li><a href="cart.html">Shopping Cart</a></li>
              <li><a href="wishlist.html">Wishlist</a></li>
              <li><a href="checkout.html">Checkout</a></li>
              <li><a href="order.html">Order</a></li>
              <li><a href="login.html">login / Registration</a></li>
              <li><a href="my-account.html">My Account</a></li>
              <li><a href="404.html">404</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="single-blog.html">Single Blog</a></li>
              <li><a href="single-blog-sidebar.html">Single Blog Sidebar</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact</a></li>
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
  }

  .active-menu{
    left: -35px !important;
    transition: 0.5s;
  }

</style>