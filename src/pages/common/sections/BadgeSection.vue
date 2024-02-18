<template>
  <div class="flex flex-col">
    <base-typography size="heading4" weight="bold" class="p-4 bg-red-100">Badge</base-typography>
    <div class="flex gap-4 bg-slate-100 p-4">
      <base-badge
        v-for="area in ['Frontend', 'Backend', 'Fullstack']"
        :key="area"
        :dotClass="
          cn({
            'fill-red-500': area === 'Frontend',
            'fill-yellow-500': area === 'Backend',
            'fill-green-500': area === 'Fullstack'
          })
        "
        :text="area"
      ></base-badge>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue'
import cn from '@/utils/cn'
</script>
