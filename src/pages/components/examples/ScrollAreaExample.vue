<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { BaseSeparator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`)
</script>

<template>
  <div class="grid gap-2 ">
    <ScrollArea class="h-72 w-[350px] rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>

        <div v-for="tag in tags" :key="tag">
          <div class="text-sm">
            {{ tag }}
          </div>
          <BaseSeparator class="my-2" />
        </div>
      </div>
    </ScrollArea>
  </div>
</template>
