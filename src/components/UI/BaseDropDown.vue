<script setup>
import { onMounted } from 'vue'
import { searchStore } from '@/store/searchStore/searchStore'
import BaseCard from './BaseCard.vue'
import BaseLoader from '../icons/BaseLoader.vue'
const store = searchStore()
onMounted(() => {
  const dropdownCont = document.getElementById('dd-cont')
  const searchInput = document.getElementById('search-input')
  document.body.addEventListener('click', (ev) => {
    if (!dropdownCont.contains(ev.target)) {
      store.showMenu = false
    } else {
      if (searchInput.value.length > 0) store.showMenu = true
    }
  })
})
</script>
<template>
  <div class="dropdown" ref="dropdown">
    <ul class="dropdown-menu dropdown-menu-dark" :class="{ show: store.showMenu }">
      <li class="d-flex justify-content-center mt-5 pb-5" v-if="store.showLoader">
        <BaseLoader />
      </li>
      <li v-else-if="store.shows.length === 0" class="p-2">No Results</li>
      <li v-for="show in store.shows" :key="show.imdbID">
        <router-link :to="show.imdbID" class="dropdown-item">
          <BaseCard
            :showTitle="show.Title"
            :showYear="show.Year"
            :showPoster="show.Poster"
            :showType="show.Type"
          />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: absolute;
  width: 100%;
}
.dropdown-menu {
  width: 100%;
  max-height: 90vh;
  overflow-y: scroll;
}
.dropdown-menu::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}
.dropdown-menu::-webkit-scrollbar {
  width: 0.5vw;
  background: #343a40;
}
</style>
