<script setup lang="ts">
import {computed, ref} from "vue";
import SearchModal from "@/components/ui/modals/SearchModal.vue";
import LoginModal from "@/components/ui/modals/LoginModal.vue";
import {useStore} from "vuex";
import RegistrateModal from "@/components/ui/modals/RegistrateModal.vue";
import {StoreVuex} from "@/models/interface/storeVuex.ts";

const store: StoreVuex = useStore()
const searchOpen = ref(false)
const user = computed(() => store.getters['getUser'])
const isRegistrate = ref(false)

const LoginUser = () => {
  if (user.value.userRole === 'guest') {
    console.log('not')
  } else {
    console.log('true')
  }
}

const isWishList = () => {
  console.log('wish')
}

const lockedIcon = computed(() => {
  return user.value.userRole === 'guest' ? "bi bi-lock-fill" : "bi bi-unlock-fill"
})
</script>

<template>
  <!-- Sidebar-social-media start -->
  <div class="sidebar-account d-none d-md-block">
    <div class="table">
      <div class="table-cell">
        <ul>
          <li @click.prevent="searchOpen = true"><a class="search-open" href="#" title="Search"><i
              class="bi bi-search"></i></a></li>
          <li><a href="#" title="Login"><i :class="lockedIcon"></i></a>
            <div class="customer-login text-left">
              <LoginModal
              @openRegModal="isRegistrate = true"
              />
            </div>
          </li>
          <li @click.prevent="LoginUser"><a href="#" title="My-Account"><i class="bi bi-person-fill"></i></a></li>
          <li><a href="wishlist.html" title="Wishlist"><i class="bi bi-heart-fill"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Sidebar-social-media start -->

  <teleport to="body">
    <transition>
      <RegistrateModal
          v-if="isRegistrate"
          @closeRegModal="isRegistrate = false"
      />
    </transition>
  </teleport>

  <transition>
    <SearchModal
        v-if="searchOpen"
        @closeSearh="searchOpen = false"
    />
  </transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>