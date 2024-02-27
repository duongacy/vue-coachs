<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import {
  BaseTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
</script>

<template>
  <div class="grid gap-2 border p-2">
    <TooltipProvider>
      <BaseTooltip>
        <TooltipTrigger as-child>
          <BaseButton variant="outline"> Hover </BaseButton>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </BaseTooltip>
    </TooltipProvider>
  </div>
</template>
