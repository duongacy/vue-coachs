<template>
  <div>
    <div class="p-4">
      <div class="border border-neutral-200 rounded-lg overflow-hidden p-4 flex flex-col gap-4">
        <div>
          <h3 class="text-base font-semibold leading-6 text-neutral-900">Requests</h3>
          <p class="mt-1 text-sm text-neutral-500" v-if="!requests.length">Don't have any requests.</p>
        </div>
        <div class="h-[1px] bg-neutral-200" v-if="!!requests.length"></div>
        <div class="grid gap-4" v-if="!!requests.length">
          <div
            v-for="request in requests"
            :key="request.id"
            class="shadow-lg rounded-md overflow-hidden p-4"
          >
            <a :href="'mailto:' + request.userEmail" class="text-sm font-bold text-neutral-900">{{
              request.userEmail
            }}</a>
            <div class="mt-4 space-y-6 text-base italic text-neutral-600">
              {{ request.message }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <base-dialog :show="!!error" @close="onCloseErrorDialog" @ok="onCloseErrorDialog" ok-text="OK"
      >{{ error }}
    </base-dialog>
  </div>
</template>

<script setup lang="ts">
// import BaseDialog from '@/components/common/BaseDialog.vue'
import { key } from '@/store'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

const error = ref<string>('')
const store = useStore(key)
const requests = computed(() => {
  return store.state.REQUESTS.requests
})
const loadAllRequests = async () => {
  try {
    await store.dispatch('REQUESTS/loadAllAction')
  } catch (err: any) {
    error.value = err.message
  }
}

loadAllRequests()

const onCloseErrorDialog = () => {
  error.value = ''
}
</script>
