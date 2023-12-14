<template>
  <el-dialog v-model="state.visible" :title="state.title" :before-close="close">
    <component :is="componentName" ref="componentRef" v-if="destroy && state.visible" :data="componentData"></component>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit"> Confirm </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, nextTick } from "vue";
import useDialog from "@/hooks/useDialog.ts";

const props = defineProps({
  destroy: {
    type: Boolean,
    default: true,
  },
});

const { setState: setDialogState, state, close } = useDialog();

const componentName = ref("");
const componentRef = ref(null);
const componentData = ref(null);
// 接口供外部实现
let callback = () => { }
const setState = (state) => {
  componentName.value = state.componentName;
  componentData.value = state.data

  if (state.callback) {
    callback = state.callback;
  }

  setDialogState({ title: state.title, visible: state.visible });

  nextTick(() => {
    if (state.data) {
      componentRef.value.initState && componentRef.value.initState(state.data);
    }
  })
};
const handleSubmit = () => {
  try {
    // componentRef.value.handleSubmit((done = true) => {
    //   if (done) {
    //     close();
    //   }
    // });
    if (componentRef.value && componentRef.value.handleSubmit) {
      componentRef.value.handleSubmit(async () => {
        try {
          const done = await callback();
          if (done) {
            close();
          }
        } catch (error) {
          alert(error.message)
        }
      });
    } else {
      callback(close);
    }
  } catch (e) {
    alert('出错了')
  }


};
defineExpose({
  setState,
});
</script>