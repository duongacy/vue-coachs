<template v-if="coach">
    <base-card class="flex flex-col gap-2">
        <p class="text-2xl font-bold">{{ fullName }}</p>
        <p class="font-bold">{{ rate }}</p>
    </base-card>
    <base-card class="flex flex-col gap-3">
        <p class="text-2xl font-bold">
            Interested? Reach out now!
        </p>
        <base-button to="contact" mode="contained" class="self-start">Contact</base-button>
    </base-card>
    <base-card class="flex gap-2 flex-col">
        <div class="flex gap-4">
            <base-badge v-for="area in areas" :key="area" :type="area">
            </base-badge>
        </div>
        <p>{{ coach?.description }}</p>
    </base-card>
</template>

<script setup lang="ts">
import BaseBadge from '@/components/common/BaseBadge.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import { key } from '@/store';
import type { Coach } from '@/store/modules/coachs';
import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
const store = useStore(key);

const props = defineProps<{
    coachId: string
}>()

const coach = computed(() => {
    const coachs = store.getters['coachs/coachs'] as Coach[]
    return coachs.find(item => item.id = props.coachId)
})

const fullName = computed(() => {
    return coach.value?.firstName + ' - ' + coach.value?.lastName
})

const rate = computed(() => {
    return `$${coach.value?.hourlyRate}/hour`
})

const areas = computed(() => {
    return coach.value?.areas
})


</script>