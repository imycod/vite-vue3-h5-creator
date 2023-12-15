<template>
    <ui-dialog ref="uiDialogRef" @confirm="handleSubmit">
        <template #body="{ data }">
            <core-form :data="data" ref="coreFormRef"></core-form>
            <button @click="plus">加</button>
        </template>
    </ui-dialog>
</template>

<script setup lang="ts">
import UiDialog, { uiDialogRef,counter } from "@/uicomponents/dialog/index.ts"
import useNotice from "@/hooks/useNotice"
import CoreForm from "./form.vue"

import { ref } from "vue"
const coreFormRef = ref(null)

const handleSubmit = (close) => {
    try {
        coreFormRef.value.handleSubmit()
        const notice = useNotice()
        notice.success({ type: 'success', message: '爱看书的教案课件大家看' })
        close(true)
    } catch (error) {
        alert(error.message)
    }
}

function plus() {
    counter.value +=1
    console.log(counter.value);
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