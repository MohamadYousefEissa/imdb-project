<script setup lang="ts">
import { ref } from 'vue'
import BaseSearch from '../icons/BaseSearch.vue'
const searchInput = ref()
defineProps<{ placeholder: string }>()
const emits = defineEmits(['input-event'])
const search = (ev: Event) => {
  emits('input-event', ev)
}
</script>
<template>
  <div class="input-group">
    <span class="input-group-text bg-white"><BaseSearch /></span>
    <input
      type="text"
      name="search-input"
      id="search-input"
      :placeholder="placeholder"
      autocomplete="off"
      v-model="searchInput"
      @input="search(searchInput)"
    />
  </div>
</template>

<style scoped>
input {
  outline: 0;
  border: 0;
  width: 400px;
  border-radius: 6px;
  padding: 10px 10px;
  font-size: 14px;
  background-color: #fff;
}
span {
  border: 1px solid transparent;
  border-right: 0;
}
html[data-theme='light'] input {
  border: 1px solid black;
  border-left: 0;
}
html[data-theme='light'] span {
  border: 1px solid black;
  border-right: 0;
}
@media screen and (max-width: 480px) {
  .input-group {
    width: 90vw;
    flex-wrap: nowrap;
  }

  input {
    width: 100%;
  }
}
</style>
