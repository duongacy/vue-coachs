<template>
  <BaseContainer fluid class="pt-20 text-neutral-800">
    <p class="text-heading3 font-bold">Layouts</p>
    <div class="mt-12 grid gap-4">
      <Navigation />
    </div>
  </BaseContainer>
</template>

<script setup lang="ts">
import BaseContainer from '@/layouts/BaseContainer.vue';
import Navigation from '@/layouts/navigation/Navigation.vue';
</script>
