<template>
  <div>
    <el-button type="primary" @click="handleClick(1)">业务组件1</el-button>
    <el-button type="primary" @click="handleClick(2)">业务组件2</el-button>
    <controlsDialog ref="controlsDialogRef"></controlsDialog>

    <controlsTabs ref="controlsTabRef" :destroy="true"></controlsTabs>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef, nextTick } from "vue"

import controlsTabs from "@/middleware/controls-tabs/controls-tabs.vue"

// import controlsDialog, { controlsDialogRef } from "@/middleware/controls-dialog/controls-dialog.ts";
import controlsDialog from "@/middleware/controls-dialog/controls-dialog.ts";

import DialogBusinessA from "./formA.vue";
import DialogBusinessB from "./tableA.vue";
// const DialogBusinessA= defineAsyncComponent(() => import("./formA.vue"));
// const DialogBusinessB= defineAsyncComponent(() => import("./tableA.vue"));


const controlsDialogRef = ref()
function handleClick(n) {
  const BusinessComp = n === 1 ? DialogBusinessA : DialogBusinessB;
  controlsDialogRef.value && controlsDialogRef.value.setState({
    visible: true,
    title: `业务组件${n}`,
    componentName: BusinessComp,
    data: { name: 'wxs' },
    callback: (close) => {
      // close()

      // 假设子组件实现了handleSubmit方法，父组件的callback就要返回是否关闭组件的状态
      return true
    }
  });
}

const controlsTabRef = ref(null)
onMounted(() => {
  controlsTabRef.value.setState({
    active: 'businessA',
    options: [
      {
        label: "业务A",
        tabName: "businessA",
        componentName: shallowRef(DialogBusinessA),
        data: {
          name: "wxs",
        },
      },
      {
        label: "业务B",
        tabName: "businessB",
        componentName: shallowRef(DialogBusinessB),
        data: {
          tableData: [
            {
              id: 1,
              name: '张三1',
              age: 18,
            },
            {
              id: 2,
              name: '李四1',
              age: 19,
            },
            {
              id: 3,
              name: '王五1',
              age: 20,
            },
          ],
        },
      },
    ],
  })
})

</script>
