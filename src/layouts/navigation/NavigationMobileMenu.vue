<template>
  <div :class="cn('', $props.class)">
    <BaseDialog>
      <DialogTrigger as-child>
        <button type="button" class="w-10 h-10 bg-red-300"></button>
      </DialogTrigger>
      <DialogContent
        class="fixed rounded-tr-3xl overflow-hidden inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <BaseContainer class="flex items-center gap-4 border-b py-4">
          <DialogTrigger as-child>
            <button type="button" class="w-10 h-10 bg-red-300 ml-auto"></button>
          </DialogTrigger>
        </BaseContainer>
        <div class="mt-6 flow-root"></div>
      </DialogContent>
    </BaseDialog>
  </div>
</template>

<script setup lang="ts">
import { BaseDialog } from '@/components/ui/dialog';
import BaseContainer from '@/layouts/BaseContainer.vue';
import { cn } from '@/lib/utils';
import { DialogContent, DialogTrigger } from 'radix-vue';

defineProps<{
  class?: string;
}>();
</script>
