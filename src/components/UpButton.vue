<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

// Показать кнопку при прокрутке вниз
const handleScroll = () => {
  isVisible.value = window.scrollY > 200; // Порог прокрутки для показа кнопки
};

// Прокрутка вверх
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Плавная прокрутка
  });
};

// Установка и удаление обработчиков событий прокрутки
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <button
      v-show="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
  >
    ↑
  </button>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 120px;
  right: 20px;
  padding: 0;
  background: none;
  color: #BB8C5F;
  border: 2px solid #BB8C5F;
  border-radius: 0;
  cursor: pointer;
  font-size: 30px;
  font-weight: 700;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out
}

.scroll-to-top:hover {
  background-color: #BB8C5F;
  color: #ffffff
}

.scroll-to-top:active {
  transform: scale(0.95);
}

.scroll-to-top[v-cloak] {
  display: none;
}

.scroll-to-top[style*="display: none"] {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}
</style>
