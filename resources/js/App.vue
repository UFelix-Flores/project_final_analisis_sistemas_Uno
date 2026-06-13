<template>
  <AppLayout>
    <router-view />
  </AppLayout>
  <TourGuide />
</template>

<script setup>
import AppLayout from '@/shared/components/AppLayout.vue';
import TourGuide from '@/components/TourGuide.vue';
import { useTour } from '@/composables/useTour';
import { onMounted } from 'vue';

const { tourCompletado, iniciarTour } = useTour();

onMounted(() => {
  if (!tourCompletado.value) {
    setTimeout(() => {
      iniciarTour();
    }, 1000);
  }
});
</script>

<style scoped>
</style>
