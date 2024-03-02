<script setup lang="ts">
import { BaseAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
</script>

<template>
  <div>
    <BaseAvatar>
      <AvatarImage src="https://github.com/radix-vue.png" alt="@radix-vue" />
      <AvatarFallback>CN</AvatarFallback>
    </BaseAvatar>
  </div>
</template>
