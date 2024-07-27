<script setup lang="ts">
import {Colors} from "@/models/interface/colors";
import {Elem} from "@/models/types";

const {colors} = defineProps<{
  colors: Colors[],
}>()

const changeColor = (e: Event, colorName: string) => {
  const allColors = document.querySelectorAll('.li-color')

  allColors.forEach((elem) => {
    if((e.target as Elem).closest('li') === elem){
      elem.classList.add('active')
    }else{
      elem.classList.remove('active')
    }
  })

  console.log(colorName)
}
const isActiveColor = (color: string) => color === 'black' ? 'active' : ''
</script>

<template>
  <!-- color start -->
  <div class="color-filter single-pro-color mb-20 clearfix">
    <ul class="d-flex align-items-center">
      <li><span class="color-title text-capitalize">color</span></li>
      <li
          class="li-color"
          v-for="color of colors"
          :class="isActiveColor(color.name.toLowerCase())"
          @click="changeColor($event, color.name)"
      >
        <span class="color" :style="`background: ${color.code}`"></span>
      </li>
    </ul>
  </div>
  <!-- color end -->
</template>

<style scoped>

</style>