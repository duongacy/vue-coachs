<script setup lang="ts">
import BaseLabel from '@/components/ui/label/BaseLabel.vue';
import { PinInput, PinInputInput } from '@/components/ui/pin-input';
import { ref } from 'vue';

const value = ref<string[]>([]);
const handleComplete = (e: string[]) => {
  setTimeout(() => {
    alert(e.join(''));
  }, 1);
};

const error = ref(true);
const onReset = () => {
  value.value = ['', '', '', '', '', ''];
  error.value = false;
};
</script>

<template>
  <div class="grid gap-2">
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Default</p>
      <BaseLabel class="grid gap-1">
        <span>OTP</span>
        <PinInput
          id="pin-input"
          v-model="value"
          placeholder="○"
          class="mt-1 flex items-center gap-2"
          @complete="handleComplete"
          type="number"
        >
          <PinInputInput
            v-for="(id, index) in 5"
            :key="id"
            :index="index"
          />
        </PinInput>
      </BaseLabel>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Error</p>
      <BaseLabel
        class="grid gap-1"
        @click="onReset"
      >
        <span>OTP</span>
        <PinInput
          id="pin-input"
          v-model="value"
          placeholder="○"
          class="mt-1 flex items-center gap-2"
          type="number"
        >
          <PinInputInput
            v-for="(id, index) in 5"
            :key="id"
            :index="index"
            :isError="error"
          />
        </PinInput>
      </BaseLabel>
    </div>
  </div>
</template>
