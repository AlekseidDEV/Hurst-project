<script setup lang="ts">
import SliderBannerSocialMD from "@/components/ui/SliderBanner/SliderBannerSocialMD.vue";
import SliderBannerLeft from "@/components/ui/SliderBanner/SliderBannerLeft.vue";
import SliderBannerRight from "@/components/ui/SliderBanner/SliderBannerRight.vue";
import SliderBannerButtons from "@/components/ui/SliderBanner/SliderBannerButtons.vue";
</script>

<template>
  <!-- SLIDER-BANNER-AREA START -->
  <section class="slider-banner-area clearfix">
    <SliderBannerSocialMD/>
    <SliderBannerLeft/>
    <SliderBannerRight/>
    <SliderBannerButtons/>
  </section>
  <!-- End Slider-section -->
</template>

<style scoped>

</style>