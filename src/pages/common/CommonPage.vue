<template>
  <div>
    <div class="text-2xl">Common page</div>
    <br />
    <div class="flex flex-col">
      <div class="text-xl font-extrabold p-4 bg-red-100">Button</div>
      <div class="flex flex-col gap-4 bg-slate-100 p-4">
        <div class="flex gap-2 items-end" v-for="variant in variants" :key="variant">
          <base-button v-for="size in sizes" :key="variant + size" :variant="variant" :size="size">
            <span class="capitalize"> {{ variant }} </span>{{ ' ' }}
            <span> {{ size }} </span>
          </base-button>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="text-xl font-extrabold p-4 bg-red-100">Badge</div>
      <div class="flex gap-4 bg-slate-100 p-4">
        <base-badge
          v-for="area in ['Frontend', 'Backend', 'Fullstack']"
          :key="area"
          :dotClass="
            cn({
              'fill-red-500': area === 'Frontend',
              'fill-yellow-500': area === 'Backend',
              'fill-green-500': area === 'Fullstack'
            })
          "
          :text="area"
        ></base-badge>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type TBaseButtonSize, type TBaseButtonVariant } from '@/components/common/BaseButton.vue'
import cn from '@/utils/cn'

const sizes: TBaseButtonSize[] = ['extra-large', 'large', 'medium', 'small']
const variants: TBaseButtonVariant[] = ['primary', 'secondary', 'tertiary']
</script>
