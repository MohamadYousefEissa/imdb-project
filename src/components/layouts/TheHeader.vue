<script setup lang="ts">
import BaseLogo from '../icons/BaseLogo.vue'
import BaseInput from '../UI/BaseInput.vue'
import BaseDropDown from '../UI/BaseDropDown.vue'
import BaseTheme from '../icons/BaseTheme.vue'
import { searchStore } from '@/store/searchStore/searchStore'
const store = searchStore()
const search = (value: string) => {
  if (value.length > 0) store.search({ title: value })
  else {
    store.showMenu = false
    store.shows = []
  }
}
</script>
<template>
  <header>
    <nav>
      <div class="container">
        <div class="row gap-3">
          <div class="col d-flex justify-content-between align-items-center">
            <RouterLink to="/">
              <BaseLogo />
            </RouterLink>
          </div>
          <div
            class="col-12 col-lg-8 d-flex flex-column flex-md-row justify-content-between justify-content-lg-end align-items-start align-items-md-center gap-4 gap-md-5"
          >
            <div class="d-flex flex-column position-relative" id="dd-cont">
              <BaseInput :placeholder="'What do you think ...'" @input-event="search" />
              <div>
                <BaseDropDown />
              </div>
            </div>
            <BaseTheme class="d" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background: var(--nav-bg);
  padding: 1rem 0;
}
html[data-theme='light'] nav {
  box-shadow: 0 0 10px grey;
}
html[data-theme='light'] nav a {
  color: black;
}
</style>
