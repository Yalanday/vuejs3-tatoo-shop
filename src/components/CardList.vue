<script setup>
import Card from './Card.vue';
import {cards} from "../mocks/mocks.js";

</script>

<template>
  <div class="cards">
    <card v-for="card in cards" :key="card.id" :favorite="card.favorite" :new="card.new" :card="card.data"/>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

</style>