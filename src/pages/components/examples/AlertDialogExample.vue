<script setup lang="ts">
import { AlertDialogTrigger, BaseAlertDialog } from '@/components/ui/alert-dialog';
import { BaseButton, buttonVariants } from '@/components/ui/button';
import { BaseCard } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ref } from 'vue';

type ConfirmStatus = 'DONT_HAVE_CONFIRMED' | 'DECLINE' | 'ACCEPT';

const dialogOpenStatus = ref(false);
const dialogConfirmStatus = ref<ConfirmStatus>('DONT_HAVE_CONFIRMED');
const handleConfirmDialog3 = (value: boolean) => {
  dialogConfirmStatus.value = value ? 'ACCEPT' : 'DECLINE';
};
</script>
<template>
  <div class="flex items-start gap-4">
    <BaseCard
      title="Control by v-model (two-way binding)"
      description="Don't need to listen event to toggle status"
      class="w-[350px]"
    >
      <BaseAlertDialog
        v-model:open="dialogOpenStatus"
        title="Are you absolutely sure?"
        description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        ok-text="Continue"
        cancel-text="Cancel"
        @confirm="handleConfirmDialog3"
      >
      </BaseAlertDialog>
      <BaseButton variant="outline" @click="dialogOpenStatus = true">Open dialog</BaseButton>
      <div>
        <div>Dialog status: {{ dialogOpenStatus }}</div>
        <div>Confirm status: {{ dialogConfirmStatus }}</div>
      </div>
    </BaseCard>
  </div>
</template>
