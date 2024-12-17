<script setup>
import {navItems} from "../mocks/mocks.js";

</script>

<template>
  <div class="header__nav">
    <ul class="header__nav-list">
      <li v-for="item in navItems" :key="item.id" class="header__nav-item">
        <a :href="item.href" class="header__nav-link">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header__nav-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}

.header__nav-item {
  font-size: 17px;
  padding: 0 10px;
}

.header__nav-link {
  transition: all 0.3s ease-in-out;
}

.header__nav-link:hover {
  color: #bb8c5f
}
</style>