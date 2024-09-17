<template>
  <TheHeader />
  <RouterView />
</template>
<script setup>
import TheHeader from './components/layouts/TheHeader.vue'
import { homeShows } from '@/store/homeShows/homeShows'

homeShows().fetchBundles()
</script>
