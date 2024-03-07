<template>
  <p
    :class="
      cn(
        {
          'text-[48px] leading-[48px] ': variant === 'h1',
          'text-[30px] leading-[36px] ': variant === 'h2',
          'text-[24px] leading-[32px] ': variant === 'h3',
          'text-[20px] leading-[28px] ': variant === 'h4',
          'text-[18px] leading-[28px] ': variant === 'large',
          '_ text-[20px] leading-[28px]': variant === 'lead',
          'text-[16px] leading-[28px] ': variant === 'p',
          'text-[16px] leading-[24px] ': variant === 'p-ui',
          '_ text-[16px] leading-[24px]': variant === 'list',
          'text-[14px] leading-[24px] ': variant === 'body',
          'text-[14px] leading-[20px] ': variant === 'subtle',
          'text-[14px] leading-[14px] ': variant === 'small',
          'text-[12px] leading-[20px] ': variant === 'detail',
          '__ text-[16px] leading-[24px]': variant === 'blockquote',
          '_ text-[14px] leading-[20px]': variant === 'inline-code',
          '___ text-[16px] leading-[24px]': variant === 'table-head',
          '____ text-[16px] leading-[24px]': variant === 'table-item',

          'font-[900]': weight === 'heavy',
          'font-[700]': weight === 'bold',
          'font-[500]': weight === 'medium',
          'font-[300]': weight === 'regular',
          'font-[100]': weight === 'thin'
        },
        props.class
      )
    "
  >
    <slot></slot>
  </p>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { reactive } from 'vue'

export type TTypographyWeight = 'heavy' | 'bold' | 'medium' | 'regular' | 'thin'
export type TTypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'large'
  | 'lead'
  | 'p'
  | 'p-ui'
  | 'list'
  | 'body'
  | 'subtle'
  | 'small'
  | 'detail'
  | 'blockquote'
  | 'inline-code'
  | 'table-head'
  | 'table-item'

const props = defineProps<{
  weight?: TTypographyWeight
  variant?: TTypographyVariant
  class?: string
}>()

const { weight = 'regular', variant = 'body' } = reactive(props)
</script>
