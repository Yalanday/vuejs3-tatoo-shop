<script setup>
import {navItems} from "../mocks/mocks.js";

</script>

<template>
  <div class="footer__nav">
    <ul class="footer__nav-list">
      <li v-for="item in navItems" :key="item.id" class="footer__nav-item">
        <a :href="item.href" class="footer__nav-link">
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer__nav-list {
  column-count: 2;
  column-gap: 60px;
}

.footer__nav-item {
  text-align: start;
  font-size: 17px;
  margin-bottom: 30px;
}

.footer__nav-link {
  transition: all 0.3s ease-in-out;
}

.footer__nav-link:hover {
  color: #bb8c5f
}
</style>