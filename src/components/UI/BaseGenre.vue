<script setup lang="ts">
defineProps(['name'])
</script>
<template>
  <li>{{ name }}</li>
</template>

<style scoped>
li {
  border: 1px solid #fff;
  border-radius: 18px;
  padding: 4px 20px;
}
</style>
