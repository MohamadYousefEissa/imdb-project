<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  names: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
<template>
  <hr />
  <span class="fw-bold me-3">{{ props.title }}</span> <span>{{ props.names }}</span>
</template>
