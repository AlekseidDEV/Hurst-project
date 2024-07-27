<script setup lang="ts">

import Header from "@/components/common/Header.vue";
import Footer from "@/components/common/Footer.vue";
import {onMounted} from "vue";
import {useCoockieLogin} from "@/shared/useCoockieLogin";
import TheBtnDownScroll from "@/components/common/TheBtnDownScroll.vue";

onMounted(() => {
  useCoockieLogin()
})
</script>

<template>
  <div class="wrapper">
    <Header/>
    <router-view/>
    <Footer/>
    <TheBtnDownScroll/>
  </div>
</template>

<style scoped>

</style>
