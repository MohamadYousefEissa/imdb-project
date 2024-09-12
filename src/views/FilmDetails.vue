<script setup>
import { filmDetails } from '@/store/filmDetails/filmDetails'
import BaseGenre from '@/components/UI/BaseGenre.vue'
import BaseInformation from '@/components/UI/BaseInformation.vue'
import BaseStar from '@/components/icons/BaseStar.vue'
import SuggestedFilms from '@/components/layouts/SuggestedFilms.vue'

const store = filmDetails()
</script>

<template>
  <section>
    <div class="backdrop" :style="{ backgroundImage: `url(${store.poster})` }"></div>
    <div class="container" v-if="store.isFetch">
      <div class="row mt-5 align-items-center">
        <div class="col-12 col-lg-4 d-flex flex-column align-items-center align-items-md-start">
          <h1>{{ store.title }}</h1>
          <p>{{ store.year }} {{ store.ratedGetter }} {{ store.runtimeGetter }}</p>
          <p class="d-flex gap-2" v-if="store.rateGetter">
            <BaseStar />
            <span class="fw-bold">{{ store.rate }}</span>
          </p>
          <img :src="store.poster" alt="" class="img-fluid rounded-1" />
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
    <SuggestedFilms v-if="store.suggestedFilms.length > 0" />
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
  text-wrap: nowrap;
}
article {
  order: 1;
}
article p {
  width: 60%;
}
img {
  width: 300px;
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
