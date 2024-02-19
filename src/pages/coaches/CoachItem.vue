<template>
  <div class="gap-4 flex justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-4 items-baseline">
        <span class="text-primary-600 font-bold">{{ item.firstName + ' ' + item.lastName }}</span>
        <span class="text-sm font-bold">(${{ item.hourlyRate }}/hour)</span>
      </div>
      <div class="flex gap-4">
        <base-badge
          v-for="area in item.areas"
          :key="area"
          :dotClass="
            cn({
              'fill-error-500': area === 'frontend',
              'fill-yellow-500': area === 'backend',
              'fill-green-500': area === 'fullstack'
            })
          "
          class="capitalize"
          :text="area"
        ></base-badge>
      </div>
    </div>
    <div class="flex items-end gap-2">
      <base-button variant="secondary" size="medium" :to="detailLink">Details</base-button>
      <base-button variant="primary" size="medium" :to="requestLink">Request</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCoach } from '@/types/coach'
import { computed } from 'vue'
import cn from '@/utils/cn'

const emits = defineEmits(['delete'])

const detailLink = computed(() => {
  return '/coaches/' + props.item.id
})
const requestLink = computed(() => {
  return detailLink.value + '/request'
})

const props = defineProps<{ item: TCoach }>()
</script>
