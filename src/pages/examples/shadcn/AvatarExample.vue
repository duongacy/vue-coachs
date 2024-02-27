<script setup lang="ts">
import { BaseAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <BaseAvatar>
      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
      <AvatarFallback>CN</AvatarFallback>
    </BaseAvatar>
  </div>
</template>
