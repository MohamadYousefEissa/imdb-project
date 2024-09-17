<template>
  <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
    :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
  >
    <swiper-slide v-for="show in bundle" :key="show.imdbID">
      <img :src="show.Poster" alt="" />
      <div class="swiper-inner">
        <div>
          <h5>{{ show.Title }}</h5>
          <h6>{{ show.Year }}</h6>
        </div>
      </div>
      <router-link :to="`/title/${show.imdbID}?search=${bundle[0].searchName}`"></router-link>
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectCards, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/autoplay'
const modules = [EffectCards, Autoplay]
defineProps<{
  bundle: { Poster: string; Title: string; Year: string; imdbID: string; searchName: string }[]
}>()
</script>

<style scoped>
img {
  transform: scale(0.85);
}
a {
  position: absolute;
  width: 100%;
  height: 100%;
}
.swiper-inner {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  overflow-wrap: anywhere;
  padding: 0 10px;
  background: #00000069;
  opacity: 0;
  text-align: center;
  backdrop-filter: blur(4px);
  transition: opacity 0.3s;
  h6 {
    color: grey;
  }
  & > div {
    transform: translateY(100px);
    transition: transform 0.3s;
  }
}
.swiper-slide:hover .swiper-inner {
  opacity: 1;
  & > div {
    transform: translateY(0);
  }
}
.swiper {
  width: 240px;
  height: 320px;
}
.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}
</style>
