<script setup>
import {defineProps, ref, watch} from 'vue'
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import {Pagination} from "swiper/modules";
import SvgHeart from "./SvgHeart.vue";
import {useCartStore} from "../stores/cardsStore.js";

const modules = [Pagination];

const props = defineProps({
  favorite: Boolean,
  new: Boolean,
  title: String,
  price: Number,
  card: Array,
  id: Number,
  incart: Boolean,
})

const isFavorite = ref(props.favorite);
const inCart = ref(props.incart);

function formatPrice(price) {
  if (price >= 1000) {
    return price.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');  // Добавляет пробел перед последними тремя цифрами
  }
  return price;
}

const cartStore = useCartStore();

function toggleFavorite(cardId) {
  cartStore.toggleFavorite(cardId);
}

function toggleInCart(cardId) {
  cartStore.toggleInCart(cardId);
}

watch(
    [
      () => cartStore.cards.find(card => card.id === props.id)?.favorite,
      () => cartStore.cards.find(card => card.id === props.id)?.incart
    ],
    ([newFavorite, newInCart]) => {
      if (newFavorite !== undefined) {
        isFavorite.value = newFavorite;
      }
      if (newInCart !== undefined) {
        inCart.value = newInCart;
      }
    },
    { immediate: true }
);


</script>

<template>
  <div class="card">
    <div class="card__slider">
      <swiper
          :pagination="{
                dynamicBullets: true,
          }"
          :modules="modules" class="mySwiper">
        <swiper-slide v-for="image in card" :key="image.id">
          <img class="object-fill w-full h-96"
               :src="image.src" :alt="image.alt"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="card__text-content">
      <h3 class="card__title">
        {{ title }}
      </h3>
      <span class="card__price">{{ formatPrice(price) }} ₽ </span>
    </div>
    <div v-if="new" class="card__label">
      <span class="card__label-text">
          Новинка
      </span>
    </div>
    <div :class="{ active: isFavorite }" class="card__favorites" @click="toggleFavorite(id)">
      <svg-heart/>
    </div>
    <button @click="toggleInCart(id)" class="card__button">
      {{ inCart ? 'В корзине' : 'Добавить в корзину' }}
    </button>
  </div>
</template>

<style scoped>

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 289px;
  height: 384px;
  background-color: #f5f5f5;
  transition: box-shadow 0.3s ease; /* Плавное появление тени */
}

.card::before,
.card::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 25px;
  background-color: #f5f5f5;
  z-index: 10;
  opacity: 0;

  transition: opacity 0.3s ease, transform 0.3s ease; /* Анимация появления */
}

.card::before {
  top: -25px;
  box-shadow: 1px -6px 6px rgba(0, 0, 0, 0.1)

}

.card::after {
  bottom: -25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

.card:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover .card__slider,
.card:hover .card__label,
.card:hover .card__favorites {
  margin-top: -25px;
}

.card:hover .card__text-content {
  justify-content: flex-start;
  gap: 14px;
  padding: 10px 30px 10px;
}

.card:hover::before,
.card:hover::after {
  opacity: 1;
  transform: translateY(0);
}


.card__slider {
  width: 100%;
  height: 258px;
}

.mySwiper {
  width: 100%;
  height: 100%;
}

img {
  object-fit: cover;
}

.card__text-content {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px 30px 30px;
}

.card__title {
  font-family: 'Jost', sans-serif;
  font-size: 17px;
  line-height: 24px;
  color: #3E424B;
  text-align: left;
  font-weight: 400;
}

.card__price {
  font-family: 'Jost', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #BB8C5F;
}

.card__label {
  position: absolute;
  top: 30px;
  left: 30px;
  min-width: 85px;
  height: 30px;
  border: 1px solid #BB8C5F;
  border-right: none;
  z-index: 10;
  font-family: 'Jost', sans-serif;
  color: #BB8C5F;
  font-size: 15px;
  padding-right: 12px;
}

.card__label::after {
  content: '';
  position: absolute;
  top: 4px;
  right: -10px;
  width: 20px;
  height: 20px;
  border-left: 1px solid #BB8C5F;
  border-bottom: 1px solid #BB8C5F;
  transform: rotate(45deg);
  color: #BB8C5F;
}

.card__label-text {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 10px 0 5px;
}

.card__favorites {
  position: absolute;
  top: 30px;
  right: 30px;
  width: 28px;
  height: 28px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card__favorites svg {
  width: 25px;
  height: 20px;
  stroke: #BB8C5F;
  fill: #ffffff;
  transition: fill 0.3s ease-in-out;
}

.card__favorites.active svg {
  fill: #BB8C5F;
}

.card__button {
  font-family: 'Jost', serif;
  font-size: 20px;
  line-height: 20px;
  font-weight: 400;
  color: #BB8C5F;
  border: 1px solid #BB8C5F;
  background-color: #eeeeee;
  align-self: center;
  width: 260px;
  height: 50px;
  opacity: 0; /* Изначально скрыто */
  display: none; /* Не отображается */
  transition: all 0.3s ease-in-out;
  outline: none;
}

.card__button:hover,
.card__button:focus {
  color: #ffffff;
  background-color: #BB8C5F;
}

.card__button:active {
  background-color: rgba(187, 140, 95, 0.6)
}

.card:hover .card__button {
  display: block; /* Появляется в потоке */
  animation: fadeIn 0.3s ease-in-out forwards; /* Запуск анимации */
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.card:not(:hover) .card__button {
  animation: fadeOut 0.3s ease-in-out forwards; /* Исчезновение */
  animation-delay: 0.3s; /* Задержка перед скрытием */
}

</style>
