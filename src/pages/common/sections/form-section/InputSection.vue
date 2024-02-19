<template>
  <div>
    <base-typography size="heading5" weight="medium" class="bg-pink-100 py-2 px-10 text-neutral-900 "
      >Input</base-typography
    >
    <div class="grid grid-cols-[auto_1fr] gap-4 items-end py-4 bg-warning-50">
      <div></div>
      <div class="grid grid-cols-4 gap-4">
        <base-typography size="heading6" weight="regular">No icon</base-typography>
        <base-typography size="heading6" weight="regular">Icon left</base-typography>
        <base-typography size="heading6" weight="regular">Icon right</base-typography>
        <base-typography size="heading6" weight="regular">Icon left + right</base-typography>
      </div>
      <base-typography size="heading6" weight="regular">Default</base-typography>
      <div class="grid grid-cols-4 gap-4">
        <base-input
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
        ></base-input>
        <base-input
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          value="This is value not placeholder"
          hint="Your username will not be public"
        ></base-input>
      </div>
      <base-typography size="heading6" weight="regular">Disabled</base-typography>
      <div class="grid grid-cols-4 gap-4">
        <base-input
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
          disabled
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
          disabled
        ></base-input>
        <base-input
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          hint="Your username will not be public"
          disabled
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          value="This is value not placeholder"
          hint="Your username will not be public"
          disabled
        ></base-input>
      </div>
      <base-typography size="heading6" weight="regular">Error</base-typography>
      <div class="grid grid-cols-4 gap-4">
        <base-input
          v-model="inputvalue"
          placeholder="Placeholder"
          error="Please enter your username"
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          error="Please enter your username"
        ></base-input>
        <base-input
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          placeholder="Placeholder"
          error="Please enter your username"
        ></base-input>
        <base-input
          :leftIcon="BaseIcon"
          :rightIcon="BaseIcon"
          v-model="inputvalue"
          value="This is value not placeholder"
          error="Please enter your username"
        ></base-input>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseIcon from '@/components/common/BaseIcon.vue'
import BaseInput from '@/components/common/BaseInput.vue'
import BaseTypography from '@/components/common/BaseTypography.vue'

import { ref } from 'vue'
const inputvalue = ref('')
</script>
