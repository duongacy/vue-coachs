<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { useCoordinatesMouseClicked } from '@/hooks/useCoordinatesMouseClicked'
import { useToggle } from '@/hooks/useToggle'
import { ref } from 'vue'

const [show, toggleShow] = useToggle(true)
const divRef = ref<HTMLElement>()
const coordinates = useCoordinatesMouseClicked(divRef)
</script>

<template>
  <div class="p-4 flex flex-col gap-2">
    <div>Mouse click component</div>
    <BaseButton @click="toggleShow" variant="primary" size="large" class="self-start"
      >Toggle</BaseButton
    >
    <div ref="divRef" v-if="show" class="h-[300px] bg-red-100 grid place-items-center">
      <p v-if="!!coordinates">
        You clicked on coordinates: {{ coordinates.x + ', ' + coordinates.y }}
      </p>
      <p v-else>Click here to get coordinates</p>
    </div>
  </div>
</template>
