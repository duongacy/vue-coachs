<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-end">
      <p class="text-2xl font-extrabold">Coaches list</p>
      <base-button mode="contained" :to="registerRoute?.path">Add new coach</base-button>
    </div>
    <div class="grid grid-cols-3 gap-4">
      <coach-item v-for="coach in coaches" :item="coach" :key="coach.id"> </coach-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import CoachItem from '@/components/coaches/CoachItem.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import { routes } from '@/router'
import { key } from '@/store'
import type { TCoach } from '@/types/coach'
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore(key)

const coaches = ref<TCoach[]>([])

onMounted(() => {
  fetch('https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json').then(
    (rs) => {
      rs.json().then((r) => {
        console.log(r)
        coaches.value = r
      })
    }
  )
})
// const coaches = computed(() => store.state.COACHES.coaches)

const registerRoute = routes.find((item) => item.name === 'coach-register')
</script>
