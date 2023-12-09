<template>
    <ui-dialog ref="uiDialogRef" @confirm="handleSubmit">
        <template #default="{ data }">
            <core-form :data="data" ref="coreFormRef"></core-form>
        </template>
    </ui-dialog>
</template>

<script setup lang="ts">
import UiDialog, { uiDialogRef } from "@/uicomponents/dialog/index.ts"
import CoreForm from "./form.vue"

import { ref } from "vue"
const coreFormRef = ref(null)

const handleSubmit = (close) => {
    try {
        coreFormRef.value.handleSubmit()
        close(true)
    } catch (error) {
        alert(error.message)
    }
}

const setState = (row) => {
    uiDialogRef.value.setState({
        title: '业务B',
        data: row,
        visible: true,
    })
}
defineExpose({
    setState
})
</script>