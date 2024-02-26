<script setup lang="ts">
import { BasePopover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { BaseButton } from '@/components/ui/button'
import { BaseLabel } from '@/components/ui/label'
import { BaseInput } from '@/components/ui/input'
</script>

<template>
  <div>
    <BasePopover>
      <PopoverTrigger as-child>
        <BaseButton variant="outline"> Open popover </BaseButton>
      </PopoverTrigger>
      <PopoverContent class="w-80">
        <div class="grid gap-4">
          <div class="space-y-2">
            <h4 class="font-medium leading-none">Dimensions</h4>
            <p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div class="grid gap-2">
            <div class="grid grid-cols-3 items-center gap-4">
              <BaseLabel for="width">Width</BaseLabel>
              <BaseInput id="width" type="text" default-value="100%" class="col-span-2 h-8" />
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <BaseLabel for="maxWidth">Max. width</BaseLabel>
              <BaseInput id="maxWidth" type="text" default-value="300px" class="col-span-2 h-8" />
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <BaseLabel for="height">Height</BaseLabel>
              <BaseInput id="height" type="text" default-value="25px" class="col-span-2 h-8" />
            </div>
            <div class="grid grid-cols-3 items-center gap-4">
              <BaseLabel for="maxHeight">Max. height</BaseLabel>
              <BaseInput id="maxHeight" type="text" default-value="none" class="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </BasePopover>
  </div>
</template>
