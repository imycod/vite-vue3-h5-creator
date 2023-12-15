<template>
    <el-button @click="handleClick(1)">面试评估侧边栏</el-button>
    <el-button @click="handleClick(2)">面试评估弹窗</el-button>
    <MsMiddleware ref="middlewareRef"></MsMiddleware>
    <MsMiddlewareDialog ref="middlewareDialogRef"></MsMiddlewareDialog>
</template>

<script setup lang="ts">
import MsMiddleware from "./components/middeware.vue"
import MsMiddlewareDialog from "./components/middleware-dialog.vue"

import { ref } from "vue"

const middlewareRef = ref(null)
const middlewareDialogRef = ref(null)

function handleClick(n) {
    const type = n === 1 ? 'drawer' : 'dialog'
    if (type == 'drawer') {
        middlewareRef.value.setState({
            visible: true,
        })
    }
    if (type == 'dialog') {
        middlewareDialogRef.value.setState({
            visible: true,
        })   
    }

}
</script>