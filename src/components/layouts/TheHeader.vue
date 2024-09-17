<script setup>
import BaseInput from '../UI/BaseInput.vue'
import BaseDropDown from '../UI/BaseDropDown.vue'
import BaseTheme from '../icons/BaseTheme.vue'
import { searchStore } from '@/store/searchStore/searchStore'
const store = searchStore()
const search = (value) => {
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
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center mb-2">
            <RouterLink to="/">
              <h1 class="m-0">IMdb</h1>
            </RouterLink>
          </div>
          <div
            class="col-12 col-md-10 col-lg-8 d-flex justify-content-start justify-content-md-end align-items-center gap-5"
            id="dd-cont"
          >
            <div class="d-flex flex-column position-relative">
              <BaseInput :placeholder="'What do you think ...'" @input-event="search" />
              <div>
                <BaseDropDown />
              </div>
            </div>
            <BaseTheme class="d-none d-md-block" />
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
