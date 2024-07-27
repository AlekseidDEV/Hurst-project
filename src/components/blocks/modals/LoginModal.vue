<script setup lang="ts">
import {computed, onMounted, reactive, Ref, ref, watch} from "vue";
import {axiosClient} from "@/axiosClient";
import {FormValidateLogin} from "@/models/interface/formValidateLogin";
import {UserData} from "@/models/interface/userData";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import {Elem} from "@/models/types";
import {loginFormValidator} from "@/validators/loginFormValidator";
import CryptoJS from 'crypto-js'
import {defaultUser} from "@/models/defaultUser";

const store: StoreVuex = useStore()
const inputPass: Ref<Elem | null> = ref(null)
const inputEmail: Ref<Elem | null> = ref(null)

const formLogin: FormValidateLogin = reactive({
  email: '',
  password: '',
  errors: {
    email: '',
    password: ''
  }
})

const user = computed(() => store.getters['getUser'])
const isLogged = computed(() => {
  return user.value.userRole !== 'guest'
})
const newEmail = computed(() => store.getters['getNewEmail'])

const cleareError = (input: Ref<Elem | null>, fieldError: keyof typeof formLogin.errors) => {
  return (newValue: string) => {
    if(formLogin.errors[fieldError] && newValue !== ''){
      input.value?.classList.remove('input-error')
      formLogin.errors[fieldError] = ''
    }
  }
}

const checkingPassword = (data: UserData) => {
  if(data.password === formLogin.password){
    const secretKey = new Date().getDay() + 'Hurst'
    const token = CryptoJS.AES.encrypt(data.email + ':' + data.password, secretKey).toString()

    store.dispatch('setUser', data)
    document.cookie = `token=${token}; max-age=43200; secure`
  }else {
    formLogin.password = ''
    formLogin.errors.password = 'Incorrect password'
  }
}

const loginUser = () => {
  const {succes, errors} = loginFormValidator(formLogin.email, formLogin.password)

  formLogin.errors = errors

  if(succes){
    axiosClient.get(`/users?email=${formLogin.email}`).then((res) => {
      if(res.data.length !== 0){
        checkingPassword(res.data[0])
      }else {
        formLogin.errors.email = 'There is no user with this email'
      }
    })
  }
}

const ExitUser = () => {
  document.cookie = 'token=; max-age: -1'
  store.dispatch('visibleModalLogin', false)
  store.dispatch('setUser', defaultUser)
}

const closModal = (e: Event) => {
  if((e.target as Elem).matches('.wrapper-modal') || (e.target as Elem).closest('.close')){
    store.dispatch('visibleModalLogin', false)
  }
}

watch(() => formLogin.email, cleareError(inputEmail, 'email'))
watch(() => formLogin.password, cleareError(inputPass, 'password'))

onMounted(() => {
  if(newEmail.value !== '') {
    formLogin.email = newEmail.value
  }
})
</script>
<template>
  <div @click="closModal" class="wrapper-modal">
    <div class="wrapper">
      <form v-if="!isLogged">
        <span class="close cursor-pointer"><i class="bi bi-x-circle"></i></span>
        <h4 class="title-1 title-border text-uppercase mb-30">Registered customers</h4>
        <p class="text-gray">If you have an account with us, Please login!</p>
        <span class="error-span">{{formLogin.errors.email}}</span>
        <input
            v-model="formLogin.email"
            type="text" name="email"
            placeholder="Email here..."
            ref="inputEmail"
            :class="formLogin.errors.email ? 'input-error' : ''"
            >
        <span class="error-span">{{formLogin.errors.password}}</span>
        <input
            v-model="formLogin.password"
            type="password"
            :class="formLogin.errors.password ? 'input-error' : ''"
            ref="inputPass"
            placeholder="Password">
        <p><a class="text-gray" href="#">Forget your password?</a></p>
        <p @click.prevent="store.dispatch('visibleModalReg', true)"><a class="text-gray" href="#">or register</a></p>
        <button @click.prevent="loginUser" class="button-one submit-button mt-15">login</button>
      </form>
      <div v-else class="text-center py-5 w-100 position-relative">
        <span class="close cursor-pointer"><i class="bi bi-x-circle"></i></span>
        <h4 class="title-1 text-uppercase mb-30">Hello {{user?.name}}</h4>
        <p class="text-gray">Start your shopping with hurst! <router-link class="text-decoration-underline" to="/">Go to directory.</router-link></p>
        <button @click.prevent="ExitUser" class="button-one submit-button mt-15">Exit</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.error-span{
  color: #c87065;
}

.input-error {
  border: 1px solid #c87065;
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
</style>