<template>
  <div class="flex flex-col gap-4">
    <h1 class="text-xl font-extrabold">Request form</h1>
    <form @submit.prevent="onSubmit" class="flex flex-col gap-2">
      <label class="grid grid-cols-[120px_1fr] items-end gap-y-1">
        <strong>Email:</strong>
        <input
          type="text"
          v-model.trim="request.userEmail.value"
          :class="{
            'border-red-500 focus:ring-red-500 focus:border-red-500': !!request.userEmail.error
          }"
          @change="cancelValidate('userEmail')"
        />
        <span />
        <small class="text-red-500" v-if="request.userEmail.error">{{
          request.userEmail.error
        }}</small>
      </label>

      <label class="grid grid-cols-[120px_1fr] items-end gap-y-1">
        <strong>Message:</strong>
        <textarea
          rows="3"
          v-model.trim="request.message.value"
          :class="{
            'border-red-500 focus:ring-red-500 focus:border-red-500': !!request.message.error
          }"
          @change="cancelValidate('message')"
        />
        <span />
        <small class="text-red-500" v-if="request.message.error">{{ request.message.error }}</small>
      </label>
      <base-button class="self-end" mode="contained">Send request</base-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { key } from '@/store'
import type { TRequest } from '@/types/request'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore(key)
const route = useRoute()

const request = ref({
  userEmail: { value: '', error: '' },
  message: { value: '', error: '' }
})

const cancelValidate = (key: keyof typeof request.value) => {
  request.value[key].error = ''
}

const checkValidate = () => {
  let ok = true
  if (!request.value.userEmail.value.includes('@')) {
    request.value.userEmail.error = 'Email is not valid!'
    ok = false
  }
  if (request.value.message.value === '') {
    request.value.message.error = 'Please enter message!'
    ok = false
  }
  return ok
}

const onSubmit = () => {
  if (!checkValidate()) return
  const data: TRequest = {
    id: new Date().toISOString(),
    coachId: route.params.coachId.toString(),
    userEmail: request.value.userEmail.value,
    message: request.value.message.value
  }
  store.dispatch('REQUESTS/addAction', data)
}
</script>
