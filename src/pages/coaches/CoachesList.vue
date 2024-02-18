<template>
  <div class="p-4">
    <div class="border border-gray-200 rounded-lg overflow-hidden py-6">
      <div class="bg-white px-4">
        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div class="ml-4 mt-4">
            <h3 class="text-base font-semibold leading-6 text-gray-900">Coaches</h3>
            <p class="mt-1 text-sm text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <base-button variant="primary" size="large" to="/coaches/add"
              >Create new coach
            </base-button>
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-gray-200 my-4"></div>
      <div class="bg-white px-4">
        <div v-for="(coach, coachIndex) in coaches" :key="coach.id">
          <coach-item :item="coach"></coach-item>
          <div class="h-[1px] bg-gray-200 my-4" v-if="coachIndex !== coaches.length - 1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { key } from '@/store'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CoachItem from './CoachItem.vue'

const store = useStore(key)
const coaches = computed(() => {
  return store.state.COACHES.coaches
})

onMounted(async () => {
  try {
    store.dispatch('COACHES/loadAllAction')
  } catch (error: any) {
    console.log(error.message)
  }
})
</script>
