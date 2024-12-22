<script setup>

const fullSiceItems = [
  {
    id: 1,
    name: 'Краски Lip Nitn',
    image: './src/assets/promo-1.png',
    titlePosition: 'center'
  },
  {
    id: 2,
    name: 'Foxx viper — <br> хит 2021 года',
    image: './src/assets/promo-2.png',
    titlePosition: 'flex-start'
  },
]

</script>

<template>
  <div class="full-size-promo">
    <div v-for="item in fullSiceItems" :key="item.id" class="full-size-promo-item" :style="{ 'background-image': `url(${item.image})`, alignItems: item.titlePosition }">
      <h3 class="full-size-promo-item-title" v-html="item.name"></h3>
      <a class="full-size-promo-item-link" href="javascrip:void(0)">Смотреть в каталоге</a>
    </div>
  </div>
</template>

<style scoped>
.full-size-promo {
  display: flex;
  gap: 20px;
  height: 470px;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  margin-bottom: 120px;
}

.full-size-promo-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px 50px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.full-size-promo-item-title {
  font-size: 40px;
  line-height: 52px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
}

.full-size-promo-item-link {
  font-family: 'Jost', sans-serif;
  color: #bb8c5f;
  border-bottom: 1px solid #bb8c5f;
  font-size: 20px;
  line-height: 30px;
  font-weight: 400;
  transition: all 0.3s ease-in-out;
}

.full-size-promo-item-link:hover {
  color: #ffffff;
  border-bottom: 1px solid #ffffff;
}
</style>