<template>
    <div>
        推荐用人方 - 多推荐和单推荐复用组件 <br>
        -- <br>
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
// 两种情况，1 子组件实现了handleSubmit方法 2 子组件没实现该方法
// function handleSubmit(callback, {close}) {
//     // 做些内部组件销毁操作，取消监听，取消事件，数据清理等
//     alert('做些子组件数据清理工作，调用父级callback')
//     const done = callback()
//     if (done) {
//         close()
//     }
// }
function initState(data) {
    state.data = data
}
defineExpose({
    // handleSubmit,
    initState,
})
</script>