<script setup lang="ts">
import {
  type AlertDialogEmits,
  type AlertDialogProps,
  AlertDialogRoot,
  useForwardPropsEmits
} from 'radix-vue'
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '.'

const props = defineProps<
  AlertDialogProps & {
    title?: string
    description?: string
    cancelText?: string
    okText?: string
  }
>()
const emits = defineEmits<
  AlertDialogEmits & {
    cancel: []
    ok: []
  }
>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <AlertDialogRoot v-bind="forwarded">
    <AlertDialogContent>
      <AlertDialogHeader v-if="!!title || !!description">
        <AlertDialogTitle v-if="!!title">{{ title }}</AlertDialogTitle>
        <AlertDialogDescription v-if="!!description">{{ description }}</AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter v-if="!!cancelText || !!okText">
        <AlertDialogCancel v-if="!!cancelText" @click.prevent="emits('cancel')">{{
          cancelText
        }}</AlertDialogCancel>
        <AlertDialogAction v-if="!!okText" @click.prevent="emits('ok')">{{
          okText
        }}</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
    <slot />
  </AlertDialogRoot>
</template>
