<script setup>
import { defineProps, defineEmits } from 'vue'
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
    @input="search"
  />
</template>

<style scoped>
input {
  width: 30%;
  outline: 0;
  border: 1px solid blue;
  border-radius: 10px;
  height: 45px;
  padding: 0 10px;
  font-size: 14px;
}
</style>
