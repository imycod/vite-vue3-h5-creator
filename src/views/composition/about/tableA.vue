<template>
  <div style="margin-top: 20px">
    <el-button type="primary" :disabled="multipleSelection.length <= 0"
      @click="handleChange('push-mutiple', multipleSelection)">多选推送</el-button>
    <el-button type="primary" @click="toggleSelection([form.tableData[1], form.tableData[2]])">选中第1、2项</el-button>
    <el-button @click="toggleSelection()">清空选中项</el-button>
  </div>
  <el-table ref="multipleTableRef" :data="form.tableData" :columns="columns" border
    @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="name" label="用户名称" />
    <el-table-column prop="deptname" label="部门名称" />
    <el-table-column prop="age" label="年龄"></el-table-column>
    <el-table-column prop="default" label="操作">
      <template #default="{ row }">
        <el-button @click="handleChange('push', row)">推荐用人方</el-button>
        <el-button @click="handleClick(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>

  <controlsDialog ref="controlsDialogRef" destroy></controlsDialog>
</template>

<script lang="ts" setup name="tableA">
// import controlsDialog, { controlsDialogRef } from "@/middleware/controls-dialog/controls-dialog.ts";
import controlsDialog from "@/middleware/controls-dialog/controls-dialog.ts";

import PushComp from "./pushComp.vue"

import { reactive } from "vue";

const controlsDialogRef=ref()

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

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref([])
const toggleSelection = (rows?: []) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined)
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
function handleSelectionChange(val) {
  multipleSelection.value = val
}
function handleChange(type, data) {
  if (type === 'push') {
    controlsDialogRef.value.setState({
      visible: true,
      title: `业务组件${type}`,
      componentName: PushComp,
      data,
      callback: (close) => {
        alert(`业务组件BBBBBBBBB - dialogB的回调函数 ${type}`)
        close()
        // return true
      }
    });
  } else if (type === 'push-mutiple') {
    controlsDialogRef.value.setState({
      visible: true,
      title: `业务组件${type}`,
      componentName: PushComp,
      data,
      callback: (close) => {
        alert(`业务组件B dialogB的回调函数 ${type}`)
        close()
      }
    });
  }

  console.log(data);
}

// 实现此接口
function handleSubmit(callback) {
  alert("操作业务B组件逻辑和数据" + form.name);
  callback && callback(false)
}

function initState(state) {
  // alert('B')
  console.log('/about about tableA initState',state)
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

onMounted(()=>{
  alert('/about tableA onMounted')
})
defineExpose({
  handleSubmit,
  initState,
  // getState,
});
</script>