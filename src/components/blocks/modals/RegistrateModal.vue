<script setup lang="ts">
import {Elem} from "@/models/types";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex";
import {reactive, Ref, ref} from "vue";
import {registrationFormValidator} from "@/validators/registrationFormValidator";
import {FormValidRegister} from "@/models/interface/formValidRegister";
import {defaultUser} from "@/models/defaultUser";
import {axiosClient} from "@/axiosClient";
import {UserData} from "@/models/interface/userData";

const store: StoreVuex = useStore()

const inputPass: Ref<Elem | null> = ref(null)
const inputName: Ref<Elem | null> = ref(null)
const inputEmail: Ref<Elem | null> = ref(null)
const inputPhone: Ref<Elem | null> = ref(null)
const inputCompanyName: Ref<Elem | null> = ref(null)
const inputPassRepet: Ref<Elem | null> = ref(null)

const form: FormValidRegister = reactive({
  name: '',
  email: '',
  phone: '',
  nameCompany: '',
  password: '',
  passwordRepet: '',
  errors: {}
})

const registrateUser = async () => {
  const {succes, errors} = await registrationFormValidator(form)

  form.errors = errors

  if (succes) {
    const dataUser: Partial<UserData> = {}

    Object.assign(dataUser, defaultUser)

    dataUser.userRole = 'person'
    dataUser.name = form.name
    dataUser.email = form.email
    dataUser.phone = form.phone
    dataUser.companyName = form.nameCompany
    dataUser.password = form.password

    axiosClient.post('/users', dataUser).then(() => {
      store.dispatch('setNewEmail', form.email)
      store.dispatch('visibleModalReg', false)
      store.dispatch('visibleModalLogin', true)
    })
  }
}

const closModal = (e: Event) => {
  if ((e.target as Elem).matches('.wrapper-modal') || (e.target as Elem).closest('.close')) {
    store.dispatch('visibleModalReg', false)
  }
}

const clearError = (input: Elem | null, fieldName: keyof typeof form.errors) => {
  if (form.errors[fieldName] && form[fieldName] !== '') {
    input?.classList.remove('input-error')
    form.errors[fieldName] = ''
  }
}
</script>

<template>
  <div @click="closModal" class="wrapper-modal">
    <div class="wrapper">
      <form>
        <span class="close cursor-pointer"><i class="bi bi-x-circle"></i></span>
        <h4 class="title-1 title-border text-center text-uppercase mb-30">Registered customers</h4>
        <p class="text-gray">Register in our store to make purchases!</p>
        <span class="error-span">{{ form.errors.name }}</span>
        <input
            v-model.trim="form.name"
            type="text" name="name"
            placeholder="Your name here..."
            maxlength="30"
            ref="inputName"
            :class="form.errors.name ? 'input-error' : ''"
            @input="clearError(inputName, 'name')"
        >
        <span class="error-span">{{ form.errors.email }}</span>
        <input
            v-model="form.email"
            type="text" name="email"
            placeholder="Email addres here..."
            ref="inputEmail"
            :class="form.errors.email ? 'input-error' : ''"
            @input="clearError(inputEmail, 'email')"
        >
        <span class="error-span">{{ form.errors.phone }}</span>
        <input
            v-model="form.phone"
            type="text" name="phone"
            placeholder="Phone here..."
            ref="inputPhone"
            :class="form.errors.phone ? 'input-error' : ''"
            @input="clearError(inputPhone, 'phone')"
        >
        <span class="error-span">{{ form.errors.nameCompany }}</span>
        <input
            v-model="form.nameCompany"
            type="text"
            name="text"
            placeholder="Company name here..."
            ref="inputCompanyName"
            :class="form.errors.nameCompany ? 'input-error' : ''"
            @input="clearError(inputCompanyName, 'nameCompany')"
        >
        <span class="error-span">{{ form.errors.password }}</span>
        <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            ref="inputPass"
            :class="form.errors.password ? 'input-error' : ''"
            @input="clearError(inputPass, 'password')"
        >
        <span class="error-span">{{ form.errors.passwordRepet }}</span>
        <input
            v-model="form.passwordRepet"
            type="password"
            placeholder="Repeat password"
            ref="inputPassRepet"
            :class="form.errors.passwordRepet ? 'input-error' : ''"
            @input="clearError(inputPassRepet, 'passwordRepet')"
        >
        <button @click.prevent="registrateUser" class="button-one submit-button mt-15">login</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.error-span {
  color: #c87065;
}

.input-error {
  border: 1px solid #c87065;
}

.close {
  font-size: 25px;
  position: absolute;
  top: 15px;
  right: 15px;
}

form > input {
  max-width: 600px;
}

form {
  padding: 40px 10px;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.wrapper-modal {
  position: fixed;
  background: rgba(0, 0, 0, 0.35);
  top: 0;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 100%;
}

.wrapper {
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