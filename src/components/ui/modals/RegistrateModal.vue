<script setup lang="ts">
import {Elem} from "@/models/types.ts";

const emits = defineEmits<{
  (e: "closeRegModal"): void
}>()

const closoModal = (e: Event) => {
 if((e.target as Elem).matches('.wrapper-modal') || (e.target as Elem).closest('.close')){
   emits('closeRegModal')
 }
}
</script>

<template>
<div @click="closoModal" class="wrapper-modal">
  <div class="wrapper">
    <form>
      <span class="close cursor-pointer"><i class="bi bi-x-circle"></i></span>
      <h4 class="title-1 title-border text-center text-uppercase mb-30">Registered customers</h4>
      <p class="text-gray">Register in our store to make purchases!</p>
      <input type="text" name="email" placeholder="Your name here..." autocomplete="off">
      <input type="text" name="email" placeholder="Email addres here..." autocomplete="off">
      <input type="text" name="phone" placeholder="Phone here..." autocomplete="off">
      <input type="text" name="text" placeholder="Company name here..." autocomplete="off">
      <input type="password" placeholder="Password">
      <input type="password" placeholder="Repeat password">
      <button class="button-one submit-button mt-15" data-text="login" type="submit">login</button>
    </form>
  </div>
</div>
</template>

<style scoped>
.close{
  font-size: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
}

form > input {
  max-width: 600px;
}
form{
  padding: 40px 10px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.wrapper-modal{
  position: fixed;
  background: rgba(0, 0, 0, 0.35);
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
}
.wrapper{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10001;
  max-width: 800px;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
}
</style>