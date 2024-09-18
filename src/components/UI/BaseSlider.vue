<template>
  <swiper
    :breakpoints="{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1400: { slidesPerView: 4 }
    }"
    :spaceBetween="20"
    :freeMode="{ enabled: true, sticky: true }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="film in homeShows().topFilms" :key="film.imdbID">
      <router-link :to="{ path: '/title/' + film.imdbID, query: { search: film.searchName } }">
        <BaseCard :title="film.Title" :poster="film.Poster" :type="film.Type" :year="film.Year" />
      </router-link>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { homeShows } from '@/store/homeShows/homeShows'
import { Swiper, SwiperSlide } from 'swiper/vue'
import BaseCard from './BaseCard.vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { FreeMode, Navigation } from 'swiper/modules'
const modules = [FreeMode, Navigation]
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
