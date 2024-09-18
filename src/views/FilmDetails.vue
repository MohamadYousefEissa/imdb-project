<script setup lang="ts">
import { filmDetails } from '@/store/filmDetails/filmDetails'
import BaseGenre from '@/components/UI/BaseGenre.vue'
import BaseInformation from '@/components/UI/BaseInformation.vue'
import BaseStar from '@/components/icons/BaseStar.vue'
import SuggestedFilms from '@/components/templates/BaseSuggestedFilms.vue'
import { computed } from 'vue'
import BasePlaceHolderFilmDetails from '@/components/UI/BasePlaceHolderFilmDetails.vue'

const backdropImage = computed(() => {
  if (store.poster !== 'N/A') return store.poster
  return '/src/assets/images/backdrop.webp'
})

const store = filmDetails()
</script>

<template>
  <section>
    <div
      class="backdrop"
      :style="{ backgroundImage: `url(${backdropImage})` }"
      v-if="store.isFetch"
    ></div>
    <div class="container" v-if="store.isFetch">
      <div class="row mt-5 align-items-center">
        <h1 class="text-center text-md-start">{{ store.title }}</h1>
        <div class="col-12 col-lg-4 d-flex flex-column align-items-center align-items-md-start">
          <p>{{ store.year }} {{ store.ratedGetter }} {{ store.runtimeGetter }}</p>
          <p class="d-flex gap-2" v-if="store.rateGetter">
            <BaseStar />
            <span class="fw-bold">{{ store.rate }}</span>
          </p>
          <img :src="store.poster" alt="" class="rounded-2" />
          <ul
            class="d-flex justify-content-center justify-content-md-start gap-2 p-0 mt-3 flex-wrap"
          >
            <BaseGenre v-for="genre in store.genreGetter" :key="genre" :name="genre" />
          </ul>
        </div>
        <article>
          <p>
            {{ store.describtionGetter }}
          </p>
        </article>
        <div class="col-12 col-lg information">
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
          <hr />
        </div>
      </div>
    </div>
    <BasePlaceHolderFilmDetails v-else />
    <SuggestedFilms v-if="store.suggestedFilms.length > 0 && store.isFetch" />
  </section>
</template>

<style scoped>
.backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(80px);
  z-index: -9;
}

h1 {
  font-weight: bold;
}
* {
  color: #fff;
}
article {
  order: 1;
}
article p {
  width: 60%;
}
img {
  width: 300px;
  height: 450px;
}

@media screen and (max-width: 768px) {
  .information {
    margin-left: 0;
  }
  article {
    order: 0;
  }
  article p {
    width: 100%;
  }
}
</style>
