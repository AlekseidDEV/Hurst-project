<script setup lang="ts">
import {computed, ref} from "vue";
import SearchModal from "@/components/ui/modals/SearchModal.vue";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex.ts";

const store: StoreVuex = useStore()
const searchOpen = ref(false)
const user = computed(() => store.getters['getUser'])

const lockedIcon = computed(() => {
  return user.value.userRole === 'guest' ? "bi bi-lock-fill" : "bi bi-unlock-fill"
})

const openSections = (path: string) => {
  if(user.value.userRole === 'guest'){
    store.dispatch('visibleModalLogin', true)
  }else {
    console.log(path)
  }
}
</script>

<template>
  <!-- Sidebar-social-media start -->
  <div class="sidebar-account d-none d-md-block">
    <div class="table">
      <div class="table-cell">
        <ul>
          <li @click.prevent="searchOpen = true"><a class="search-open" href="#" title="Search"><i
              class="bi bi-search"></i></a></li>
          <li @click.prevent="store.dispatch('visibleModalLogin', true)"><a href="#" title="Login"><i :class="lockedIcon"></i></a>
          </li>
          <li @click.prevent="openSections('Account')"><a href="#" title="My-Account"><i class="bi bi-person-fill"></i></a></li>
          <li @click.prevent="openSections('Wishlist')"><a href="#" title="Wishlist"><i class="bi bi-heart-fill"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- Sidebar-social-media start -->
  <transition>
    <SearchModal
        v-if="searchOpen"
        @closeSearh="searchOpen = false"
    />
  </transition>
</template>

<style scoped>

</style>