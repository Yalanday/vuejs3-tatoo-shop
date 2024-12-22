<script setup>
import { ref } from 'vue';
import Card from './Card.vue';
import { cards } from "../mocks/mocks.js";

// Изначально отображаем только 8 элементов
const visibleCards = ref(8);

// Функция для увеличения количества отображаемых элементов
const showMore = () => {
  visibleCards.value += 8; // Показываем ещё 8 элементов
};
</script>

<template>
  <div class="cards">
    <card
        v-for="card in cards.slice(0, visibleCards)"
        :key="card.id"
        :favorite="card.favorite"
        :new="card.new"
        :card="card.data"
    />
  </div>
  <button v-if="visibleCards < cards.length" @click="showMore" class="show-more">
    Показать ещё
  </button>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.show-more {
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #eeeeee;
  color: #BB8C5F;
  border: 1px solid #BB8C5F;
  transition: all 0.3s ease-in-out;
}

.show-more:hover {
  background-color: #BB8C5F;
  color: #ffffff;
}
</style>
