<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { filmDetails } from '@/store/filmDetails/filmDetails'
import { useRoute } from 'vue-router'
import BaseCard from '../UI/BaseCard.vue'
const store = filmDetails()
const searchInputValue = ref('')

onMounted(() => {
  searchInputValue.value = useRoute().query.search as string
})
</script>

<template>
  <section>
    <div class="container mt-5 pt-5">
      <h1 class="mb-5 fw-bold">You May Like</h1>
      <div
        class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4 row-gap-3 justify-content-center"
      >
        <div
          v-for="show in store.suggestedFilms"
          :key="show.imdbID"
          class="d-flex justify-content-center"
        >
          <router-link :to="{ path: '/title/' + show.imdbID, query: { search: searchInputValue } }">
            <BaseCard
              :poster="show.Poster"
              :title="show.Title"
              :type="show.Type"
              :year="show.Year"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
h1 {
  color: var(--main-color);
}
</style>
