<script lang="ts" setup>
import { LogoBounding } from '@/components/ui/logo-bounding';
</script>
<template>
  <footer class="bg-white py-4">
    <div class="mx-auto flex max-w-[800px] flex-wrap justify-center gap-2 p-6">
      <LogoBounding class="text-[#42d392]"> Vuejs </LogoBounding>
      <LogoBounding class="text-[#42d392]"> Vuex </LogoBounding>
      <LogoBounding class="text-[#38bdf8]">Tailwind</LogoBounding>
      <LogoBounding class="text-[#000000]">tailwind-merge</LogoBounding>
      <LogoBounding class="text-[#000000]">clsx</LogoBounding>
      <LogoBounding class="text-[#000000]">Radix Vue</LogoBounding>
      <LogoBounding class="text-[#23be88]">VeeValidate</LogoBounding>
      <LogoBounding class="text-[#3068b7]">Zod</LogoBounding>
    </div>
    <p class="mt-10 text-center text-xs leading-5 text-neutral-500">
      &copy; 2024 WTVue, Inc. All rights reserved.
    </p>
  </footer>
</template>
