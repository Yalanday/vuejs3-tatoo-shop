<script setup>

</script>

<template>
  <button class="burger-button" aria-label="Открыть меню">
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

/* Анимация для активного состояния */
.burger-button.active span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg); /* Поворачиваем верхнюю линию */
}

.burger-button.active span:nth-child(2) {
  opacity: 0; /* Прячем среднюю линию */
}

.burger-button.active span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg); /* Поворачиваем нижнюю линию */
}

</style>