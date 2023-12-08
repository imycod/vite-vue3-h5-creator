<template>
    <el-table :data="form.tableData" :columns="columns" border>
        <el-table-column prop="name" label="部门名称" />
        <el-table-column prop="age" label="年龄"></el-table-column>
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

import { reactive, ref } from "vue";

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
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
            age: 18,
        },
        {
            id: 2,
            name: '李四',
            age: 19,
        },
        {
            id: 3,
            name: '王五',
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


</script>