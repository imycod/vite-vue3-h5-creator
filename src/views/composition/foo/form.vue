<template>
    <el-form :model="form">
        <el-form-item label="姓名">
            <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="部门">
            <el-cascader clearable v-model="form.deptId" :options="options" filterable :props="{
                label: 'name',
                value: 'id'
            }" @change="handleChange" />
        </el-form-item>
        <el-form-item label="年龄字段">
            <el-input v-model="form.age" />
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/stores/common"

import { reactive, onMounted, ref } from "vue"
import { getCascaderOptions } from "@/utils/selector";

const props = defineProps({
    data: {
        type: Object,
        default: () => ({})
    }
})

const options = ref([])
const form = reactive({
    name: "",
    age: "",
    deptId: "",
})

function handleChange() {

}


function initState(initialState) {
    let state = initialState
    if (typeof state === 'function') {
        state = state()
    }
    Object.keys(state).forEach((key) => {
        form[key] = state[key];
    });
}

const commonStore = useCommonStore()
onMounted(() => {
    initState(() => {
        const newState = props.data
        newState.deptId = 3
        return newState
    })
    // initState(props.data)
    options.value = commonStore.deptList
})

// 实现此接口
function handleSubmit() {
    console.log(form);
    const newForm = {
        ...form
    }
    const deptId = getCascaderOptions(newForm.deptId)
    newForm.deptIds = deptId ? [
        {
            id: deptId,
            type: '1'
        }
    ] : []
    console.log(newForm);
    // throw new Error("handleSubmit error");
    // alert("操作业务B组件逻辑和数据" + form.name);
}

defineExpose({
    handleSubmit,
    initState,
});
</script>