<template>
    <el-dialog v-model="visible" title="aa">
        visible
    </el-dialog>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const visible = computed({
    get() {
        return props.modelValue
    },
    set(v) {
        emit('update:modelValue', v)
    }
})
</script>