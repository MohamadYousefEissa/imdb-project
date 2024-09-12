<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { searchStore } from '@/store/searchStore/searchStore'
import { themeStore } from '@/store/themeHandler'

import BaseDropDownItem from './BaseDropDownItem.vue'
import BaseLoader from '../icons/BaseLoader.vue'
const storeSearch = searchStore()
const storeTheme = themeStore()
const searchInputValue = ref('')
onMounted(() => {
  const dropdownCont = document.getElementById('dd-cont')! as HTMLElement
  const searchInput = document.getElementById('search-input') as HTMLInputElement
  searchInput.addEventListener('input', () => {
    searchInputValue.value = searchInput.value
  })
  document.body.addEventListener('click', (ev: Event) => {
    if (!dropdownCont.contains(ev.target as HTMLElement)) {
      storeSearch.showMenu = false
    } else {
      if (searchInput.value.length > 0 && !storeSearch.showMenu) storeSearch.showMenu = true
    }
  })
})
</script>
<template>
  <div class="dropdown">
    <ul
      class="dropdown-menu"
      :class="{ show: storeSearch.showMenu, 'dropdown-menu-dark': storeTheme.theme === 'dark' }"
    >
      <li class="d-flex justify-content-center mt-5 pb-5" v-if="storeSearch.showLoader">
        <BaseLoader />
      </li>
      <li v-else-if="storeSearch.shows.length === 0" class="p-2">No Results</li>
      <li v-for="show in storeSearch.shows" :key="show.imdbID">
        <router-link
          :to="{ path: '/title/' + show.imdbID, query: { search: searchInputValue } }"
          class="dropdown-item"
        >
          <BaseDropDownItem
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
  overflow-y: auto;
  background-color: var(--main-bg);
}
.dropdown-item {
  transition: background-color 0.2s;
}
.dropdown-menu::-webkit-scrollbar-thumb {
  background: var(--dw-scrollbar-color);
  border-radius: 10px;
}
.dropdown-menu::-webkit-scrollbar {
  width: 0.5vw;
  background: var(--main-bg);
}
</style>
