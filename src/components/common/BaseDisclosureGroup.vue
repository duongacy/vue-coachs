<template>
  <div :class="cn('flex flex-col gap-y-1 bg-white rounded-lg', props.class)">
    <Disclosure
      v-slot="{ open }"
      :default-open="item.defaultOpen"
      v-for="item in props.items"
      :key="item.title.toString()"
    >
      <DisclosureButton
        class="flex w-full justify-between rounded-lg bg-primary-100 px-4 py-2 text-left text-sm font-medium text-primary-900 hover:bg-primary-200 focus:outline-none focus-visible:ring focus-visible:ring-primary-500/75"
      >
        <span>{{ item.title }}</span>
        <ChevronUpIcon :class="cn('h-5 w-5 text-primary-500', { 'rotate-180 transform': open })" />
      </DisclosureButton>
      <DisclosurePanel class="px-4 py-2 text-sm text-neutral-500 max-w-full">
        {{ item.content }}
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import cn from '@/utils/cn'
export type TDisclosureGroupItem = {
  title: string
  content: string
  defaultOpen?: boolean
}
const props = defineProps<{ class?: string; items: TDisclosureGroupItem[] }>()
</script>
