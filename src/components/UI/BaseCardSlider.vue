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
        <h5>{{ show.Title }}</h5>

        <h6>{{ show.Year }}</h6>
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
.swiper-wrapper a {
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
    margin-top: -5rem;
    margin-bottom: 1rem;
    transition: all 0.3s;
  }
}
.swiper-slide:hover .swiper-inner {
  opacity: 1;
  h6 {
    margin-top: 0;
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

.swiper-slide:nth-child(1n) {
  background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
  background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
  background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
  background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
  background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
  background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
  background-color: rgb(54, 94, 77);
}
</style>
