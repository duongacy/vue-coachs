<template>
  <div class="flex flex-col">
    <base-typography size="heading4" weight="bold" class="p-4 bg-red-100">Form</base-typography>
    <input-section></input-section>
    <checkbox-section></checkbox-section>
    <radio-group-section></radio-group-section>
    <listbox-section></listbox-section>
    <switch-section></switch-section>
  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue'
import CheckboxSection from './CheckboxSection.vue'
import InputSection from './InputSection.vue'
import RadioGroupSection from './RadioGroupSection.vue'
import ListboxSection from './ListboxSection.vue'
import SwitchSection from './SwitchSection.vue'
</script>
