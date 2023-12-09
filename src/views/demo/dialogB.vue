<template>
  <el-table	:data="form.tableData" :columns="columns" border>
    <el-table-column prop="name" label="用户名称" />
    <el-table-column prop="deptname" label="部门名称" />
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="default" label="操作">
      <template #default="{ row }">
        <el-button @click="handleClick(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { reactive } from "vue";


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

function handleClick(n) {
  alert("删除" + n);
}

// 实现此接口
function handleSubmit(callback) {
  alert("操作业务B组件逻辑和数据" + form.name);
  callback && callback(true)
}

function initState(state) {
  console.log(state)
  Object.keys(state).forEach((key) => {
    form[key] = state[key];
  });
}
// function getState(prop='all') {
//   if (prop === '') {
//     return form;
//   }
//   return form[prop];
// }
defineExpose({
  handleSubmit,
  initState,
  // getState,
});
</script>