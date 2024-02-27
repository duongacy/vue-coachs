<script setup lang="ts">
import { ref } from 'vue'
import { BaseCalendar } from '@/components/ui/calendar'

const date = ref(new Date())
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseCalendar v-model="date" class="rounded-md border" />
  </div>
</template>
