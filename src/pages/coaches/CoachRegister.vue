<template>
  <div class="flex flex-col gap-4">
    <div class="text-2xl font-extrabold">Coach register</div>
    <form class="flex flex-col gap-2" @submit.prevent="onSubmit">
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>First name:</strong>
        <input
          type="text"
          v-model="validateObj.firstName.val"
          :class="{
            [invalidClass]: !validateObj.firstName.isValid
          }"
          @change="removeValidate('firstName')"
        />
      </label>
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Last name:</strong>
        <input
          type="text"
          v-model.trim="validateObj.lastName.val"
          @change="removeValidate('lastName')"
          :class="{
            [invalidClass]: !validateObj.lastName.isValid
          }"
        />
      </label>
      <div class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Areas:</strong>
        <div class="flex gap-3">
          <label v-for="area in areas" :key="area" class="flex gap-1 items-center select-none">
            <input
              type="checkbox"
              v-model="validateObj.areas.val"
              :value="area"
              @change="removeValidate('areas')"
            />
            <span class="capitalize">{{ area }}</span>
          </label>
        </div>
        <small class="text-red-500" v-if="!validateObj.areas.isValid"
          >Please select at least 1 area</small
        >
      </div>
      <div class="grid grid-cols-[minmax(120px,auto)_1fr] items-end">
        <label for="description">
          <strong>Description: </strong>
        </label>
        <textarea
          id="description"
          type="text"
          v-model.trim="validateObj.description.val"
          rows="3"
          :class="{
            [invalidClass]: !validateObj.description.isValid
          }"
          @change="removeValidate('description')"
        ></textarea>
      </div>
      <label class="grid grid-cols-[minmax(120px,auto)_1fr] items-baseline">
        <strong>Hourly rate:</strong>
        <input
          type="number"
          v-model.number="validateObj.hourlyRate.val"
          :class="{
            [invalidClass]: !validateObj.hourlyRate.isValid
          }"
          @change="removeValidate('hourlyRate')"
        />
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

const store = useStore(key)
const areas: TArea[] = ['backend', 'frontend', 'fullstack']

const invalidClass = 'border-red-500 focus:ring-red-500 focus:border-red-500'
const validateObj = ref({
  firstName: {
    val: '',
    isValid: true
  },
  lastName: {
    val: '',
    isValid: true
  },
  areas: {
    val: [],
    isValid: true
  },
  description: {
    val: '',
    isValid: true
  },
  hourlyRate: {
    val: 0,
    isValid: true
  }
})

const removeValidate = (key: keyof typeof validateObj.value) => {
  validateObj.value[key].isValid = true
}

const doValidate = () => {
  validateObj.value.firstName.isValid = validateObj.value.firstName.val !== ''
  validateObj.value.lastName.isValid = validateObj.value.lastName.val !== ''
  validateObj.value.areas.isValid = validateObj.value.areas.val.length !== 0
  validateObj.value.description.isValid = validateObj.value.description.val !== ''
  validateObj.value.hourlyRate.isValid = validateObj.value.hourlyRate.val > 0
  return (
    validateObj.value.firstName.isValid &&
    validateObj.value.lastName.isValid &&
    validateObj.value.areas.isValid &&
    validateObj.value.description.isValid &&
    validateObj.value.hourlyRate.isValid
  )
}

const onSubmit = () => {
  if (!doValidate()) {
    return
  }
  const data: TCoach = {
    id: new Date().toISOString(),
    firstName: validateObj.value.firstName.val,
    lastName: validateObj.value.lastName.val,
    areas: validateObj.value.areas.val,
    description: validateObj.value.description.val,
    hourlyRate: validateObj.value.hourlyRate.val
  }
  store.dispatch('COACHES/addAction', data)
}
</script>
