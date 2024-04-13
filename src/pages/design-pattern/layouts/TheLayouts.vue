<template>
  <TheContainer fluid class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Layouts</p>
    <div class="mt-12 grid gap-4">
      <TheNavigation />
    </div>
  </TheContainer>
</template>

<script setup lang="ts">
import TheNavigation from '@/layouts/navigation/TheNavigation.vue';
import TheContainer from '../container/TheContainer.vue';
</script>
