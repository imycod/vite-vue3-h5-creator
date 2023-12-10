<script setup lang="ts">
import CoreForm from "./Core-Form.vue"

import useDrawer from "@/hooks/useDrawer";
import useHook from "./index"

const drawer = useDrawer()

const coreFormRef = ref(null)

const {
  handleClose,
  handleAddFinalEva,
  handleExport,
} = useHook({ wrapper: drawer, coreFormRef })

function setState(state) {
  drawer.setState(state)
}

defineExpose({
  setState,
})
</script>

<template>
  <el-drawer class="drawer-container" v-model="drawer.state.visible" :show-close="false" :size="1050" direction="rtl">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header" style="display: flex; justify-content: space-between">
        <span :id="titleId" :class="titleClass">面试评估</span>
        <el-button @click="handleClose"> 关闭 </el-button>
        <el-button @click="handleAddFinalEva"> 添加终试评估 </el-button>
        <el-button type="primary" @click="handleExport"> 导出 </el-button>
      </div>
    </template>
    <div style="width: 1000px">
      <Core-form ref="coreFormRef"></Core-form>
    </div>
  </el-drawer>
</template>

<style lang="scss">
.drawer-container {
  .el-drawer__body {
    padding-top: 0px !important;
  }

  .el-drawer__header {
    margin-bottom: 10px;
  }
}
</style>
