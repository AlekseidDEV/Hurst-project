<script setup lang="ts">
import {Ref, ref, watch} from "vue";
import {Elem} from "@/models/types";

const isShowMenu = ref(false)
const dropDown: Ref<Elem | null> = ref(null)

watch(isShowMenu, (newValue) => {
  if(newValue){
    dropDown.value!.style.maxHeight = `${dropDown.value!.scrollHeight}px`
  }else {
    dropDown.value!.style.maxHeight = '0px'
  }
})
</script>

<template>
  <div class="mobile-menu-area">
    <div class="container-fluid menu-block">
      <div class="panel-drop-down py-3 d-flex justify-content-between">
        <p class="text-white title-menu mb-0">menu</p>
        <div @click="isShowMenu = !isShowMenu" class="list-icon d-flex flex-column gap-1">
          <span class="strip-list"></span>
          <span class="strip-list"></span>
          <span class="strip-list"></span>
        </div>
      </div>
      <nav :class="isShowMenu ? 'py-2' : ''">
        <ul class="drop-down-menu" ref="dropDown">
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
          <li class="item-link">
            <router-link to="/">Home</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>

nav {
  transition: 0.7s;
}

.drop-down-menu {
  overflow: hidden;
  transition: 0.7s;
  max-height: 0px;
}

.item-link > a{
  width: 100%;
}

.item-link {
  background: #f8f8f8 none repeat scroll 0 0;
  position: relative;
  width: 100%;
  border-top: 1px solid #ddd;
  padding: 10px 10px;
  display: flex;
}

.title-menu {
  text-transform: uppercase;
  font-size: 20px;
}

.list-icon {
  width: 25px;
  height: 20px;
  background: transparent;
}

.strip-list {
  height: 5px;
  width: 25px;
  display: flex;
  background: white;
}

</style>