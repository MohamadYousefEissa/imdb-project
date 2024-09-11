<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const searchInput = ref()
defineProps({
  placeholder: String
})
const emits = defineEmits(['input-event'])
const search = (ev) => {
  emits('input-event', ev)
}
</script>
<template>
  <input
    type="text"
    name="search-input"
    id="search-input"
    :placeholder="placeholder"
    autocomplete="off"
    v-model="searchInput"
    @input="search(searchInput)"
  />
</template>

<style scoped>
input {
  outline: 0;
  border: 0;
  border-radius: 6px;
  padding: 10px 10px;
  font-size: 14px;
  background-color: var(--main-color);
}
</style>
