<template>
  <div class="flex flex-col">
    <base-typography size="heading4" weight="bold" class="p-4 bg-red-100"
      >Disclosure Group</base-typography
    >
    <div class="py-4">
      <base-disclosure-group
        :items="disclosureGroupItems"
        class="w-[300px]"
      ></base-disclosure-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseDisclosureGroup, {
  type TDisclosureGroupItem
} from '@/components/common/BaseDisclosureGroup.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'

const disclosureGroupItems: TDisclosureGroupItem[] = [
  {
    title: 'What is your refund policy?',
    content:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
    defaultOpen: true
  },
  {
    title: 'Do you offer technical support?',
    content: 'No.'
  }
]
</script>
