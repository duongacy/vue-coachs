<script setup lang="ts">
import { BaseAvatar, type AvatarVariants } from '@/components/ui/avatar';
const avatarVariants = {
  size: ['lg', 'base', undefined] as AvatarVariants['size'][],
  shape: ['square', undefined] as AvatarVariants['shape'][],
};
</script>

<template>
  <div class="grid gap-2 overflow-x-auto">
    <div
      v-for="shape in avatarVariants.shape"
      :key="shape || '_' + 'avatarVariants.shape'"
      class="flex items-end gap-2"
    >
      <div v-for="size in avatarVariants.size" :key="(size || '_') + (shape || '_') + 'avatar'">
        <BaseAvatar
          :size="size"
          :shape="shape"
          src="/src/assets/avatar.jpeg"
          fallback="CN"
          alt="@radix-vue"
        >
        </BaseAvatar>
        <div>
          <p class="whitespace-nowrap">Size: {{ size || 'sm(default)' }}</p>
          <p class="whitespace-nowrap">Shape: {{ shape || 'circle(default)' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
