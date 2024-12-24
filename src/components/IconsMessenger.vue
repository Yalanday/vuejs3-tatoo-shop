<script setup>

</script>

<template>
  <div class="messengers">
    <ul class="messengers__list">
      <li class="messengers__item" aria-label="telegram"><span class="telegram"></span></li>
      <li class="messengers__item" aria-label="viber"><span class="viber"></span></li>
      <li class="messengers__item" aria-label="whatsapp"><span class="wats-app"></span></li>
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
  -webkit-mask: url('/icons/telegram.svg') no-repeat center;
  mask: url('/icons/telegram.svg') no-repeat center;
}

.viber {
  -webkit-mask: url('/icons/viber.svg') no-repeat center;
  mask: url('/icons/viber.svg') no-repeat center;
}

.wats-app {
  -webkit-mask: url('/icons/watsapp.svg') no-repeat center;
  mask: url('/icons/watsapp.svg') no-repeat center;
}


</style>