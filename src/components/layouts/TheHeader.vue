<script setup>
import BaseInput from '../UI/BaseInput.vue'
import BaseDropDown from '../UI/BaseDropDown.vue'
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
      <div class="container p-0">
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center">
            <RouterLink to="/">
              <h1>logo</h1>
            </RouterLink>
            <div class="d-flex flex-column" id="dd-cont">
              <BaseInput :placeholder="'What do you think ...'" @input-event="search" />
              <div class="position-relative">
                <BaseDropDown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
nav {
  background: teal;
  padding: 1rem 0;
  box-shadow: 0 0 10px grey;
}
#dd-cont {
  width: 40%;
}
</style>
