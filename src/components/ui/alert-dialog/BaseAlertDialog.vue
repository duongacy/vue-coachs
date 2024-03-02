<script setup lang="ts">
import {
  type AlertDialogEmits,
  type AlertDialogProps,
  AlertDialogRoot,
  useForwardPropsEmits
} from 'radix-vue'
import AlertDialogTrigger from './AlertDialogTrigger.vue'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '.'
import { BaseButton } from '../button'

const props = defineProps<
  AlertDialogProps & {
    triggerText?: string
    title?: string
    description?: string
    cancelText?: string
    actionText?: string
  }
>()
const emits = defineEmits<
  AlertDialogEmits & {
    cancel: []
    action: []
  }
>()

const {
  triggerText: _1,
  title: _2,
  description: _3,
  cancelText: _4,
  actionText: _5,
  ...restProps
} = props

const forwarded = useForwardPropsEmits(restProps)
</script>

<template>
  <AlertDialogRoot v-bind="forwarded" @update:open="emits('update:open', $event)">
    <AlertDialogTrigger>
      <BaseButton variant="outline" class="block w-fit mx-auto" v-if="!!triggerText">
        {{ triggerText }}
      </BaseButton>
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle v-if="!!title">{{ title }}</AlertDialogTitle>
        <AlertDialogDescription v-if="!!description">
          {{ description }}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="emits('cancel')" v-if="!!cancelText">{{
          cancelText
        }}</AlertDialogCancel>
        <AlertDialogAction @click="emits('action')" v-if="!!actionText">{{
          actionText
        }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialogRoot>
</template>
