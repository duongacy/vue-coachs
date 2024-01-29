<template>
    <span :class="cn('text-white  px-4 py-1 rounded-full text-sm uppercase inline-block',
        {
            'bg-red-700 ': props.type === 'frontend',
            'bg-yellow-700 ': props.type === 'backend',
            'bg-slate-700 ': props.type === 'fullstack',
        })">
        {{ props.type }}
    </span>
</template>

<script lang="ts" setup>
import cn from '@/utils/cn';

const props = defineProps<
    {
        type: 'frontend' | 'backend' | 'fullstack'
    }>()
</script>