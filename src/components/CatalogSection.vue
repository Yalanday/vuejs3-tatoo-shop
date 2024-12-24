<script setup>
import Title from "./Title.vue";
import {catalogItems} from "@/mocks/mocks.js";

console.log(catalogItems)

</script>

<template>
  <section class="main__catalog container section-catalog">
    <div class="section-catalog__title">
      <Title title="Каталог"/>
    </div>
    <div class="section-catalog__content">
      <div class="section-catalog__list">

        <div v-for="item in catalogItems"
             :key="item.id"
             class="section-catalog__item"
             :class="item.class"
              :style="{background: 'url(' + `${item.url}` + ')'}"
        >
          <h3 class="section-catalog__item-title" v-html="item.title"></h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">

.main__catalog {
  margin-bottom: 120px;
}

.section-catalog__title {
  margin-bottom: 50px;
}

.section-catalog__list {
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  justify-content: space-between;
}

.section-catalog__item {
  height: 350px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 45px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  &--small {
    width: 342px;
  }

  &--medium {
    width: 494px;
  }

  &--big {
    width: 700px;
  }
}

.section-catalog__item-title {
  color: #3E424B;
  text-align: left;
  font-size: 30px;
  line-height: 33px;
  font-weight: 700;
}


</style>