<template>
  <BaseContainer fluid class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Layouts</p>
    <div class="mt-12 grid gap-4">
      <TheNavigation />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import TheNavigation from '@/layouts/navigation/TheNavigation.vue';
</script>
