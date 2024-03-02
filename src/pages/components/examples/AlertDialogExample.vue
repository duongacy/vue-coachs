<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import BaseAlertDialog from '@/components/ui/alert-dialog/BaseAlertDialog.vue'
import { BaseButton } from '@/components/ui/button'
import { BaseTypography } from '@/components/ui/typography'
import { ref, watchEffect } from 'vue'
const model = ref()

const cancelHandler = () => {
  console.log('cancel')
}
const actionHandler = () => {
  console.log('continue')
}
const onChangeOpen = (value: boolean) => {
  console.log('open status:', value)
}

watchEffect(() => {
  console.log('model', model.value)
})
</script>

<template>
  <div class="flex gap-4">
    <div>
      <BaseTypography variant="list" weight="bold">Basic using</BaseTypography>
      <BaseTypography variant="small" class="mb-2">Using with basic style</BaseTypography>
      <BaseAlertDialog
        trigger-text="Show dialog"
        action-text="Continue"
        cancel-text="Cancel"
        title="Are you sure to continue?"
        description="All of your information will be published!"
        @update:open="onChangeOpen"
        @cancel="cancelHandler"
        @action="actionHandler"
      ></BaseAlertDialog>
    </div>
    <div>
      <BaseTypography variant="list" weight="bold">Custom slot</BaseTypography>
      <BaseTypography variant="small" class="mb-2">Using with custom style</BaseTypography>
      <AlertDialog>
        <AlertDialogTrigger>
          <BaseButton variant="outline" class="block w-fit mx-auto"> Show dialog </BaseButton>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure to continue?</AlertDialogTitle>
            <AlertDialogDescription>
              All of your information will be published!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction> Continue </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  </div>
</template>
