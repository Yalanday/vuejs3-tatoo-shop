<script>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/grid';
import 'swiper/css/pagination';
import {Grid, Pagination, Autoplay} from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    reverseDirection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      brandsImg: [
        { id: 1, img: '/src/assets/brands/1.png', alt: 'brand 1' },
        { id: 2, img: '/src/assets/brands/2.png', alt: 'brand 2' },
        { id: 3, img: '/src/assets/brands/3.png', alt: 'brand 3' },
        { id: 4, img: '/src/assets/brands/4.png', alt: 'brand 4' },
        { id: 5, img: '/src/assets/brands/5.png', alt: 'brand 5' },
        { id: 6, img: '/src/assets/brands/6.png', alt: 'brand 6' },
        { id: 7, img: '/src/assets/brands/7.png', alt: 'brand 7' },
        { id: 8, img: '/src/assets/brands/8.png', alt: 'brand 8' },
        { id: 9, img: '/src/assets/brands/9.png', alt: 'brand 9' },
        { id: 10, img: '/src/assets/brands/10.png', alt: 'brand 10' },
        { id: 11, img: '/src/assets/brands/11.png', alt: 'brand 11' },
        { id: 12, img: '/src/assets/brands/12.png', alt: 'brand 12' },
      ],
    };
  },
  setup() {
    return {
      modules: [Grid, Pagination, Autoplay],
    };
  },

};

</script>

<template>
  <swiper
      :slides-per-view="5"
      :grid="{ rows: 1 }"
      :space-between="0"
      :modules="modules"
      :loop="true"
      :autoplay="{reverseDirection: reverseDirection, delay: 0, disableOnInteraction: false }"
      :speed="4000"
      class="mySwiper"
  >
    <swiper-slide v-for="brand in brandsImg" :key="brand.id">
      <img :src="brand.img" :alt="brand.alt"/>
    </swiper-slide>
  </swiper>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  height: 102px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
}
</style>
