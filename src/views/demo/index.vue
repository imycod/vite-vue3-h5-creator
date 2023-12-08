<template>
    <div>
        <el-button type="primary" @click="handleClick(1)">业务组件1</el-button>
        <el-button type="primary" @click="handleClick(2)">业务组件2</el-button>
        <el-button type="primary" @click="handleClick(3)">业务组件3</el-button>
        <controlsDialog ref="controlsDialogRef"></controlsDialog>

        <controlsTabs ref="controlsTabRef"></controlsTabs>
    </div>
</template>

<script setup lang="ts">
import {ref,onMounted } from "vue"

import controlsTabs from "@/middleware/controls-tabs/controls-tabs.vue"

import controlsDialog, {
  controlsDialogRef,
} from "@/middleware/controls-dialog/controls-dialog.ts";

import DialogBusinessA from "./dialogA.vue";
import DialogBusinessB from "./dialogB.vue";
function handleClick(n) {
  const BusinessComp = n === 1 ? DialogBusinessA : DialogBusinessB;
  controlsDialogRef.value.setState({
    visible: true,
    title: `业务组件${n}`,
    componentName: BusinessComp,
    data: { name: 'wxs' }
  });
}

const controlsTabRef = ref(null)
onMounted(() => {
  controlsTabRef.value.setState({
    active:'businessA',
    options: [
      {
        label: "业务A",
        tabName: "businessA",
        componentName: DialogBusinessA,
        data: {
          name: "wxs",
        },
      },
      {
        label: "业务B",
        tabName: "businessB",
        componentName: DialogBusinessB,
        data: {
          name: 'wxs'
        },
      },
    ],
  })
})

</script>