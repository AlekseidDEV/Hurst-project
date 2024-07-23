<script setup lang="ts">
import {computed, reactive, ref} from "vue";
import {axiosClient} from "@/axiosClient";
import {FormValidateLogin} from "@/models/interface/formValidateLogin";
import {UserData} from "@/models/interface/userData.ts";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex.ts";

const emits = defineEmits<{
  (e: 'openRegModal'): void
}>()

const store: StoreVuex = useStore()
const user = computed(() => store.getters['getUser'])

const isLogin = ref(false)
const formLogin: FormValidateLogin = reactive({
  email: '',
  password: '',
  errors: {
    email: '',
    password: ''
  }
})

const valideteForm = () => {
  const regExpEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
  let succes: boolean

  formLogin.errors = {}

  if(formLogin.email === ''){
    formLogin.errors.email = 'Obligatory field'
  }else if(!regExpEmail.test(formLogin.email)) {
    formLogin.errors.email = 'Invalid email'
  }

  if(formLogin.password === ''){
    formLogin.errors.password = 'Obligatory field'
  }

  Object.keys(formLogin.errors).length === 0 ? succes = true : succes = false

  return succes
}

const checkingPassword = (data: UserData) => {
  console.log(data.password)
  if(data.password === formLogin.password){
    store.dispatch('setUser', data)
    isLogin.value = true
  }else {
    formLogin.password = ''
    formLogin.errors.password = 'Incorrect password'
  }
}

const loginUser = () => {
if(!valideteForm()) return
  axiosClient.get(`/users?email=${formLogin.email}`).then((res) => {
    if(res.data.length !== 0){
      checkingPassword(res.data[0])
    }else {
      formLogin.errors.email = 'There is no user with this email'
    }
  })
}
</script>

<template>
  <form v-if="!isLogin">
    <h4 class="title-1 title-border text-uppercase mb-30">Registered customers</h4>
    <p class="text-gray">If you have an account with us, Please login!</p>
    <input
        v-model="formLogin.email"
        type="text" name="email"
        placeholder="Email here..."
        autocomplete="off">
    <input
        v-model="formLogin.password"
        type="password"
        placeholder="Password">
    <p><a class="text-gray" href="#">Forget your password?</a></p>
    <p @click.prevent="emits('openRegModal')"><a class="text-gray" href="#">or register</a></p>
    <button @click.prevent="loginUser" class="button-one submit-button mt-15">login</button>
  </form>

  <div v-else class="py-5">
    <h4 class="title-1 text-uppercase mb-30">Hello {{user?.name}}</h4>
    <p class="text-gray">Start your shopping with hurst! <router-link class="text-decoration-underline" to="/">Go to directory.</router-link></p>
    <button @click.prevent="loginUser" class="button-one submit-button mt-15">Exit</button>
  </div>
</template>

<style scoped>

</style>