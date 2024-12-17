<script setup>

</script>

<template>
  <div class="footer__nav">
    <ul class="footer__nav-list">
      <li class="footer__nav-item">
        <a href="javascript:void(0)" class="footer__nav-link">
          Промокоды
        </a>
      </li>
      <li class="footer__nav-item">
        <a href="javascript:void(0)" class="footer__nav-link">
          Скидки
        </a>
      </li>
      <li class="footer__nav-item">
        <a href="javascript:void(0)" class="footer__nav-link">
          Помощь
        </a>
      </li>
      <li class="footer__nav-item">
        <a href="javascript:void(0)" class="footer__nav-link">
          О нас
        </a>
      </li>
      <li class="footer__nav-item">
        <a href="javascript:void(0)" class="footer__nav-link">
          Контакты
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer__nav-list {
  column-count: 2;
  column-gap: 60px;
}

.footer__nav-item {
  text-align: start;
  font-size: 17px;
  margin-bottom: 30px;
}

.footer__nav-link {
  transition: all 0.3s ease-in-out;
}

.footer__nav-link:hover {
  color: #bb8c5f
}
</style>