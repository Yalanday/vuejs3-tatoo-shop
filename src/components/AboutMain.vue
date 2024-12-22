<script setup>

</script>

<template>
  <div class="main__about about-main">
    <div class="about-main__container">
      <img class="about-main__img" src="../assets/about-main-img.png" alt="">
      <div class="about-main__text">
        <h1 class="about-main__title">Тату магазин Mr. Driskell</h1>
        <p class="about-main__text-p">Приветствуем вас в Tattoo Mall — в нашем тату магазине собираются энтузиасты
          индустрии, профессиональные мастера и новички, которые только делают первые шаги в тату искусстве. Мы знаем,
          насколько важно грамотно и точно подобрать инструменты для продуктивных тату сеансов, и помогаем быстро найти
          то, что поможет их сделать именно такими.
          В нашем ассортименте не просто тату оборудование, это буквально целая команда из грамотных и действительно
          эффективных помощников на вашем рабочем столе. Пройдя этап долгих разработок и бесчисленных тестов
          под пристальным взглядом отечественных машиностроителей, космецевтов и брендов с мировым именем, эти товары
          нарабатывали опыт и каждый день становились лучше, чтобы показать, на что они способны, и помочь раскрыть
          ваш потенциал.</p>
        <button type="button" class="about-main__button">О комапании</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-main__container {
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  margin-bottom: 120px;
}

.about-main__img {
  width: 50%;
}

.about-main__text {
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px
}

.about-main__text-p {
  color: #3E424B;
  text-align: justify;
}


.about-main__title {
  font-family: 'Forum', sans-serif;
  font-size: 50px;
  font-weight: 400;
  line-height: 65px;
  color: #BB8C5F;
  text-align: left;
}

.about-main__button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #eeeeee;
  color: #BB8C5F;
  border: 1px solid #BB8C5F;
  transition: all 0.3s ease-in-out;
  outline: none;
}

.about-main__button:hover {
  background-color: #BB8C5F;
  color: #ffffff;
}
</style>