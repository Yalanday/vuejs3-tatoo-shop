<script setup>
import BurgerButton from "./BurgerButton.vue";

</script>

<template>
  <div class="header__catalog-menu">
    <span class="header__catalog-title">Каталог</span>
    <burger-button />
  </div>
</template>

<style scoped>
.header__catalog-menu {
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__catalog-title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
  padding-bottom: 7px;
}
</style>