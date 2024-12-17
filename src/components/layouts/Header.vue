<script setup>
import {ref} from 'vue'
import ContactsHeader from "../ContactsHeader.vue";
import LogoHeader from "../LogoHeader.vue";
import IconsHeader from "../IconsHeader.vue";
import CatalogMenuHeader from "../CatalogMenuHeader.vue";
import Search from "../Search.vue";
import NavHeader from "../NavHeader.vue";

</script>

<template>
  <header class="header">
    <div class="container header__container">
      <contacts-header class="header__contacts"/>
      <logo-header class="header__logo"/>
      <icons-header class="header__icons"/>
      <catalog-menu-header class="header__catalog-menu"/>
      <search class="header__search" :items="['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape']"/>
      <nav-header class="header__nav"/>
    </div>
  </header>
</template>

<style scoped>
.header__container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 10px;
  align-items: center;
}

.header__contacts {
  grid-row: 1/1;
  grid-column: 1/5;
}

.header__logo {
  grid-row: 1/1;
  grid-column: 5/9;
}

.header__icons {
  grid-row: 1/1;
  grid-column: 9/13;
}

.header__catalog-menu {
  grid-row: 2/2;
  grid-column: 1/2;
}

.header__search {
  grid-row: 2/2;
  grid-column: 2/7;
}

.header__nav {
  grid-row: 2/2;
  grid-column: 7/13;
}


</style>
