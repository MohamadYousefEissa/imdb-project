<script setup lang="ts">
import { homeShows } from '@/store/homeShows/homeShows'
import { searchStore } from '@/store/searchStore/searchStore'
import BaseCardSlider from '@/components/templates/BaseCardSlider.vue'
import BaseSlider from '@/components/templates/BaseSlider.vue'
import BasePlaceHolder from '@/components/UI/BasePlaceHolder.vue'
document.title = 'Imdb clone'
const storeHome = homeShows()
function resetShows() {
  searchStore().shows = []
  const input = document.querySelector('#search-input') as HTMLInputElement
  input.value = ''
}
</script>
<template>
  <div class="container">
    <h3 class="my-5 fw-bold">Bundles You May Like :</h3>
    <div v-if="storeHome.errorMessage">
      <div class="alert alert-danger" role="alert">{{ storeHome.errorMessage }}</div>
    </div>
    <div class="row gap-5 d-flex overflow-hidden" v-if="storeHome.isFetch">
      <BaseCardSlider
        v-for="bundle in storeHome.bundles"
        :key="bundle[0].searchName"
        :bundle="bundle"
        @click="resetShows"
      />
    </div>
    <div class="row justify-content-center gap-5" v-else>
      <BasePlaceHolder />
      <BasePlaceHolder />
      <BasePlaceHolder />
      <BasePlaceHolder />
    </div>
    <div class="row mt-5 pt-5 gap-5" v-if="storeHome.isFetch">
      <h3 class="fw-bold">Top Films :</h3>
      <BaseSlider @click="resetShows" />
    </div>
  </div>
</template>
