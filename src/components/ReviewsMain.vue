<script>
import Title from './Title.vue';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import {EffectCoverflow, Pagination} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
    Title
  },
  data() {
    return {
      slideItems: [
        {
          id: 1,
          img: '/src/assets/avtor-1.png',
          text: 'Заказал первый раз, заказ пришёл во время, упаковано все отлично,\n' +
              '            все заказанное соответствует описанию, но есть один маленький ньюанс, коробки все мятые, толи при упаковке\n' +
              '            так случилось толи на складе так отномятся с товаром, в целом всем доволен, буду заказывать ещё,\n' +
              '            сайт-магазин рекомендую к покупкам, в целом всем доволен, буду заказывать ещё'
        },
        {
          id: 2,
          img: '/src/assets/avtor-2.png',
          text: 'Положили всё необходимое + наклейку, скидочную карту и леденцы, неожиданным было то, что держатель и клип-корд в наборе пришёл не того цвета, меня даже порадовало, вот только разочаровала одна упакованная игла, которую не получилось адекватно достать'
        },
        {
          id: 3,
          img: '/src/assets/avtor-1.png',
          text: 'Заказал первый раз, заказ пришёл во время, упаковано все отлично,\n' +
              '            все заказанное соответствует описанию, но есть один маленький ньюанс, коробки все мятые, толи при упаковке\n' +
              '            так случилось толи на складе так отномятся с товаром, в целом всем доволен, буду заказывать ещё,\n' +
              '            сайт-магазин рекомендую к покупкам, в целом всем доволен, буду заказывать ещё'
        },
        {
          id: 4,
          img: '/src/assets/avtor-2.png',
          text: 'Положили всё необходимое + наклейку, скидочную карту и леденцы, неожиданным было то, что держатель и клип-корд в наборе пришёл не того цвета, меня даже порадовало, вот только разочаровала одна упакованная игла, которую не получилось адекватно достать'
        },
        {
          id: 5,
          img: '/src/assets/avtor-1.png',
          text: 'Заказал первый раз, заказ пришёл во время, упаковано все отлично,\n' +
              '            все заказанное соответствует описанию, но есть один маленький ньюанс, коробки все мятые, толи при упаковке\n' +
              '            так случилось толи на складе так отномятся с товаром, в целом всем доволен, буду заказывать ещё,\n' +
              '            сайт-магазин рекомендую к покупкам, в целом всем доволен, буду заказывать ещё'
        },
        {
          id: 6,
          img: '/src/assets/avtor-2.png',
          text: 'Положили всё необходимое + наклейку, скидочную карту и леденцы, неожиданным было то, что держатель и клип-корд в наборе пришёл не того цвета, меня даже порадовало, вот только разочаровала одна упакованная игла, которую не получилось адекватно достать'
        },
        {
          id: 7,
          img: '/src/assets/avtor-1.png',
          text: 'Заказал первый раз, заказ пришёл во время, упаковано все отлично,\n' +
              '            все заказанное соответствует описанию, но есть один маленький ньюанс, коробки все мятые, толи при упаковке\n' +
              '            так случилось толи на складе так отномятся с товаром, в целом всем доволен, буду заказывать ещё,\n' +
              '            сайт-магазин рекомендую к покупкам, в целом всем доволен, буду заказывать ещё'
        },
        {
          id: 8,
          img: '/src/assets/avtor-2.png',
          text: 'Положили всё необходимое + наклейку, скидочную карту и леденцы, неожиданным было то, что держатель и клип-корд в наборе пришёл не того цвета, меня даже порадовало, вот только разочаровала одна упакованная игла, которую не получилось адекватно достать'
        }
      ]
    }
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
};

</script>

<template>
  <div class="main__reviews reviews-main">
    <div class="reviews-main__title">
      <Title title="Отзывы"/>
      <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
        scale: 0.8,
      }"
          :pagination="true"
          :modules="modules"
          :initial-slide="2"
          class="mySwiper"
      >
        <swiper-slide v-for="slide in slideItems" :key="slide.id">
          <div class="slide-container"
               :style="{ '--background-img': `url(${slide.img})` }"
          >
            <p class="slide-container__text">
              {{ slide.text }}
            </p>
            <a href="javascript:void(0)" class="slide-container__link">
              @Velli7350
            </a>
          </div>
        </swiper-slide>

      </swiper>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviews-main {
  &__title {
    text-align: center;
    margin-bottom: 120px;

    h1 {
      font-size: 24px;
      font-weight: bold;
      color: #333;
    }
  }
}

.mySwiper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  height: 380px;
  background: none;
  padding-top: 40px;

  .swiper-slide {
    width: 450px;
    height: 300px;
    border-radius: 10px;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 10px;
      transition: transform 0.3s ease;
    }

    .slide-container {
      width: 100%;
      height: 100%;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;
      background: #050402;
      border-radius: 10px;

    }

    .slide-container::before {
      content: '';
      position: absolute;
      top: -40px;
      left: 40px;
      width: 80px;
      height: 80px;
      background-image: var(--background-img);
      border-radius: 10px;
      transition: transform 0.3s ease;
      z-index: 10000;
    }

    .slide-container__text {
      font-size: 18px;
      line-height: 20px;
      color: #fff;
      padding: 10px;
      text-align: justify;
    }

    .slide-container__link {
      color: #bb8c5f;
      transition: all 0.3s ease-in-out;
    }

    .slide-container__link:hover {
      color: #ffffff;
    }

  }

  .swiper-pagination {
    margin-top: 20px;
  }

  .swiper-pagination-bullet-active {
    background-color: gold !important; /* Золотой цвет для активного буллета */
    transform: scale(1.2); /* Увеличиваем активный буллет */
  }

}

</style>
