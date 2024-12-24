<script setup>
import {ref, computed, watch} from "vue";
import {useCartStore} from "../stores/cardsStore.js";

const store = useCartStore();
const cardsInCart = computed(() => {
  console.log("Геттер cardsInCart:", store.cardsInCart);
  return store.cardsInCart;
});

watch(
    () => store.cardsInCart,
    (newCardsInCart) => {
      cardsInCart.value = newCardsInCart;
    },
    {immediate: true}
);

function increaseQuantity(cardId) {
  store.increaseQuantity(cardId);
}

function decreaseQuantity(cardId) {
  store.decreaseQuantity(cardId);
}

function removeFromCart(cardId) {
  store.removeFromCart(cardId);
}
</script>

<template>
  <div>
    <table border="1" cellpadding="10">
      <thead>
      <tr>
        <th style="text-align: left">Наименование</th>
        <th>Цена</th>
        <th>Количество</th>
        <th>Стоимость</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cardsInCart" :key="item.id">
        <td class="td-prod">
          <img :src="item.data[0].src" alt="Товар" width="100"/>
          <span>{{ item.title }}</span>
        </td>
        <td class="td-price">{{ item.price }} ₽</td>
        <td class="td-quantity">
          <button @click="decreaseQuantity(item.id)">-</button>
          {{ item.quantitu }}
          <button @click="increaseQuantity(item.id)">+</button>
        </td>
        <td class="td-sum">{{ item.price * item.quantitu }} ₽</td>
        <td class="td-action">
          <button @click="removeFromCart(item.id)">✕</button>
        </td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td colspan="3" style="text-align: right"><strong>Итого:</strong></td>
        <td colspan="1">{{ store.sumInCart }} ₽</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  border: none;
}

th,
td {
  text-align: center;
  padding: 10px;
  border: none;
}

th {
  border-bottom: 1px solid #d0d0d0;
}

.td-prod {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

.td-quantity button,
.td-action button {
  width: 25px;
  background: none;
  font-size: 20px;
  font-weight: 400;
  padding: 0 5px;
}
</style>
