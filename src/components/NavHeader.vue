<script setup>

</script>

<template>
  <div class="header__nav">
    <ul class="header__nav-list">
      <li class="header__nav-item">
        <a href="javascript:void(0)" class="header__nav-link">
          Промокоды
        </a>
      </li>
      <li class="header__nav-item">
        <a href="javascript:void(0)" class="header__nav-link">
          Скидки
        </a>
      </li>
      <li class="header__nav-item">
        <a href="javascript:void(0)" class="header__nav-link">
          Помощь
        </a>
      </li>
      <li class="header__nav-item">
        <a href="javascript:void(0)" class="header__nav-link">
          О нас
        </a>
      </li>
      <li class="header__nav-item">
        <a href="javascript:void(0)" class="header__nav-link">
          Контакты
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.header__nav-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
}

.header__nav-item {
  font-size: 17px;
}

.header__nav-link {
  transition: all 0.3s ease-in-out;
}

.header__nav-link:hover {
  color: #bb8c5f
}
</style>