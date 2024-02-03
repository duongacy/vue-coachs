<!-- <template>
  <div class="border p-4 rounded-lg space-y-2">
    <p class="text-2xl font-bold">{{ item.firstName }} - {{ item.lastName }}</p>
    <p class="font-bold">${{ item.hourlyRate }}/hour</p>
    <div class="space-x-2">
      <base-badge v-for="area in item.areas" :key="area" :type="area"></base-badge>
    </div>
    <div class="flex justify-end gap-4">
      <base-button :to="detailLink" mode="contained">Details</base-button>
      <base-button @click="emits('delete', item.id)">Delete</base-button>
    </div>
  </div>
  
</template> -->
<template>
  <div class="gap-4 flex justify-between">
    <div class="flex flex-col gap-2">
      <div class="flex gap-4 items-baseline">
        <span class="text-indigo-600 font-bold">{{ item.firstName + ' ' + item.lastName }}</span>
        <span class="text-sm font-bold">(${{ item.hourlyRate }}/hour)</span>
      </div>
      <div class="flex gap-4">
        <base-badge
          v-for="area in item.areas"
          :key="area"
          :dotClass="
            cn({
              'fill-red-500': area === 'frontend',
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
      <base-button variant="primary" size="medium" :to="requestLink">Contact</base-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TCoach } from '@/types/coach'
import { computed } from 'vue'
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import cn from '@/utils/cn'

const emits = defineEmits(['delete'])

const detailLink = computed(() => {
  return '/coaches/' + props.item.id
})
const requestLink = computed(() => {
  return detailLink.value + '/contact'
})

const props = defineProps<{ item: TCoach }>()
</script>
