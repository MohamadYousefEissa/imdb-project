<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>
<script setup lang="ts">
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
import { homeShows } from '@/store/homeShows/homeShows'

homeShows().fetchBundles()
</script>
