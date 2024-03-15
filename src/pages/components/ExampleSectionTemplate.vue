<template>
  <div class="grid gap-4 border p-4">
    <p class="text-heading5 font-bold">{{ name }}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>

<style scoped></style>
