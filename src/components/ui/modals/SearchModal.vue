<script setup lang="ts">
import {computed, ref} from "vue";
import {watchDebounced} from "@vueuse/core";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex.ts";
import {useRouter} from "vue-router";

const emits = defineEmits<{
  (e: 'closeSearh'): void
}>()

const router = useRouter()
const store: StoreVuex = useStore()
const searchWord = ref('')
const searchResults = computed(() => store.getters['getLabelsSearch'])

watchDebounced(searchWord,  (newValue) => {
  store.dispatch('searchProduct', newValue)
}, {debounce: 300})

const clickableLabel = (name: string) => {
  router.push({name: 'single-product', params: {name: name.split(' ').join('')}})
  store.dispatch('searchProduct', '')
}

</script>

<template>
  <!-- sidebar-search Start -->
  <div class="sidebar-search animated slideOutUp">
    <div class="table">
      <div class="table-cell">
        <div class="container">
          <div class="row">
            <div class="col-md-8 offset-md-2 p-0">
              <div class="search-form-wrap">
                <button @click="emits('closeSearh')" class="close-search"><i class="bi bi-x"></i></button>
                <div class="mt-5 text-lg-start d-flex gap-1 flex-wrap">
                  <transition-group name="list">
                    <span
                        @click="clickableLabel(name)"
                        class="search-result"
                        v-for="(name, index) of searchResults"
                        :key="index"
                    >{{name}}</span>
                  </transition-group>
                </div>
                <form>
                  <input v-model="searchWord" type="text" placeholder="Search here...">
                  <span class="search-button">
                    <i class="bi bi-search"></i>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- sidebar-search End -->
</template>

<style scoped>
  .search-button i{
    font-size: 20px;
    font-weight: 800;
    margin-right: 15px;
  }

  .search-result{
    background: #a78d65;
    color: white;
    padding: 5px 5px;
    border-radius: 4px;
    cursor: pointer;
  }

  .list-move,
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-leave-active {
    position: absolute;
  }
</style>