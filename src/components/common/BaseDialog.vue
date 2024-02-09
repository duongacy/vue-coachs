<template>
  <TransitionRoot appear :show="show" as="template" @close="$emit('close')">
    <Dialog as="div" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
                v-if="!!title"
              >
                {{ title }}
              </DialogTitle>
              <div class="mt-2">
                <slot></slot>
              </div>

              <div class="mt-4 flex gap-4 justify-end" v-if="!!okText || !!cancelText">
                <base-button
                  v-if="!!cancelText"
                  variant="secondary"
                  size="large"
                  class="min-w-20 justify-center"
                  @click="$emit('cancel')"
                  >{{ cancelText }}</base-button
                >
                <base-button
                  v-if="!!okText"
                  variant="primary"
                  size="large"
                  class="min-w-20 justify-center"
                  @click="$emit('ok')"
                  >{{ okText }}</base-button
                >
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

defineEmits(['close', 'cancel', 'ok'])
defineProps<{ show: boolean; title?: string; okText?: string; cancelText?: string }>()
</script>
