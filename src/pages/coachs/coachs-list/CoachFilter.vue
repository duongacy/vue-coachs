<template>
    <div>
        <label>
            Frontend:
            <input type="checkbox" v-model="filterValues.frontend">
        </label>
        <label>
            Backend:
            <input type="checkbox" v-model="filterValues.backend">
        </label>
        <label>
            Fullstack:
            <input type="checkbox" v-model="filterValues.fullstack">
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const emit = defineEmits(['change']);

const filterValues = ref({
    frontend: true,
    backend: true,
    fullstack: true
})
emit('change', filterValues.value)

watch(filterValues.value, () => {
    emit('change', filterValues.value)
})
</script>

<style scoped></style>