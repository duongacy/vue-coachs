<script setup lang="ts">
import BaseLabel from '@/components/ui/label/BaseLabel.vue';
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@/components/ui/tags-input';
import { ref } from 'vue';

const modelValue = ref(['Apple', 'Banana']);
</script>

<template>
  <div class="grid gap-4 overflow-auto overflow-y-hidden">
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Default</p>
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Fruits</span>
        <TagsInput v-model="modelValue" class="m-1">
          <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete @click="$event.preventDefault()" />
          </TagsInputItem>
          <TagsInputInput placeholder="Fruits..." />
        </TagsInput>
      </BaseLabel>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Disabled</p>
      <BaseLabel class="grid w-[350px] gap-2" prevent-delegation>
        <span>Fruits</span>
        <TagsInput v-model="modelValue" disabled class="m-1">
          <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete @click="$event.preventDefault()" />
          </TagsInputItem>
          <TagsInputInput placeholder="Fruits..." />
        </TagsInput>
      </BaseLabel>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Error</p>
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Fruits</span>
        <TagsInput v-model="modelValue" is-error class="m-1">
          <TagsInputItem v-for="item in modelValue" :key="item" :value="item">
            <TagsInputItemText />
            <TagsInputItemDelete @click="$event.preventDefault()" />
          </TagsInputItem>
          <TagsInputInput placeholder="Fruits..." />
        </TagsInput>
      </BaseLabel>
    </div>
  </div>
</template>
