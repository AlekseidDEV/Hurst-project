<script setup lang="ts">

import {Elem} from "@/models/types";

const emits = defineEmits<{
  (e: 'closeModalSucces'): void
}>()

const closeModal = (e: Event) => {
  if((e.target as Elem).matches('.wrapper-form')
      || (e.target as Elem).closest('span')){
    emits('closeModalSucces')
  }
}
</script>

<template>
<div @click="closeModal" class="wrapper-form">
  <div class="modal">
    <span><i class="bi bi-x"></i></span>
    <p class="succes-icon"><i class="bi bi-check-circle-fill"></i></p>
    <p class="text">Subscription completed</p>
  </div>
</div>
</template>

<style scoped>
.wrapper-form{
  background: rgba(0, 0, 0, 0.31);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
}

.modal{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  background: white;
  max-width: 400px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.succes-icon{
  font-size: 50px;
  color: #35c035;
}

.text{
  font-size: 18px;
  font-weight: 600;
}


span{
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 28px;
  cursor: pointer;
}
</style>