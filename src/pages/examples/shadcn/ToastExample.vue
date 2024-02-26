<script setup lang="ts">
import { BaseButton } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast()
</script>

<template>
  <div>
    <BaseButton
      variant="outline"
      @click="
        () => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM'
          })
        }
      "
    >
      Add to calendar
    </BaseButton>
  </div>
</template>
