<template>
    <el-dialog v-model="state.visible" :title="state.title" :before-close="handleClose">
        <span data-test="body">
            <slot name="body" v-if="isVisible" :data="state.data"></slot>
        </span>
        <template #footer>
            <slot name="footer">
                <span class="dialog-footer">
                    <el-button type="primary" @click="confirm">保存</el-button>
                    <el-button @click="handleClose">取消</el-button>
                </span>
            </slot>
        </template>
    </el-dialog>
</template>

<script name="ui-dialog" setup lang="ts">
import useDialog from "@/hooks/useDialog"

// const props = defineProps({
//     footbarCustom: {
//         type: Function,
//         default: () => []
//     }
// })

// ui hooks 统一导出 state setState
const { state, setState: initState, close } = useDialog()

const emit = defineEmits(['confirm'])
function confirm() {
    emit('confirm', (done = true) => {
        if (done) {
            close()
        }
    })
}

const isVisible = ref(false)

// 中间件必须实现setState方法
function setState(newState) {
    isVisible.value = newState.visible
    initState(newState)
}
function handleClose() {
    close()
    setTimeout(() => isVisible.value = false, 200)
}

defineExpose({
    setState,
    handleClose,
})
</script>
