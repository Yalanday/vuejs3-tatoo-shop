<script setup>
import Header from "./components/layouts/Header.vue";
import Footer from "./components/layouts/Footer.vue";
import {cards} from "./mocks/mocks.js";
import {useCartStore} from "./stores/cardsStore.js";
import {onUnmounted, ref} from "vue";

const cardsStore = useCartStore();

const setCards = () => {
  cardsStore.setCards(cards);
}

onUnmounted(
    setCards()
)

</script>

<template>
  <Header/>
  <main>
    <router-view />
  </main>
  <Footer/>
</template>

<style scoped>

</style>
