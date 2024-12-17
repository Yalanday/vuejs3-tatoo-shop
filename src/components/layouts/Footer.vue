<script setup>
import {ref} from 'vue'
import LogoHeader from "../LogoHeader.vue";
import NavFooter from "../NavFooter.vue";
import ContactsFooter from "../ContactsFooter.vue";

</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__left">
        <div>
          <logo-header/>
          <div class="footer__policy">
            <a href="javascript:void(0)" class="policy">
              Политика конфиденциальности
            </a>
          </div>
        </div>

        <nav-footer class="footer__nav"/>

      </div>
      <div class="footer__right">
        <contacts-footer/>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer__container {
  display: flex;
  height: 100%;
}

.footer__left {
  display: flex;
  flex-wrap: nowrap;
  gap: 70px;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60%;
  position: relative;
}

.footer__left::after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 1px;
  height: 100%;
  background-color: #bb8c5f;
}

.footer__policy {
  margin-top: 50px;
}

.policy {
  transition: all 0.3s ease-in-out;
}

.policy:hover {
  color: #bb8c5f;
}

.footer__right {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}
</style>
