<script setup>
import Title from "../components/Title.vue";
import CartTable from "../components/CartTable.vue";
import OrderDetails from "../components/layouts/OrderDetails.vue";

</script>

<template>
  <div class="cart">
    <div class="cart__container container">
      <div class="cart__title">
        <Title title="Корзина"/>
      </div>
      <div class="cart__content">
        <cart-table class="cart__table"/>
        <order-details class="cart__order-details"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.cart__container {
  padding-top: 50px;
  color: #3E424B;
}

.cart__title {
  text-align: left;
  margin-bottom: 40px;
}

.cart__content {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px
}

.cart__table {
  width: 70%;
}

.cart__order-details {
  width: 30%;
}

</style>