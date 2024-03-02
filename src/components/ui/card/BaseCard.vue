<script setup lang="ts">
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

import { BaseButton } from '@/components/ui/button'

const props = withDefaults(
  defineProps<{
    class?: HTMLAttributes['class']
    title?: string
    description?: string
    cancelText?: string
    actionText?: string
    actionType?: 'button' | 'submit'
  }>(),
  {
    actionType: 'button'
  }
)

const emits = defineEmits<{
  action: []
  cancel: []
}>()

const clickActionHandler = computed(() => {
  if (props.actionType === 'submit') return undefined
  return () => {
    emits('action')
  }
})
</script>

<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', props.class)">
    <slot name="header">
      <CardHeader v-if="!!title || !!description">
        <CardTitle v-if="!!title">{{ title }}</CardTitle>
        <CardDescription v-if="!!description">{{ description }}</CardDescription>
      </CardHeader>
    </slot>

    <CardContent>
      <slot></slot>
    </CardContent>
    <slot name="footer">
      <CardFooter class="flex justify-between px-6 pb-6" v-if="!!cancelText || !!actionText">
        <BaseButton type="button" variant="outline" v-if="!!cancelText" @click="emits('cancel')">
          {{ cancelText }}
        </BaseButton>
        <BaseButton v-if="!!actionText" @click="clickActionHandler" :type="actionType">{{
          actionText
        }}</BaseButton>
      </CardFooter>
    </slot>
  </div>
</template>
