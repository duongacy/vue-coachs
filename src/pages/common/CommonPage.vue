<template>
  <div>
    <base-typography size="heading2" weight="heavy" class="px-4 py-8 bg-yellow-100"
      >Common</base-typography
    >
    <button-section></button-section>
    <badge-section></badge-section>
    <typography-section></typography-section>
    <form-section></form-section>
  </div>
</template>

<script setup lang="ts">
import BaseTypography from '@/components/common/BaseTypography.vue'
import FormSection from './sections/form-section/FormSection.vue'
import ButtonSection from './sections/ButtonSection.vue'
import BadgeSection from './sections/BadgeSection.vue'
import TypographySection from './sections/TypographySection.vue'
</script>
