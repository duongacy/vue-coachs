
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import cn from '@/utils/cn'

const props = defineProps<{
    to: string
}>()

const route = useRoute()
const active = computed(() => route.path == props.to)
</script>

<template>
    <router-link :to="to" :class="cn('inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium  border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700', {
        'text-neutral-900 border-primary-500': active
    })">
        <slot></slot>
    </router-link>
</template>
