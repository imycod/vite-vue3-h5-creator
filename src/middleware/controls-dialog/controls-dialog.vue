<template>
  <el-dialog v-model="state.visible" :title="state.title" :before-close="close">
    <component :is="componentName" ref="componentRef" :state="componentState"></component>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref,nextTick } from "vue";
import useDialog from "@/hooks/useDialog.ts";

const { setState: setDialogState, state, close } = useDialog();

const componentName = ref("");
const componentRef = ref(null);
const componentState=ref(null);
const setState = (state) => {
  componentName.value = state.componentName;
  componentState.value = state.data
  setDialogState({ title: state.title, visible: state.visible });

  nextTick(()=>{
    componentRef.value.initState && componentRef.value.initState(state.data);
  })
};
const handleSubmit = () => {
  try {
    componentRef.value.handleSubmit((done)=>{
      if (done){
        close();
      }
    });
  }catch (e) {
    alert('出错了')
  }


};
defineExpose({
  setState,
});
</script>