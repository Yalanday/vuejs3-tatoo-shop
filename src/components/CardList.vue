<script setup>
import Card from './Card.vue'

const cards = [
  {
    id: 1,
  }, {
    id: 2,
  }, {
    id: 3,
  }, {
    id: 4,
  }, {
    id: 5,
  }, {
    id: 6,
  }, {
    id: 7,
  }, {
    id: 8,
  },
]


</script>

<template>
  <div class="cards">
    <card v-for="card in cards" :key="card.id" :card="card"/>
  </div>
</template>

<style scoped>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

</style>