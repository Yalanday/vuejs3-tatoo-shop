<script setup>
import {itemsCatalog} from "../mocks/mocks.js";


</script>

<template>
  <div class="catalog-menu">
    <ul class="catalog-menu__list">
      <li class="catalog-menu__item" v-for="item in itemsCatalog" :key="item.id">
        <a href="javascript:void(0)" class="catalog-menu__link">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.catalog-menu {
  top: 111%;
  width: 100%;
  position: absolute;
  background-color: #ffffff;
  padding: 40px 50px;
}

.catalog-menu::before {
  content: "";
  position: absolute;
  top: -15px; /* Расположить треугольник над блоком */
  left: 5%; /* Центрировать треугольник */
  transform: translateX(-50%) rotate(180deg); /* Для точного центрирования */
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 15px 15px 0 15px; /* Размер треугольника */
  border-color: #ffffff transparent transparent transparent; /* Цвет треугольника */
}

.catalog-menu__list {
  column-count: 5; /* Количество колонок */
  column-gap: 5px; /* Расстояние между колонками */
  list-style: none;
  padding: 0;
  margin: 0;
}

.catalog-menu__item {
  padding: 5px 0;
  color: #3E424B;
}

.catalog-menu__link {
  transition: all 0.3s ease-in-out;
  border-bottom: 1px solid #ffffff;
}

.catalog-menu__link:hover {
  color: #bb8c5f;
  border-color: #bb8c5f;

}
</style>