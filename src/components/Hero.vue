<script setup>

</script>

<template>
  <div class="main__hero hero">
    <div class="container hero__container">
      <div class="hero__content">
        <h2 class="hero__title">Лучшие товары в мире татуировок</h2>
        <p class="hero__description">Оборудование и расходники для&nbsp;самых&nbsp;ярких&nbsp;и&nbsp;качественных&nbsp;работ
        </p>
        <a href="javascript:void(0);" class="hero__button">
          Смотреть каталог
        </a>

      </div>
    </div>

  </div>
</template>

<style scoped>
.hero {
  width: 100%;
  height: 700px;
  position: relative;
  background-image: url('../assets/baner.png');
  background-position: center;
  background-size: cover;
  margin-bottom: 40px;
}

.hero__content {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 110px;
}

.hero__title {
  font-family: 'Forum', sans-serif;
  font-size: 75px;
  line-height: 75px;
  font-weight: 400;
  color: #BB8C5F;
  text-align: left;
  margin-bottom: 30px;
}

.hero__description {
  font-family: 'Jost', serif;
  font-size: 25px;
  line-height: 35px;
  font-weight: 400;
  color: #ffffff;
  text-align: left;
  margin-bottom: 60px;
}

.hero__button {
  font-family: 'Forum', sans-serif;
  width: 240px;
  height: 70px;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  background-color: #524336;
  border: 2px solid #BB8C5F;
  border-radius: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  user-select: none;
}

.hero__button:hover, .hero__button:focus {
  border-color: #ffffff;
}

.hero__button:active {
  opacity: 0.7;
}

</style>