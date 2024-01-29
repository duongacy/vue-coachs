<template>
  <base-card>
    <form class="flex flex-col gap-4">
      <label>
        <strong> First name: </strong>
        <input type="text" />
      </label>
      <label>
        <strong> Last name: </strong>
        <input type="text" />
      </label>
      <div>
        <label>
          <strong> Areas: </strong>
        </label>
        <label>
          <input type="checkbox" />
          Frontend
        </label>
        <label>
          <input type="checkbox" />
          Backend
        </label>
        <label>
          <input type="checkbox" />
          Fullstack
        </label>
      </div>
      <label>
        <strong> Description: </strong>
        <textarea rows="3"></textarea>
      </label>
      <label>
        <strong> Hourly rate: </strong>
        <input type="number" />
      </label>

      <base-button mode="contained" class="self-start">Submit</base-button>
    </form>
  </base-card>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import BaseCard from '@/components/common/BaseCard.vue'
</script>
