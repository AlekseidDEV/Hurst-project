<script setup lang="ts">

import {onBeforeMount, onMounted, Ref, ref} from "vue";
import {Elem} from "@/models/types";

const scrollUp: Ref<Elem | null> = ref(null)

const visibleBtn = () => {
  if(window.scrollY > 600){
    scrollUp.value?.classList.add('active')
  }else if(window.scrollY < 600){
    scrollUp.value?.classList.remove('active')
  }
}

const scrollDown = () => {
  window.scrollTo(0, 0)
}

onMounted(() => {
  window.addEventListener('scroll', visibleBtn)
})
onBeforeMount(() => {
  window.removeEventListener('scroll', visibleBtn)
})
</script>

<template>
  <div
      class="scroll-up cursor-pointer"
      ref="scrollUp"
      @click="scrollDown"
  >
    <span><i class="bi bi-triangle-fill"></i></span>
  </div>
</template>

<style scoped>
.scroll-up{
  position: fixed;
  bottom: 15px;
  right: 15px;
  background: #d6b98c;
  padding: 10px 14px;
  transition: opacity ease 0.4s;
  opacity: 0;
}

.scroll-up.active{
  opacity: 1;
}

span > i{
  color: white;
  font-size: 16px;
  font-weight: bold !important;
}
</style>