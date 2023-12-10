<template>
    <el-table :data="form.tableData" :columns="columns" border>
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="deptname" label="部门名称" />
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="default" label="操作">
            <template #default="{ row }">
                <el-button @click="handleClick('edit', row)">编辑</el-button>
                <el-button @click="handleClick('del', row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <middlewareComp ref="middleware"></middlewareComp>
</template>
  
<script setup lang="ts">
import middlewareComp from "./middleware.vue"

import { useCommonStore } from "@/stores/common"
import depttree from "./depttree"

import { reactive, ref, onMounted } from "vue";

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '部门名称',
        dataIndex: 'deptname',
        key: 'deptname',
    },
    {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    },
]
const form = reactive({
    tableData: [
        {
            id: 1,
            name: '张三',
            deptname: '软件研发部',
            deptId: '20000',
            age: 18,
        },
        {
            id: 2,
            name: '李四',
            deptname: '总经办',
            deptId: '10000',
            age: 19,
        },
        {
            id: 3,
            name: '王五',
            deptname: '软件研发一部',
            deptId: '21000',
            age: 20,
        },
    ],
});
const middleware = ref(null)
function handleClick(type, row) {
    switch (type) {
        case 'edit':
            middleware.value.setState(row)
            break;

        default:
            alert(`删除${row.id}`);
            break;
    }
}

const commonStore = useCommonStore()
function setDept() {
    setTimeout(() => {
        commonStore.setDeptList(depttree)
    }, 1000)
}
onMounted(() => {
    setDept()
})
</script>