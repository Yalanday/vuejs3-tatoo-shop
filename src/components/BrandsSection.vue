<script setup>
import Title from './Title.vue'
import BrandSlider from "./BrandSlider.vue";
</script>

<template>
  <div class="main__brands brands-section container">
    <div class="main__brands__title">
      <Title title="Популярные бренды"/>
    </div>
    <BrandSlider/>
    <BrandSlider reverse-direction="false"/>
  </div>
</template>

<style scoped>
.main__brands {
  margin-bottom: 120px;
}

.main__brands__title {
  text-align: left;
  margin-bottom: 40px;
}
</style>