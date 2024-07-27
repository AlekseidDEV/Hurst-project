<script setup lang="ts">
defineProps<{
  params: string
}>()
</script>

<template>
  <!-- HEADING-BANNER START -->
  <div class="heading-banner-area overlay-bg">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="heading-banner">
            <div class="heading-banner-title">
              <h2>{{params}}</h2>
            </div>
            <div class="breadcumbs pb-15">
              <ul>
                <li>
                  <router-link class="text-white" to="/">Home</router-link>
                </li>
                <li>{{params}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- HEADING-BANNER END -->
</template>

<style scoped>

</style>