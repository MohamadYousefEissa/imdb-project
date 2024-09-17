<template>
  <div class="d-flex">
    <BaseCardSlider v-for="bundle in bundles" :key="bundle" :bundle="bundle" />
  </div>
</template>
<script setup>
import { homeShows } from '@/store/homeShows/homeShows'

import BaseCardSlider from '@/components/UI/BaseCardSlider.vue'
const storeHome = homeShows()
const bundles = storeHome.bundles
document.title = 'Imdb clone'
</script>
