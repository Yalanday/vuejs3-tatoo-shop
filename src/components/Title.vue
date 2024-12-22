<script setup>

defineProps({
  title: String
})

</script>

<template>
<h2 class="title">{{title}}</h2>
</template>

<style scoped>
.title {
  font-family: 'Forum', sans-serif;
  font-size: 60px;
  line-height: 60px;
  font-weight: 400;
  color: #3E424B;
}
</style>