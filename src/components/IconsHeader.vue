<script setup>
import {cards} from "../mocks/mocks.js";
import {useCartStore} from "../stores/cardsStore.js";
import {onMounted, ref, watch} from "vue";

const cartStore = useCartStore();
const favoritesCount = ref(cartStore.favoritesCount);
const sumInCart = ref(cartStore.sumInCart);

watch(
    [() => cartStore.favoritesCount, () => cartStore.sumInCart],
    ([newCount, newSum]) => {
      favoritesCount.value = newCount;
      sumInCart.value = newSum;
    },
    { immediate: true }
);

</script>

<template>
  <div class="header__icons">
    <router-link to="/cart">
      <div class="header__icon icon-cart">
        <span class="header__cart-sum">{{ sumInCart }} ₽</span>
        <span class="header__icon-bg icon-cart__bg"></span>
      </div>
    </router-link>
    <div class="header__icon icon-favorites">
      <span class="header__icon-bg icon-favorites__bg"></span>
      <span v-if="favoritesCount > 0" class="icon-favorites__count">{{ favoritesCount }}</span>
    </div>
    <div class="header__icon icon-user">
      <span class="header__icon-bg icon-user__bg"></span>
    </div>
  </div>
</template>

<style scoped>
.header__icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__icon {
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.header__icon:hover {
  color: #bb8c5f;
}

.header__cart-sum:hover + .header__icon-bg {
  background-color: #bb8c5f;
}

.header__icon-bg {
  width: 28px;
  height: 28px;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-color 0.3s ease; /* Анимация цвета */
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #ffffff;
}

.header__icon-bg:hover {
  background-color: #bb8c5f; /* Цвет при наведении */
}

.icon-cart__bg {
  -webkit-mask: url(/public/icons/cart.svg) no-repeat center;
  mask: url(/public/icons/cart.svg) no-repeat center;
}

.icon-favorites__bg {

  -webkit-mask: url(/public/icons/favorites.svg) no-repeat center;
  mask: url(/public/icons/favorites.svg) no-repeat center;
}

.icon-favorites {
  position: relative;
}

.icon-favorites__count {
  position: absolute;
  right: -8px;
  top: -5px;
  width: 20px;
  height: 20px;
  background-color: #bb8c5f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
}

.icon-user__bg {
  -webkit-mask: url(/public/icons/user.svg) no-repeat center;
  mask: url(/public/icons/user.svg) no-repeat center;
}

.icon-cart {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
}

</style>