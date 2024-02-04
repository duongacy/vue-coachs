<template>
  <form class="bg-gray-100 -mx-4 p-4 grid gap-y-4" @submit.prevent="onSubmit">
    <div>
      <!-- form head -->
      <h2 class="font-bold text-xl leading-7 text-gray-900">Request</h2>
      <p class="mt-1 text-sm leading-6 text-gray-600">
        This information will be displayed publicly so be careful what you share.
      </p>
    </div>

    <div class="grid gap-y-4 mt-2">
      <!-- form body -->
      <label class="grid gap-2">
        <span class="text-sm font-medium leading-6 text-gray-900">Email</span>
        <input
          type="text"
          ref="emailRef"
          :class="
            cn({
              'rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm leading-6': true,
              'focus:ring-red-600 focus:ring-2 ring-red-600': !!request.userEmail.error
            })
          "
          placeholder="Please enter your email"
          v-model="request.userEmail.value"
        />
        <p class="text-sm leading-6 text-red-600" v-if="!!request.userEmail.error">
          {{ request.userEmail.error }}
        </p>
      </label>

      <label class="grid gap-2">
        <span class="text-sm font-medium leading-6 text-gray-900">Message</span>
        <textarea
          ref="messageRef"
          rows="3"
          v-model="request.message.value"
          :class="
            cn(
              'rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 text-sm leading-6',
              {
                'focus:ring-red-600 focus:ring-2 ring-red-600': !!request.message.error
              }
            )
          "
          placeholder="Write a few sentences about yourself"
        />
        <p class="text-sm leading-6 text-red-600" v-if="!!request.message.error">
          {{ request.message.error }}
        </p>
      </label>
    </div>

    <div class="flex justify-end gap-x-4">
      <!-- form footer -->
      <base-button variant="secondary" size="large" type="button" @click="onCancel"
        >Cancel</base-button
      >
      <base-button variant="primary" size="large" type="submit">Submit</base-button>
    </div>
  </form>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
import { key } from '@/store'
import type { TRequest } from '@/types/request'
import cn from '@/utils/cn'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore(key)
const route = useRoute()
const router = useRouter()

const request = ref({
  userEmail: { value: '', error: '' },
  message: { value: '', error: '' }
})

const cancelValidate = (key: keyof typeof request.value) => {
  request.value[key].error = ''
}

const emailRef = ref<HTMLInputElement>()
const messageRef = ref<HTMLTextAreaElement>()

const checkValidate = () => {
  if (!request.value.userEmail.value.includes('@')) {
    request.value.userEmail.error = 'Email is not valid!'
    emailRef.value?.focus()
    return false
  }
  if (request.value.message.value === '') {
    request.value.message.error = 'Please enter message!'
    messageRef.value?.focus()
    return false
  }
  return true
}

const onCancel = () => {
  router.back()
}

onMounted(() => {
  emailRef.value?.focus()
})

const onSubmit = async () => {
  if (!checkValidate()) return
  const data: TRequest = {
    id: new Date().getTime().toString(),
    coachId: route.params.coachId.toString(),
    userEmail: request.value.userEmail.value,
    message: request.value.message.value
  }
  try {
    await store.dispatch('REQUESTS/addAction', data)
  } catch (error) {
    console.log(error)
  }
}
</script>
