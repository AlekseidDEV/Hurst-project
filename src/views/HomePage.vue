<script setup lang="ts">
import SlideBanner from "@/components/blocks/Home/SlideBanner.vue";
import FeaturedProd from "@/components/blocks/Home/FeaturedProd.vue";
import DiscountSwiper from "@/components/blocks/Home/DiscountSwiper.vue";
import Purchase from "@/components/blocks/Home/Purchase.vue";
import HomeBlog from "@/components/blocks/Home/HomeBlog.vue";
import SubScrive from "@/components/blocks/Home/SubScrive.vue";
import LoginModal from "@/components/ui/modals/LoginModal.vue";
import RegistrateModal from "@/components/ui/modals/RegistrateModal.vue";
import {useStore} from "vuex";
import {StoreVuex} from "@/models/interface/storeVuex.ts";
import {computed} from "vue";

const store: StoreVuex = useStore()

const isLogin = computed(() => store.getters['isModalLogin'])
const isReg = computed(() => store.getters['isModalRegister'])

</script>

<template>
  <SlideBanner/>
  <FeaturedProd/>
  <DiscountSwiper/>
  <Purchase/>
  <HomeBlog/>
  <SubScrive/>

  <teleport to="body">
    <transition>
      <LoginModal
          v-if="isLogin"
      />
    </transition>
  </teleport>

  <teleport to="body">
    <transition>
      <RegistrateModal
          v-if="isReg"
      />
    </transition>
  </teleport>
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