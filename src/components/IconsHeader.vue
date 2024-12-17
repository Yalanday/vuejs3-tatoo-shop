<script setup>

</script>

<template>
  <div class="header__icons">
    <div class="header__icon icon-cart">
      <span class="header__cart-sum">37 280 ₽</span>
      <span class="header__icon-bg icon-cart__bg"></span>
    </div>
    <div class="header__icon icon-favorites">
      <span class="header__icon-bg icon-favorites__bg"></span>
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
  -webkit-mask: url(../assets/icons/cart.svg) no-repeat center;
  mask: url(../assets/icons/cart.svg) no-repeat center;
}

.icon-favorites__bg {
  -webkit-mask: url(../assets/icons/favorites.svg) no-repeat center;
  mask: url(../assets/icons/favorites.svg) no-repeat center;
}

.icon-user__bg {
  -webkit-mask: url(../assets/icons/user.svg) no-repeat center;
  mask: url(../assets/icons/user.svg) no-repeat center;
}

.icon-cart {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
}

</style>