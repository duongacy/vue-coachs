<template>
  <div class="flex flex-col gap-4">
    <div class="text-2xl font-extrabold">Request received</div>
    <base-card class="flex flex-col gap-4" v-if="requests.length">
      <div
        class="border-cyan-400 border grid grid-cols-[auto_1fr] gap-2 p-4"
        v-for="request in requests"
        :key="request.id"
      >
        <strong>Email:</strong>
        <a class="text-green-700" target="_blank" :href="'mailto:' + request.userEmail">{{
          request.userEmail
        }}</a>
        <strong>Message:</strong>
        <span>{{ request.message }}</span>
      </div>
    </base-card>
    <base-card v-else>
      <div class="p-4 text-xl">You don't have any request</div>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import BaseCard from '@/components/common/BaseCard.vue'
import { key } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore(key)
const requests = computed(() => {
  return store.state.REQUESTS.requests.filter((item) => item.coachId == store.state.coachId)
})
</script>
