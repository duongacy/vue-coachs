<template>
  <form class="bg-gray-100 -mx-4 p-4">
    <div class="space-y-6">
      <div>
        <h2 class="font-bold text-xl leading-7 text-gray-900">Contact</h2>
        <p class="mt-1 text-sm leading-6 text-gray-600">
          This information will be displayed publicly so be careful what you share.
        </p>

        <div class="mt-4 grid gap-y-4">
          <label class="block">
            <span class="text-sm font-medium leading-6 text-gray-900">Email</span>
            <div
              class="flex mt-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 max-w-md"
            >
              <input
                type="text"
                class="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                placeholder="Please enter your email"
              />
            </div>
          </label>

          <label class="block">
            <span class="text-sm font-medium leading-6 text-gray-900">Message</span>
            <textarea
              rows="3"
              class="block w-full mt-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-sm leading-6"
            />
            <p class="mt-3 text-sm leading-6 text-gray-600">
              Write a few sentences about yourself.
            </p>
          </label>
        </div>
      </div>
    </div>

    <div class="mt-6 flex justify-end gap-x-4">
      <base-button variant="secondary" size="large">Cancel</base-button>
      <base-button variant="primary" size="large">Submit</base-button>
    </div>
  </form>
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
