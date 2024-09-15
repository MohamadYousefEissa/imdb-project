<script setup lang="ts">
defineProps<{ title: string; names: string }>()
</script>
<template>
  <hr />
  <span class="fw-bold me-3">{{ title }}</span> <span>{{ names }}</span>
</template>
