<script setup>
import { defineProps } from 'vue'
const props = defineProps(['showTitle', 'showYear', 'showPoster', 'showType'])
</script>
<template>
  <div class="d-flex gap-3">
    <div>
      <img :src="props.showPoster" alt="" />
    </div>
    <div>
      <h6>{{ props.showTitle }}</h6>
      <p>{{ props.showYear }}</p>
      <p>{{ props.showType }}</p>
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
}
p {
  margin-bottom: 0;
  line-height: 1.2rem;
  color: grey;
}
</style>
