<script setup lang="ts">
// import FtrSub from "./ftr-sub.vue";

const form=reactive({
  option:'',
  remark:'',
})


// const controlsDialogRef=ref(null)
// function handleClick() {
//   controlsDialogRef.value.setState({
//     visible:true,
//     title:'终面意见',
//     componentName:FtrSub
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
      <div class="mc-ui-grid-item zsyj">终试意见</div>
      <div class="mc-ui-grid-item zsyj-options">
        <el-radio label="1" v-model="form.option">建议录用</el-radio>
        <el-radio label="2" v-model="form.option">不予考虑</el-radio>
        <el-radio label="4" v-model="form.option">列为候补</el-radio>
        <el-radio label="5" v-model="form.option">建议存档</el-radio>
        <el-radio label="6" v-model="form.option">推荐他用</el-radio>
      </div>
      <div class="mc-ui-grid-item zsyj-eva px-5 pt-0.5">
        评价：
        <div class="writer">
          <div style="width: 200px">
            <span>面试人：</span>
            <span>xx</span>
          </div>
          <div style="width:140px">
            <span>日期：</span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <!-- <controls-dialog ref="controlsDialogRef" width="50%"></controls-dialog> -->
  </div>
</template>

<style scoped lang="scss">
$cell-height:20px;
.layer-container{
  position:relative;
  .mask{
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
  grid-template-columns:  0.5fr 0.6fr 2.3fr;
  grid-template-rows: 2fr;
  gap: 0px 0px;
  border:1px solid #8d8d8d;
  line-height: $cell-height;
  grid-auto-flow: row;
  grid-template-areas:
    "zsyj zsyj-options zsyj-eva";
}
.mc-ui-grid-item {
  border: 1px solid #464646;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
}
.zsyj { grid-area: zsyj;line-height:calc($cell-height*8); }

.zsyj-options { grid-area: zsyj-options;
  label{
    width: 100%;
    margin-left: 20px;
  }
}

.zsyj-eva { grid-area: zsyj-eva;


  text-align: left;
  position: relative;
  padding-left: 20px;
  padding-top: 10px;
  .writer{
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
  }

}

</style>