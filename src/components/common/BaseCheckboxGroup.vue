<template>
  <div :class="cn('flex flex-col gap-2', props.class)">
    <label
      class="flex gap-x-2 cursor-pointer select-none"
      v-for="option in props.options"
      :key="option.value"
    >
      <div class="h-6 grid items-center flex-shrink-0">
        <input
          v-model="propsModel"
          :value="option.value"
          type="checkbox"
          class="h-4 w-4 rounded border-neutral-300 text-success-700 focus:ring-success-700 shrink-0"
        />
      </div>
      <BaseTypography size="body" weight="medium" class="leading-[24px] min-h-4">{{
        option.name
      }}</BaseTypography>
    </label>
  </div>
</template>

<script setup lang="ts">
import cn from '@/utils/cn'
import BaseTypography from './BaseTypography.vue'

export type TBaseCheckboxGroupOption = { name: string; value: string }

const props = defineProps<{ options: TBaseCheckboxGroupOption[]; class?: string }>()

const propsModel = defineModel<string[]>()
</script>

<style scoped></style>
