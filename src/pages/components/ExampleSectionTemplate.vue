<template>
  <div
    :id="id"
    class="grid scroll-mt-16 gap-4 border p-4"
  >
    <p class="text-heading5 font-bold">{{ name }}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string; id?: string }>();
</script>

<style scoped></style>
