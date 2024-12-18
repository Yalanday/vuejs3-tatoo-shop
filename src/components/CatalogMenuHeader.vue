<script setup>
import {defineEmits} from 'vue';
import BurgerButton from "./BurgerButton.vue";

// Проп для получения текущего состояния

// Указываем событие, которое будет отправлено в родительский компонент
const emit = defineEmits(['toggle']);

// Функция для обработки события от Burger
const handleToggle = () => {
  emit('toggle');
};
</script>

<template>
  <div class="header__catalog-menu">
    <span class="header__catalog-title">Каталог</span>
    <burger-button @click="handleToggle"/>
  </div>
</template>

<style scoped>
.header__catalog-menu {
  position: relative;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__catalog-title {
  font-family: 'Jost', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  line-height: 35px;
  padding-bottom: 7px;
}
</style>