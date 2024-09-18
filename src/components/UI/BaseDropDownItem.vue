<script setup lang="ts">
defineProps(['showTitle', 'showYear', 'showPoster', 'showType'])
</script>

<template>
  <div class="d-flex gap-3">
    <div>
      <img :src="showPoster" alt="" />
    </div>
    <div>
      <h6>{{ showTitle }}</h6>
      <p>{{ showYear }}</p>
      <p>{{ showType }}</p>
    </div>
  </div>
</template>

<style scoped>
img {
  height: 80px;
  width: 55px;
}
h6 {
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-wrap: wrap;
  font-weight: bold;
}
p {
  margin-bottom: 0;
  line-height: 1.2rem;
  color: grey;
}
</style>
