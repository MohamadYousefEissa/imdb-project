<script setup lang="ts">
import { defineProps } from 'vue'
import { themeStore } from '@/store/themeHandler'
const props = defineProps(['poster', 'title', 'year', 'type'])
</script>

<template>
  <div class="card" :class="{ 'text-bg-dark': themeStore().theme === 'dark' }">
    <img :src="props.poster" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">
        {{ props.title }}
      </h5>
      <p>{{ props.year }}</p>
      <p>{{ props.type }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 530px;
}
img {
  width: 300px;
  height: 400px;
}
p {
  line-height: 1.2rem;
  margin-bottom: 0;
  color: grey;
}
h5 {
  margin-bottom: 0;
}
span {
  font-size: 14px;
  color: grey;
}
</style>
