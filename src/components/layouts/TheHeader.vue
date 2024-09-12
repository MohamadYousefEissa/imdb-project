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
          <div class="col d-flex justify-content-between align-items-center">
            <RouterLink to="/">
              <h1>IMdb</h1>
            </RouterLink>
            <div class="d-flex justify-content-between align-items-center w-50">
              <div class="d-flex flex-column w-75" id="dd-cont">
                <BaseInput :placeholder="'What do you think ...'" @input-event="search" />
                <div class="position-relative">
                  <BaseDropDown />
                </div>
              </div>
              <BaseTheme />
            </div>
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
