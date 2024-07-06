<script setup lang="ts">

import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
</script>

<template>
  <div class="wrapper">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<style scoped>

</style>
