<script setup>

</script>

<template>
  <div class="messengers">
    <ul class="messengers__list">
      <li class="messengers__item"><span class="telegram"></span></li>
      <li class="messengers__item"><span class="viber"></span></li>
      <li class="messengers__item"><span class="wats-app"></span></li>
    </ul>
  </div>
</template>

<style scoped>
.messengers__list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 12px;
}

.messengers__item {
  transition: all 0.3s ease;
  border: 1px solid #bb8c5f;
}

.messengers__item span {
  display: block;
  width: 40px;
  height: 40px;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-color 0.3s ease;
  -webkit-mask-size: 80%;
  mask-size: 70%;
  background-color: #bb8c5f;
  cursor: pointer;
}

.messengers__item span:hover {
  background-color: #ffffff;
}

.messengers__item:hover {
  border-color: #ffffff;
}

.telegram {
  -webkit-mask: url('../assets/icons/telegram.svg') no-repeat center;
  mask: url('../assets/icons/telegram.svg') no-repeat center;
}

.viber {
  -webkit-mask: url('../assets/icons/viber.svg') no-repeat center;
  mask: url('../assets/icons/viber.svg') no-repeat center;
}

.wats-app {
  -webkit-mask: url('../assets/icons/watsapp.svg') no-repeat center;
  mask: url('../assets/icons/watsapp.svg') no-repeat center;
}


</style>