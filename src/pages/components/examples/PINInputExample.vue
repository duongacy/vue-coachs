<script setup lang="ts">
import { ref } from 'vue'
import { PinInput, PinInputInput } from '@/components/ui/pin-input'

const value = ref<string[]>([])
const handleComplete = (e: string[]) => alert(e.join(''))
</script>

<template>
  <div class="grid gap-2">
    <PinInput
      id="pin-input"
      v-model="value"
      placeholder="○"
      class="mt-1 flex items-center gap-2"
      @complete="handleComplete"
    >
      <PinInputInput v-for="(id, index) in 5" :key="id" :index="index" />
    </PinInput>
  </div>
</template>
