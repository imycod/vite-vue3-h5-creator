<template>
  业务A
  <el-form :model="form">
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="名称字段">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
  <!-- <el-button @click="handleSubmit">保存</el-button> -->
</template>

<script lang="ts" setup>
import { reactive,onMounted } from "vue";

// const props=defineProps({
//   data: {
//     type: Object,
//     default: () => ({})
//   },
// })

const form = reactive({
  name: "",
});

function initState(state) {
  console.log('state---', state)
  Object.keys(state).forEach((key) => {
    form[key] = state[key];
  });
}
function handleSubmit(callback) {
  alert("操作业务A组件逻辑和数据" + form.name);
  // throw new Error('接口错误')
  callback()
}
// function getState(prop='all') {
//   if (prop === '') {
//     return form;
//   }
//   return form[prop];
// }

onMounted(() => {
  alert('onMounted---111')
})
defineExpose({
  // getState,
  handleSubmit,
  initState,
});
</script>