<script setup lang="ts">
import { AlertDialogTrigger, BaseAlertDialog } from '@/components/ui/alert-dialog';
import { BaseButton, buttonVariants } from '@/components/ui/button';
import { BaseCard } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ref } from 'vue';

type ConfirmStatus = 'DONT_HAVE_CONFIRMED' | 'DECLINE' | 'ACCEPT';

const dialog1ConfirmStatus = ref<ConfirmStatus>('DONT_HAVE_CONFIRMED');
const handleConfirmDialog1 = (value: boolean) => {
  dialog1ConfirmStatus.value = value ? 'ACCEPT' : 'DECLINE';
};

const dialog2OpenStatus = ref(false);
const dialog2ConfirmStatus = ref<ConfirmStatus>('DONT_HAVE_CONFIRMED');
const onUpdateOpenDialog2 = () => {
  dialog2OpenStatus.value = false;
};
const handleConfirmDialog2 = (value: boolean) => {
  dialog2ConfirmStatus.value = value ? 'ACCEPT' : 'DECLINE';
};

const dialog3OpenStatus = ref(false);
const dialog3ConfirmStatus = ref<ConfirmStatus>('DONT_HAVE_CONFIRMED');
const handleConfirmDialog3 = (value: boolean) => {
  dialog3ConfirmStatus.value = value ? 'ACCEPT' : 'DECLINE';
};
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
        ok-text="Continue"
        cancel-text="Cancel"
        @confirm="handleConfirmDialog1"
      >
        <AlertDialogTrigger :class="cn(buttonVariants({ variant: 'outline' }))">
          Open
        </AlertDialogTrigger>
      </BaseAlertDialog>
      <div>
        <div>Dialog status: Can't get dialog status</div>
        <div>Confirm status: {{ dialog1ConfirmStatus }}</div>
      </div>
    </BaseCard>

    <BaseCard
      title="Control by v-bind (one-way binding)"
      description="Need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        ok-text="Continue"
        cancel-text="Cancel"
        :open="dialog2OpenStatus"
        @update:open="onUpdateOpenDialog2"
        @confirm="handleConfirmDialog2"
      >
      </BaseAlertDialog>
      <BaseButton variant="outline" @click="dialog2OpenStatus = true">Open by v-bind</BaseButton>
      <div>
        <div>Dialog status: {{ dialog2OpenStatus }}</div>
        <div>Confirm status: {{ dialog2ConfirmStatus }}</div>
      </div>
    </BaseCard>

    <BaseCard
      title="Control by v-model (two-way binding)"
      description="Don't need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        v-model:open="dialog3OpenStatus"
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        ok-text="Continue"
        cancel-text="Cancel"
        @confirm="handleConfirmDialog3"
      >
      </BaseAlertDialog>
      <BaseButton variant="outline" @click="dialog3OpenStatus = true">Open by v-model </BaseButton>
      <div>
        <div>Dialog status: {{ dialog3OpenStatus }}</div>
        <div>Confirm status: {{ dialog3ConfirmStatus }}</div>
      </div>
    </BaseCard>
  </div>
</template>
