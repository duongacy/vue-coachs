
<template>
  <div class="flex h-12 justify-between items-center shadow-md">
    <div>Find a Coach</div>
    <div class="flex space-x-4">
      <nav-link to="/coachs">Coachs</nav-link>
      <nav-link to="/requests-received">Requests received</nav-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavLink from '@/components/common/NavLink.vue'
</script>