<script setup lang="ts">
import BaseLabel from '@/components/ui/label/BaseLabel.vue';
import { BaseTextarea } from '@/components/ui/textarea';
import { ref } from 'vue';

const value = ref('');
</script>

<template>
  <div>
    <div class="flex flex-wrap gap-4">
      <BaseLabel class="grid gap-1">
        <span>Description</span>
        <BaseTextarea
          placeholder="Type your message here."
          class="w-[350px]"
          v-model:value="value"
        />
      </BaseLabel>
      <BaseLabel class="grid gap-1">
        <span>Description</span>
        <BaseTextarea
          placeholder="Type your message here."
          class="w-[350px]"
          is-error
        />
      </BaseLabel>
      <BaseLabel class="grid gap-1">
        <span>Description</span>
        <BaseTextarea
          placeholder="Type your message here."
          class="w-[350px]"
          disabled
        />
      </BaseLabel>
    </div>
    {{ value }}
  </div>
</template>
