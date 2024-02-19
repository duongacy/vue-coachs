<template>
  <div class="p-4">
    <div class="border border-neutral-200 rounded-lg overflow-hidden py-6 px-4" v-if="!!coach">
      <div>
        <h3 class="text-base font-semibold leading-7 text-neutral-900">Applicant Information</h3>
        <p class="mt-1 max-w-2xl text-sm leading-6 text-neutral-500">
          Personal details and application.
        </p>
      </div>
      <div class="mt-6">
        <dl class="grid grid-cols-2">
          <div class="border-t border-neutral-100 py-6">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Full name</dt>
            <dd class="mt-1 text-sm leading-6 text-neutral-700">
              {{ coach?.firstName + ' ' + coach?.lastName }}
            </dd>
          </div>
          <div class="border-t border-neutral-100 py-6">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Application for</dt>
            <dd class="mt-1 text-sm leading-6 text-neutral-700 flex gap-4">
              <base-badge
                v-for="area in coach.areas"
                :key="area"
                :dotClass="
                  cn({
                    'fill-error-500': area === 'frontend',
                    'fill-yellow-500': area === 'backend',
                    'fill-green-500': area === 'fullstack'
                  })
                "
                class="capitalize"
                :text="area"
              ></base-badge>
            </dd>
          </div>
          <div class="border-t border-neutral-100 py-6">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Email address</dt>
            <dd class="mt-1 text-sm leading-6 text-neutral-700">margotfoster@example.com</dd>
          </div>
          <div class="border-t border-neutral-100 py-6">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Salary expectation</dt>
            <dd class="mt-1 text-sm leading-6 text-neutral-700">${{ coach.hourlyRate }}/hour</dd>
          </div>
          <div class="border-t border-neutral-100 py-6 col-span-2">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Description</dt>
            <dd class="mt-1 text-sm leading-6 text-neutral-700">
              {{ coach.description }}
            </dd>
          </div>
          <div class="border-t border-neutral-100 py-6 col-span-2">
            <dt class="text-sm font-medium leading-6 text-neutral-900">Attachments</dt>
            <dd class="mt-2 text-sm text-neutral-900">
              <ul role="list" class="divide-y divide-neutral-100 rounded-md border border-neutral-200">
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-neutral-400" aria-hidden="true" />
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                      <span class="flex-shrink-0 text-neutral-400">2.4mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-primary-600 hover:text-primary-500"
                      >Download</a
                    >
                  </div>
                </li>
                <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div class="flex w-0 flex-1 items-center">
                    <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-neutral-400" aria-hidden="true" />
                    <div class="ml-4 flex min-w-0 flex-1 gap-2">
                      <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                      <span class="flex-shrink-0 text-neutral-400">4.5mb</span>
                    </div>
                  </div>
                  <div class="ml-4 flex-shrink-0">
                    <a href="#" class="font-medium text-primary-600 hover:text-primary-500"
                      >Download</a
                    >
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <base-button variant="primary" size="extra-large" :to="registerLink"
        >Request a coach</base-button
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import { key } from '@/store'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import cn from '@/utils/cn'

const props = defineProps<{ coachId: string }>()
const store = useStore(key)

const coach = computed(() => {
  return store.state.COACHES.selectedCoach
})
const registerLink = computed(() => {
  return `/coaches/${props.coachId}/request`
})

onMounted(() => {
  store.dispatch('COACHES/loadByIdAction', props.coachId)
})
</script>
