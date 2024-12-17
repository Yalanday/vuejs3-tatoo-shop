<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  text: String,
  className: {
    type: String,
    required: false,
    default: ''
  }
})

</script>

<template>
  <div :class="['contact-item', className]">{{ text }}</div>
</template>

<style scoped>
.contact-item {
  font-size: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

.contact-item:hover {
  color: #bb8c5f;
}

.contact-item::before {
  content: '';
  width: 28px;
  height: 28px;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-color 0.3s ease;
  -webkit-mask-size: contain;
  mask-size: contain;
  background-color: #ffffff;
}

.contact-item:hover::before {
  background-color: #bb8c5f;
}

.header-phone::before,
.footer-phone::before{
  -webkit-mask: url('../assets/icons/call.svg') no-repeat center;
  mask: url('../assets/icons/call.svg') no-repeat center;
}

.header-email::before,
.footer-email::before{
  -webkit-mask: url('../assets/icons/mail.svg') no-repeat center;
  mask: url('../assets/icons/mail.svg') no-repeat center;
}
</style>