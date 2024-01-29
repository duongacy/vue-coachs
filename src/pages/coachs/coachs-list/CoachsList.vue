<template>
    <base-card>
        <coach-filter @change="onChangeFilter"></coach-filter>
    </base-card>
    <base-card>
        <section>
            <h2 class="text-2xl font-bold">
                LIST OF COACHS
            </h2>
            <div class="flex gap-4 justify-between py-3">
                <base-button mode="outline">Refresh</base-button>
                <base-button to="register" mode="contained">Register as Coach</base-button>
            </div>
        </section>
        <ul class="flex flex-col gap-4" v-if="hasCoachs">
            <coach-item v-for="item in filteredCoachs" :key="item.id" :item="item">
            </coach-item>
        </ul>
    </base-card>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { key } from '@/store'
import { computed, ref } from 'vue';
import type { Coach } from '@/store/modules/coachs';
import CoachItem from '@/components/coachs/CoachItem.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import CoachFilter from './CoachFilter.vue'
const store = useStore(key)

const coachs = computed(() => {
    return store.getters['coachs/coachs'] as Coach[]
})

const filteredCoachs = ref([] as Coach[]);

const onChangeFilter = (filter: { frontend: boolean, backend: boolean, fullstack: boolean }) => {
    filteredCoachs.value = coachs.value.filter(item => item.areas.some(v => filter[v]))
}

const hasCoachs = computed(() => {
    return store.getters['coachs/hasCoachs'] as boolean
})

</script>