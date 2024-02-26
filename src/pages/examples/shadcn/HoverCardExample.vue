<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import { BaseAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BaseButton } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
</script>

<template>
  <div>
    <HoverCard>
      <HoverCardTrigger as-child>
        <BaseButton variant="link"> @vuejs </BaseButton>
      </HoverCardTrigger>
      <HoverCardContent class="w-80">
        <div class="flex justify-between space-x-4">
          <BaseAvatar>
            <AvatarImage src="https://github.com/vuejs.png" />
            <AvatarFallback>VC</AvatarFallback>
          </BaseAvatar>
          <div class="space-y-1">
            <h4 class="text-sm font-semibold">@vuejs</h4>
            <p class="text-sm">
              Progressive JavaScript framework for building modern web interfaces.
            </p>
            <div class="flex items-center pt-2">
              <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
              <span class="text-xs text-muted-foreground"> Joined January 2014 </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  </div>
</template>
