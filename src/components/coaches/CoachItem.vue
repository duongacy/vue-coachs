<template>
  <div class="border p-4 rounded-lg space-y-2">
    <p class="text-2xl font-bold">{{ item.firstName }} - {{ item.lastName }}</p>
    <p class="font-bold">${{ item.hourlyRate }}/hour</p>
    <div class="space-x-2">
      <base-badge v-for="area in item.areas" :key="area" :type="area"></base-badge>
    </div>
    <div class="flex justify-end gap-4">
      <base-button :to="coachDetailLink" class="text-blue-500" mode="contained"
        >Details</base-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import BaseBadge from '../common/BaseBadge.vue'
import BaseButton from '../common/BaseButton.vue'
import type { TCoach } from '@/types/coach'

const coachDetailLink = computed(() => {
  return '/coachs/' + props.item.id
})

const props = defineProps<{ item: TCoach }>()
</script>
