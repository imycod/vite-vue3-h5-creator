<template>
    <UiDialog ref="uiDialogRef">
        <template #body="{ data }">
            <CoreForm ref="coreFormRef"></CoreForm>
        </template>
        <template #footer>
            <el-button @click="handleClick(0)">关闭</el-button>
            <el-button @click="handleClick(1)">添加最终意见</el-button>
            <el-button @click="handleClick(2)">导出</el-button>
        </template>
    </UiDialog>
</template>

<script setup lang="ts">
import UiDialog, { uiDialogRef } from "@/uicomponents/dialog/index.ts"
import CoreForm from "./Core-Form.vue"

import useHook from "./index"

const coreFormRef = ref(null)

// const footbarCustom = [
//         {
//             text: '保存',
//             type: 'primary',
//             onClick: () => {
//                 coreFormRef.value.handleSubmit()
//             }
//         },
//         {
//             text: '取消',
//             type: 'default',
//             onClick: () => {
//                 uiDialogRef.value.close()
//             }
//         }
//     ]

const {
    handleClose,
    handleAddFinalEva,
    handleExport,
} = useHook({ wrapper: {
    close: () => {
        uiDialogRef.value.handleClose()
    }
}, coreFormRef })

function handleClick(n) {
    try {
        if (n == 1) {
            alert('添加最终意见')
            handleAddFinalEva()
        }
        if (n == 2) {
            alert('导出')
            handleExport()
        }
        if (n == 0) {
            // alert('关闭')
            handleClose()
        }
    } catch (error) {
        alert(error.message)
    }
}

function setState(newState) {
    uiDialogRef.value.setState(newState)
}
onMounted(()=>{
    alert('onMounted')
})
defineExpose({
    setState
})
</script>