<template>
    <div>
        推荐用人方 - 多推荐和单推荐复用组件 <br>
        --  <br>
        复用组件，组件的提交逻辑和事件应该解耦，交给外部调用者
        {{ state.data }}
    </div>
</template>    

<script setup lang="ts">
// defineProps({
//     data: {
//         type: Object,
//         default: () => ({})
//     }
// })
const state = reactive({
    data: {

    }
})
function handleSubmit(callback) {
    // 做些内部组件销毁操作，取消监听，取消事件，数据清理等
    callback()
}
function initState(data) {
    state.data = data
}
defineExpose({
    handleSubmit,
    initState,
})
</script>