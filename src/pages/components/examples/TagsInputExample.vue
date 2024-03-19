<script setup lang="ts">
import { ref } from 'vue';
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from '@/components/ui/tags-input';
import BaseLabel from '@/components/ui/label/BaseLabel.vue';

const modelValue = ref(['Apple', 'Banana']);
</script>

<template>
  <div class="grid gap-4">
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Default</p>
      <BaseLabel class="grid w-[350px] gap-2">
        <span>Fruits</span>
        <TagsInput v-model="modelValue">
          <TagsInputItem
            v-for="item in modelValue"
            :key="item"
            :value="item"
          >
            <TagsInputItemText />
            <TagsInputItemDelete @click="$event.preventDefault()" />
          </TagsInputItem>
          <TagsInputInput placeholder="Fruits..." />
        </TagsInput>
      </BaseLabel>
    </div>
    <div class="grid gap-2">
      <p class="text-heading6 font-bold">Disabled</p>
      <BaseLabel
        class="grid w-[350px] gap-2"
        prevent-delegation
      >
        <span>Fruits</span>
        <TagsInput
          v-model="modelValue"
          disabled
        >
          <TagsInputItem
            v-for="item in modelValue"
            :key="item"
            :value="item"
          >
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
        <TagsInput
          v-model="modelValue"
          is-error
        >
          <TagsInputItem
            v-for="item in modelValue"
            :key="item"
            :value="item"
          >
            <TagsInputItemText />
            <TagsInputItemDelete @click="$event.preventDefault()" />
          </TagsInputItem>
          <TagsInputInput placeholder="Fruits..." />
        </TagsInput>
      </BaseLabel>
    </div>
  </div>
</template>
