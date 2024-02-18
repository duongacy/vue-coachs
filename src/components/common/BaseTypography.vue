<template>
  <p
    :class="
      cn(
        {
          'text-[80px] leading-[80px] tracking-[0]': size === 'heading1',
          'text-[60px] leading-[60px] tracking-[0]': size === 'heading2',
          'text-[40px] leading-[44px] tracking-[0]': size === 'heading3',
          'text-[30px] leading-[34px] tracking-[0]': size === 'heading4',
          'text-[24px] leading-[28px] tracking-[0]': size === 'heading5',
          'text-[20px] leading-[24px] tracking-[0]': size === 'heading6',
          'text-[16px] leading-[20px] tracking-[0.2px]': size === 'body',
          'text-[14px] leading-[22px] tracking-[0]': size === 'caption',
          'text-[12px] leading-[18px] tracking-[0.2px]': size === 'small',
          'text-[10px] leading-[16px] tracking-[0.3px]': size === 'tiny',

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
import cn from '@/utils/cn'
import { reactive } from 'vue'

export type TTypographyWeight = 'heavy' | 'bold' | 'medium' | 'regular' | 'thin'
export type TTypographySize =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'body'
  | 'caption'
  | 'small'
  | 'tiny'

const props = defineProps<{ weight?: TTypographyWeight; size?: TTypographySize; class?: string }>()

const { weight = 'regular', size = 'body' } = reactive(props)
</script>

<style scoped></style>
