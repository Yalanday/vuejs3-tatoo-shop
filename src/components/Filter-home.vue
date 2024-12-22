<script setup>
import CardList from "./CardList.vue";
import {itemsFilter} from "../mocks/mocks.js";


</script>

<template>
  <div class="main__filter main-filter">
    <div class="container main-filter__container">
      <ul class="main-filter__list filter-list">
        <li v-for="item in itemsFilter" :key="item.id" class="filter-list__item">
          {{ item.text }}
        </li>
      </ul>
      <card-list/>
    </div>
  </div>
</template>

<style scoped>

.main-filter {
  margin-bottom: 120px;
}

.filter-list {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.filter-list__item {
  font-family: 'Jost', serif;
  font-weight: 500;
  color: #3E424B;
  font-size: 30px;
  line-height: 35px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid transparent;
  padding-bottom: 8px;
}

.filter-list__item:hover {
  color: #BB8C5F;
  border-bottom-color: #BB8C5F;
}

.filter-list__item.active {
  color: #BB8C5F;
  border-bottom-color: #BB8C5F;
}

</style>