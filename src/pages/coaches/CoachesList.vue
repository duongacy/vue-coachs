<template>
  <div class="p-4">
    <div class="border border-neutral-200 rounded-lg overflow-hidden py-6">
      <div class="bg-white px-4">
        <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div class="ml-4 mt-4">
            <h3 class="text-base font-semibold leading-6 text-neutral-900">Coaches</h3>
            <p class="mt-1 text-sm text-neutral-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit quam corrupti consectetur.
            </p>
          </div>
          <div class="ml-4 mt-4 flex-shrink-0">
            <BaseButton variant="outline" to="/coaches/add">Create new coach </BaseButton>
          </div>
        </div>
      </div>
      <div class="h-[1px] bg-neutral-200 my-4"></div>
      <div class="bg-white px-4 grid md:grid-cols-2 gap-4">
        <coach-item :item="coach" v-for="coach in coaches" :key="coach.id"></coach-item>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { key } from '@/store'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import CoachItem from './CoachItem.vue'
import { BaseCard } from '@/components/ui/card'
import { BaseTypography } from '@/components/ui/typography'
import { BaseBadge } from '@/components/ui/badge'
import { BaseButton } from '@/components/ui/button'

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
