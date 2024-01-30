<template>
  <div class="flex flex-col gap-4">
    <div class="text-2xl font-extrabold">Coach register</div>
    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>First name:</strong>
        <input type="text" v-model="coach.firstName" />
      </label>
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Last name:</strong>
        <input type="text" v-model.trim="coach.lastName" />
      </label>
      <div class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Areas:</strong>
        <div class="flex gap-3">
          <label v-for="area in areas" :key="area" class="flex gap-1 items-center select-none">
            <input type="checkbox" v-model="coach.areas" :value="area" />
            <span class="capitalize">{{ area }}</span>
          </label>
        </div>
      </div>
      <div class="grid grid-cols-[minmax(120px,auto)_1fr] items-end">
        <label for="description">
          <strong>Description: </strong>
        </label>
        <textarea id="description" type="text" v-model.trim="coach.description" rows="3"></textarea>
      </div>
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Hourly rate:</strong>
        <input type="number" v-model.number="coach.hourlyRate" />
      </label>
      <base-button mode="contained" type="submit" class="self-end min-w-40">Submit </base-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { key } from '@/store'
import type { TArea, TCoach } from '@/types/coach'
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const router = useRouter()

const store = useStore(key)
const areas: TArea[] = ['backend', 'frontend', 'fullstack']
const coach = ref<TCoach>({
  id: '',
  firstName: '',
  lastName: '',
  areas: [],
  description: '',
  hourlyRate: 0
})

const onSubmit = () => {
  store.dispatch('COACHES/addAction', coach.value)
  window.addEventListener('ADD_COACH_SUCCESS', () => {
    router.push({
      path: '/coaches'
    })
  })
}
</script>

<style scoped></style>
