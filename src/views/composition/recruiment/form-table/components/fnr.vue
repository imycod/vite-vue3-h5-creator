<script setup lang="ts">
// import FnrSub from "./fnr-sub.vue";

const form = reactive({
  option: '',
  remark: '',
})


// const controlsDialogRef=ref(null)
// function handleClick() {
//   controlsDialogRef.value.setState({
//     visible:true,
//     title:'面试结果',
//     componentName:FnrSub
//   })
// }
// function dialogSubmit() {
//   controlsDialogRef.value.setState({
//     visible:false,
//   })
// }

const emits = defineEmits(['edit'])
function handleClick() {
  emits('edit')
}
</script>

<template>
  <div class="layer-container">
    <div class="mask" @click="handleClick">点击编辑</div>
    <div class="container">
      <div class="mc-ui-grid-item zsyj">面试结果</div>
      <div class="mc-ui-grid-item zsyj-eva px-5 pt-0.5">
        <div>
          <span>最终结果：</span>
          <span>通过</span>
        </div>
        <div style="margin-top:20px">
          <span>职级评估</span>
          <span class="text">L7</span>,
          <span>薪级评估</span>
          <span class="text">L7</span>。
        </div>
        <div style="margin-top: 5px">
          <span>试用期建议薪资:固薪</span>
          <span class="text">10000</span>,
          <span>试用期建议</span>
          <span class="text">10</span>个月。
        </div>
        <div style="margin-top: 5px">
          <span>转正后建议薪资:固薪</span>
          <span class="text">10000</span>,
          <span>绩效标准</span>
          <span class="text">10</span>。
        </div>
        <div style="margin-top: 10px">
          <span>备注：下周 7-09 入职</span>
        </div>
      </div>
    </div>
    <controls-dialog ref="controlsDialogRef" width="50%"></controls-dialog>
  </div>
</template>

<style scoped lang="scss">
$cell-height: 20px;

.layer-container {
  position: relative;

  .mask {
    position: absolute;
    top: 0px;
    left: 150px;
    width: calc(100% - 150px);
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1000;
    text-align: center;
    color: #fff;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.container {
  display: grid;
  grid-template-columns: 0.5fr 0.6fr 2.3fr;
  grid-template-rows: 2fr;
  gap: 0px 0px;
  border: 1px solid #8d8d8d;
  line-height: $cell-height;
  grid-auto-flow: row;
  grid-template-areas:
    "zsyj zsyj-eva zsyj-eva";
}

.mc-ui-grid-item {
  border: 1px solid #464646;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
}

.zsyj {
  grid-area: zsyj;
  line-height: calc($cell-height*8);
}


.zsyj-eva {
  grid-area: zsyj-eva;
  text-align: left;
  position: relative;
  padding-left: 20px;
  padding-top: 10px;

  .text {
    position: relative;
    display: inline-block;
    margin-left: 4px;
    mright-right: 4px;
  }

  .text::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    /* 调整下划线位置 */
    width: 100%;
    height: 1px;
    background-color: #000;
    /* 下划线颜色 */
  }
}</style>