<script setup lang="ts">
import { ref } from 'vue'
import { BaseCalendar } from '@/components/ui/calendar'

const date = ref(new Date())
</script>

<template>
  <div>
    <BaseCalendar v-model="date" class="rounded-md border" />
  </div>
</template>
