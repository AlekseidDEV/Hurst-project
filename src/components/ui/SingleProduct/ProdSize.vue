<script setup lang="ts">
import {Elem} from "@/models/types";

const {sizeArr} = defineProps<{
  sizeArr: string[]
}>()

const isActive = (str: string) => str === 'm' ? 'active' : ''
const changeSize = (size: string) => {
  const allLink = document.querySelectorAll('.link')

  allLink.forEach((item) => {
    if(size === (item as Elem).textContent){
      item.classList.add('active')
    }else {
      item.classList.remove('active')
    }
  })

  console.log(size)
}
</script>

<template>
  <!-- Size start -->
  <div class="size-filter single-pro-size mb-35 clearfix">
    <ul>
      <li><span class="color-title text-capitalize">size</span></li>
      <li v-for="size in sizeArr">
        <a
            :class="isActive(size)"
            @click.prevent="changeSize(size)"
            class="link"
            href="#"
        >{{size}}</a>
      </li>
    </ul>
  </div>
  <!-- Size end -->
</template>

<style scoped>
ul > li > a {
  text-transform: uppercase;
}

ul > li > a:hover {
  color: #d6b98c !important;
}

a.active{
 color: #d6b98c !important;
}
</style>