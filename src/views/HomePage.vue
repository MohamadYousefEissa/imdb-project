<template>
  <div class="container">
    <h3 class="ms-5 my-5">Bundles You May Like :</h3>
    <div class="row overflow-hidden gap-5" v-if="homeShows().isFetch">
      <BaseCardSlider
        v-for="bundle in homeShows().bundles"
        :key="bundle[0].searchName"
        :bundle="bundle"
      />
    </div>
    <div class="row justify-content-center gap-5" v-else>
      <BasePlaceHolder />
      <BasePlaceHolder />
      <BasePlaceHolder />
      <BasePlaceHolder />
    </div>
  </div>
</template>
<script setup lang="ts">
import { homeShows } from '@/store/homeShows/homeShows'
import BaseCardSlider from '@/components/UI/BaseCardSlider.vue'
import BasePlaceHolder from '@/components/UI/BasePlaceHolder.vue'
document.title = 'Imdb clone'
</script>
