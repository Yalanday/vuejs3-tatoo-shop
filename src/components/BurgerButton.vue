<script setup>
import { ref } from 'vue';

// Реактивное состояние для отслеживания активности
const isActive = ref(false);

// Функция для переключения состояния
const toggleActive = () => {
  isActive.value = !isActive.value;
};
</script>

<template>
  <!-- Кнопка с динамическим классом -->
  <button
      class="burger-button"
      :class="{ active: isActive }"
      aria-label="Открыть меню"
      @click="toggleActive"
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style scoped>
.burger-button {
  position: relative;
  width: 24px; /* Размер кнопки */
  height: 14px; /* Высота кнопки */
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  padding: 0;
  outline: none;
}

.burger-button span {
  display: block;
  width: 100%;
  height: 2px; /* Толщина полосок */
  background-color: #bb8c5f; /* Цвет полосок */
  border-radius: 2px;
  transition: all 0.3s ease-in-out; /* Плавный переход */
}

.burger-button:hover span {
  background-color: #ffffff;
}

/* Анимация для активного состояния */
.burger-button.active span:nth-child(1) {
  transform: translateY(4.5px) rotate(45deg); /* Поворачиваем верхнюю линию */
}

.burger-button.active span:nth-child(2) {
  opacity: 0; /* Прячем среднюю линию */
}

.burger-button.active span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg); /* Поворачиваем нижнюю линию */
}
</style>
