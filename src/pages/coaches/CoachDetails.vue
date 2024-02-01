<template>
  <div class="flex flex-col gap-4">
    <base-card>
      <h2 class="text-2xl font-extrabold">{{ coach?.firstName }} {{ coach?.lastName }}</h2>
      <p class="font-bold">${{ coach?.hourlyRate }}/hour</p>
    </base-card>
    <base-card class="gap-4 flex flex-col">
      <div v-if="coach?.areas.length">
        <base-badge v-for="area in coach?.areas" :key="area" :type="area"></base-badge>
      </div>
      <p class="italic">{{ coach?.description }}</p>
      <base-button class="self-start" :to="registerLink">Register</base-button>

      <router-view></router-view>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/common/BaseBadge.vue'
import BaseCard from '@/components/common/BaseCard.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { key } from '@/store'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore(key)
const coachs = store.state.COACHES.coaches
const props = defineProps<{ coachId: string }>()

const coach = computed(() => {
  return coachs.find((item) => item.id === props.coachId)
})

const registerLink = computed(() => {
  return `/coaches/${props.coachId}/request`
})
</script>
