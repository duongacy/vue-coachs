<template>
  <label class="inline-flex select-none cursor-pointer gap-x-2">
    <Switch
      v-model="enabled"
      :class="
        cn(
          'relative bg-neutral-300 inline-flex h-[20px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:ring-2 ring-offset-[1px] focus-visible:ring-success-700 focus-visible:outline-none focus:ring-2 focus:ring-success-700 focus:outline-none',
          { 'bg-success-700': enabled },
          props.class
        )
      "
      as="button"
    >
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-[14px]' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </Switch>
    <BaseTypography size="body" weight="medium" v-if="!!props.label">{{ label }}</BaseTypography>
  </label>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'

import cn from '@/utils/cn'
import BaseTypography from './BaseTypography.vue'
const enabled = defineModel<boolean>()
const props = defineProps<{ class?: string; label?: string }>()
</script>
