<script setup>
import {ref, watch} from 'vue';
import {useCounterStore} from "../../stores/conterStore.js";
import {useCartStore} from "../../stores/cardsStore.js";

const cartStore = useCartStore();
const sumInCart = ref(cartStore.sumInCart);
const quantituCount = ref(cartStore.quantituCount);

watch(
    () => cartStore.sumInCart,
    (newSum) => {
      sumInCart.value = newSum;
    },
    { immediate: true }
);

watch(
    () => cartStore.quantituCount,
    (newQuantituCount) => {
      quantituCount.value = newQuantituCount;
    },
    { immediate: true }
);

const counterStore = useCounterStore();
const counter = ref(counterStore.count);

function increment() {
  counterStore.increment();
  counter.value = counterStore.count;
}

function decrement() {
  counterStore.decrement();
  counter.value = counterStore.count;
}

</script>

<template>
  <div>
    <div class="order-details__container">
      <p class="order-details__row">
        <span>Всего единиц товаров:</span>
        <span class="result-span">{{quantituCount}}</span>
      </p>

      <p class="order-details__row order-details__row--big">
        <b>Итого:</b>
        <b>{{ sumInCart }} ₽</b>
      </p>
    </div>
  </div>

</template>

<style lang="scss">
.order-details__container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 45px 40px;
}

.order-details__row {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 10px;

  &--big {
    font-size: 24px;
  }
}

.result-span {
  font-size: 20px;
}
</style>