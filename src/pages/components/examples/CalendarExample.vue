<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { BaseCalendar } from '@/components/ui/calendar'

const date = ref(new Date())
watchEffect(() => {
  console.log('date:', date.value)
})
</script>

<template>
  <div class="grid gap-4">
    <div class="w-[350px]">
      <BaseCalendar v-model="date" class="rounded-md border" />
    </div>
    <div class="w-[710px]">
      <BaseCalendar v-model="date" class="rounded-md border flex gap-10" :columns="2" />
    </div>
    <div class="w-[710px]">
      <BaseCalendar v-model="date" class="rounded-md border flex gap-10" type="range" />
    </div>
  </div>
</template>
