<script setup lang="ts">
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-vue-next'

import { ref } from 'vue'
import { cn } from '@/lib/utils'
import { BaseButton } from '@/components/ui/button'
import { BaseCalendar } from '@/components/ui/calendar'
import { BasePopover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

const date = ref<Date>()
</script>

<template>
  <div>
    <BasePopover>
      <PopoverTrigger as-child>
        <BaseButton
          :variant="'outline'"
          :class="
            cn('w-[280px] justify-start text-left font-normal', !date && 'text-muted-foreground')
          "
        >
          <CalendarIcon class="mr-2 h-4 w-4" />
          <span>{{ date ? format(date, 'PPP') : 'Pick a date' }}</span>
        </BaseButton>
      </PopoverTrigger>
      <PopoverContent class="w-auto p-0">
        <BaseCalendar v-model="date" />
      </PopoverContent>
    </BasePopover>
  </div>
</template>
