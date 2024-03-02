<script setup lang="ts">
import { BaseAvatar, type AvatarVariants } from '@/components/ui/avatar'
import { BaseTypography } from '@/components/ui/typography'
const avatarVariants = {
  size: ['lg', 'base', 'sm', undefined] as AvatarVariants['size'][],
  shape: ['square', 'circle', undefined] as AvatarVariants['shape'][]
}
</script>

<template>
  <div class="grid gap-2 overflow-x-auto">
    <div
      v-for="size in avatarVariants.size"
      :key="size || '_' + 'avatarVariants.size'"
      class="flex gap-2 items-end"
    >
      <div v-for="shape in avatarVariants.shape" :key="(size || '_') + (shape || '_') + 'avatar'">
        <BaseAvatar
          :size="size"
          :shape="shape"
          src="https://github.com/radix-vue.png"
          fallback="CN"
          alt="@radix-vue"
        >
        </BaseAvatar>
        <div>
          <BaseTypography variant="detail" class="whitespace-nowrap">
            Size: {{ size || 'default' }}
          </BaseTypography>
          <BaseTypography variant="detail" class="whitespace-nowrap">
            Shape: {{ shape || 'default' }}
          </BaseTypography>
        </div>
      </div>
    </div>
  </div>
</template>
