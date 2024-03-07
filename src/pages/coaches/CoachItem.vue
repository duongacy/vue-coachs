<template>
  <BaseCard class="grid gap-4">
    <div>
      <BaseTypography variant="body" class="font-bold">{{ fullName }}</BaseTypography>
      <BaseTypography>{{ item.description }} </BaseTypography>
      <div class="flex gap-2 mt-2">
        <BaseBadge variant="destructive" v-for="area in item.areas" :key="area + '-area'">{{
          area
        }}</BaseBadge>
      </div>
    </div>
    <div class="flex gap-4 justify-end">
      <BaseButton variant="outline">
        <router-link :to="detailsLink">Details</router-link>
      </BaseButton>
      <router-link :to="requestLink">
        <BaseButton>Request</BaseButton>
      </router-link>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import type { TCoach } from '@/types/coach'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import { BaseCard } from '@/components/ui/card'
import { BaseTypography } from '@/components/ui/typography'
import { BaseBadge } from '@/components/ui/badge'
import { BaseButton } from '@/components/ui/button'

const emits = defineEmits(['delete'])

const detailsLink = computed(() => '/coaches/' + props.item.id)
const requestLink = computed(() => detailsLink.value + '/request')

const fullName = computed(() => props.item.firstName + ' ' + props.item.lastName)

const props = defineProps<{ item: TCoach }>()
</script>
