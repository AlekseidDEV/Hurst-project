<script setup lang="ts">

import {ref, watch} from "vue";
import {axiosClient} from "@/axiosClient";
import SuccesModal from "@/components/blocks/modals/SuccesModal.vue";

const inputText = ref('')
const errorForm = ref(false)
const isSubScrive = ref(false)

watch(inputText, () => {if(errorForm.value) errorForm.value = false})

const sendForm = () => {
  const regExpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

  if(inputText.value !== '' && regExpEmail.test(inputText.value)){
    axiosClient.post('https://jsonplaceholder.typicode.com/posts', inputText.value).then(() => {
      inputText.value = ''
      isSubScrive.value = true
    })
  }else {
    errorForm.value = true
  }
}
</script>

<template>
  <!-- SUBSCRIVE-AREA START -->
  <div class="subscribe-area pt-80">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="subscribe">
            <form action="#">
              <div class="wrapper-input position-relative w-100">
                <span v-if="errorForm" title="Invalid email" class="warn-email">
                  <i class="bi bi-exclamation-triangle-fill"></i>
                </span>
                <input class="mb-0" v-model="inputText" type="text" placeholder="Enter your email address">
              </div>
              <button @click.prevent="sendForm" class="submit-button submit-btn-2 button-one">subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <teleport to="body">
    <transition>
      <SuccesModal
      v-if="isSubScrive"
      @closeModalSucces="isSubScrive = false"
      />
    </transition>
  </teleport>
  <!-- SUBSCRIVE-AREA END -->
</template>

<style scoped>
form{
  display: flex;
  align-items: center;
}

.wrapper-input input{
  max-width: 100%;
  width: 100% !important;
  z-index: 1;
}

.warn-email{
  font-size: 18px;
  color: #c87065;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
}

.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

</style>