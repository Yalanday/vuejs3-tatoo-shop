<script setup>
</script>

<template>
  <div class="not-found">
    <h1>404 - Страница не найдена</h1>
    <p>К сожалению, запрашиваемая страница не существует.</p>
    <router-link to="/">Вернуться на главную</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
}
h1 {
  font-size: 2.5em;
  color: #ff6b6b;
}
p {
  margin: 20px 0;
  font-size: 1.2em;
}
</style>