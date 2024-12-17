<script setup>
import PhoneMail from "./PhoneMail.vue";
import IconsMessenger from "./IconsMessenger.vue";
</script>

<template>
  <div class="contacts-footer">
    <div class="contacts-wrapper-phone-mess">
      <phone-mail class-name="footer-phone" text="8-800-600-61-91"/>
      <icons-messenger/>
    </div>
    <p class="time-work">Время работы: с 9:00 до 20:00 по мск</p>
    <phone-mail class-name="footer-email" text="Mr.Driskell@mail.ru"/>
  </div>
</template>

<style scoped>
.contacts-footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.contacts-wrapper-phone-mess {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 12px;
  gap: 25px;
}

.time-work {
  color: #636B78;
  margin-bottom: 32px;
}
</style>