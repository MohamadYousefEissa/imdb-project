<script setup>
import { filmDetails } from '@/store/filmDetails/filmDetails'
import BaseGenre from '@/components/UI/BaseGenre.vue'
import BaseInformation from '@/components/UI/BaseInformation.vue'
import BaseStar from '@/components/icons/BaseStar.vue'

const store = filmDetails()
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h1>{{ store.title }}</h1>
        <p>{{ store.year }} {{ store.ratedGetter }} {{ store.runtimeGetter }}</p>
        <p class="d-flex gap-2" v-if="store.rateGetter">
          <BaseStar />
          <span
            ><span class="fw-bold">{{ store.rate }}</span
            ><span>/10</span></span
          >
        </p>
        <img :src="store.poster" alt="" class="rounded-1" />
        <ul class="d-flex gap-3 p-0">
          <BaseGenre v-for="genre in store.genreGetter" :key="genre" :name="genre" />
        </ul>
        <article>
          <p>
            {{ store.describtionGetter }}
          </p>
        </article>
        <BaseInformation
          :title="'Directors'"
          :names="store.directorsGetter"
          v-if="store.directorsGetter"
        />
        <BaseInformation
          :title="'Writers'"
          :names="store.writersGetter"
          v-if="store.writersGetter"
        />
        <BaseInformation :title="'Stars'" :names="store.starsGetter" v-if="store.starsGetter" />
        <BaseInformation
          :title="'Box Office'"
          :names="store.boxofficeGetter"
          v-if="store.boxofficeGetter"
        />
      </div>
    </div>
  </div>
</template>
