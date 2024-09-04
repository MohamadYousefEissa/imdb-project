<script setup>
import BaseInput from '../UI/BaseInput.vue'
import store from '../../store/index'
const search = (ev) => {
  store.dispatch('search', { title: ev.target.value })
}
</script>
<template>
  <header>
    <nav>
      <div class="container p-0">
        <div class="row">
          <div class="col d-flex justify-content-between align-items-center">
            <h1>logo</h1>
            <BaseInput :placeholder="'What do you think ...'" @input-event="search" />
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
</style>
