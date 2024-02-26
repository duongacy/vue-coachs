<template>
  <div>
    <base-typography size="heading2" weight="heavy" class="px-4 py-8">Common</base-typography>
    <div class="">
      <button-section></button-section>
      <badge-section></badge-section>
      <typography-section></typography-section>
      <form-section></form-section>
      <disclosure-section></disclosure-section>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue'
import FormSection from './sections/form-section/FormSection.vue'
import ButtonSection from './sections/ButtonSection.vue'
import BadgeSection from './sections/BadgeSection.vue'
import TypographySection from './sections/TypographySection.vue'
import DisclosureSection from './sections/DisclosureSection.vue'
</script>
