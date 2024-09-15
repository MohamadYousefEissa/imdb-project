<script setup lang="ts">
import { computed } from 'vue'
import { themeStore } from '@/store/themeHandler'
const props = defineProps<{ title: string; poster: string; year: string; type: string }>()
const slicedTitle = computed(() => {
  let str = ''
  if (props.title.length > 50) str = props.title.slice(0, 50) + '...'
  else str = props.title
  return str
})
</script>

<template>
  <div class="card" :class="{ 'text-bg-dark': themeStore().theme === 'dark' }" :title="title">
    <img :src="poster" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">
        {{ slicedTitle }}
      </h5>
      <div>
        <p>{{ year }}</p>
        <p>{{ type }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 530px;
}
.card-body {
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
