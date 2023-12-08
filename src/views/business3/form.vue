<template>
    <el-form :model="form">
        <el-form-item label="名称字段">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="年龄字段">
            <el-input v-model="form.age" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue"

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const form = reactive({
    name: "",
    age: "",
})

function initState(state) {
    console.log(state)
    Object.keys(state).forEach((key) => {
        form[key] = state[key];
    });
}

onMounted(() => {
    initState(props.data)
})

// 实现此接口
function handleSubmit() {
    alert("操作业务B组件逻辑和数据" + form.name);
}

defineExpose({
    handleSubmit,
    initState,
});
</script>