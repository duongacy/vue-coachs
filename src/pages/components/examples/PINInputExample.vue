<script setup lang="ts">
import { ref } from 'vue';
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
  PinInputSeparator,
} from '@/components/ui/pin-input';
import BaseLabel from '@/components/ui/label/BaseLabel.vue';

const value = ref<string[]>(['1', '2', '3']);
const handleComplete = (e: string[]) => alert(e.join(''));
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <div>
      <BaseLabel>
        <span> Default </span>
        <PinInput
          v-model="value"
          placeholder="○"
          @complete="handleComplete"
        >
          <PinInputGroup>
            <PinInputInput
              v-for="(id, index) in 5"
              :key="id"
              :index="index"
            />
          </PinInputGroup>
        </PinInput>
      </BaseLabel>
    </div>
    <div>
      <BaseLabel>
        <span>Disabled</span>
        <PinInput
          v-model="value"
          placeholder="○"
          disabled
        >
          <PinInputGroup>
            <PinInputInput
              v-for="(id, index) in 5"
              :key="id"
              :index="index"
            />
          </PinInputGroup>
        </PinInput>
      </BaseLabel>
    </div>
    <div>
      <BaseLabel prevent-delegation>
        <span> Separator </span>
        <PinInput
          v-model="value"
          placeholder="○"
          @complete="handleComplete"
        >
          <PinInputGroup class="gap-1">
            <template
              v-for="(id, index) in 5"
              :key="id"
            >
              <PinInputInput
                class="rounded-md border"
                :index="index"
              />
              <template v-if="index !== 4">
                <PinInputSeparator />
              </template>
            </template>
          </PinInputGroup>
        </PinInput>
      </BaseLabel>
    </div>
  </div>
</template>
