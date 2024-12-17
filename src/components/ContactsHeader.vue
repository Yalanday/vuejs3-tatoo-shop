<script setup>
import {ref} from 'vue'
import PhoneMail from "./PhoneMail.vue";

</script>

<template>
  <div>
    <div class="header__contact-list">
      <phone-mail class-name="header-phone" text="+7-952-552-52-52"/>
      <phone-mail class-name="header-email" text="Mr.Driskell@mail.ru"/>
    </div>
    <div class="header__messengers">
      <div class="header__messenger">Viber</div>
      <div class="header__messenger">Whats App</div>
      <div class="header__messenger">Telegram</div>
    </div>
  </div>
</template>

<style scoped>
.header__contact-list {
  display: flex;
  align-items: center;
  gap: 60px
}

.header__messengers {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header__messenger {
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.header__messenger:hover {
  color: #bb8c5f;
}
</style>