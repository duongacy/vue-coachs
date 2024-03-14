<script setup lang="ts">
import { AlertDialogTrigger, BaseAlertDialog } from '@/components/ui/alert-dialog'
import { BaseButton, buttonVariants } from '@/components/ui/button'
import { BaseCard } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ref } from 'vue'

const open = ref(false)
const onOk = () => {
  open.value = false
}
const onCancel = () => {
  open.value = false
}

const open2 = ref(false)
</script>
<template>
  <div class="flex items-start gap-4">
    <BaseCard
      title="Control by default (Alert Dialog Trigger)"
      description="Don't need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        okText="Continue"
        cancelText="Cancel"
      >
        <AlertDialogTrigger :class="cn(buttonVariants({ variant: 'outline' }))">
          Open
        </AlertDialogTrigger>
      </BaseAlertDialog>
      Can't get status
    </BaseCard>
    <BaseCard
      title="Control by v-bind (one-way binding)"
      description="Need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        okText="Continue"
        cancelText="Cancel"
        :open="open"
        @cancel="onCancel"
        @ok="onOk"
      >
      </BaseAlertDialog>
      <BaseButton @click="open = true" variant="outline">Open by v-bind</BaseButton>
      Status: {{ open }}
    </BaseCard>

    <BaseCard
      title="Control by v-model (two-way binding)"
      description="Don't need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        okText="Continue"
        cancelText="Cancel"
        v-model:open="open2"
      >
      </BaseAlertDialog>
      <BaseButton @click="open = true" variant="outline">Open by v-model </BaseButton>
      Status: {{ open2 }}
    </BaseCard>
  </div>
</template>
