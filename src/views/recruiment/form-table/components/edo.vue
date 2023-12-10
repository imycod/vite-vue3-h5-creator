<script setup lang="ts">
// import EdoSub from "./edu-sub.vue";

const form = reactive({
  opinion: '',
  appraise: {
    value1: 5,
    value2: 0,
    value3: 3,
    value4: 2,
    value5: 5,
    value6: 4,
  }
})

// const controlsDialogRef=ref(null)
// function handleClick() {
//   controlsDialogRef.value.setState({
//     visible:true,
//     title:'用人部门意见',
//     componentName:EdoSub
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
      <div class="mc-ui-grid-item ieoed">用人部门面试要素</div>
      <div class="mc-ui-grid-item mpooe">观察考核要点</div>
      <div class="mc-ui-grid-item eva">评价</div>
      <div class="mc-ui-grid-item psk">
        <div>专业既能</div>
        <div>(用人部门判断情况根据实际调整)</div>
      </div>
      <div class="mc-ui-grid-item edi">用人部门意见</div>
      <div class="mc-ui-grid-item we">工作经验</div>
      <div class="mc-ui-grid-item pskill">专业知识技能</div>
      <div class="mc-ui-grid-item gzsl">工作思路</div>
      <div class="mc-ui-grid-item xxnl">学习能力</div>
      <div class="mc-ui-grid-item ksx">可塑性</div>
      <div class="mc-ui-grid-item ybnl">应变能力</div>
      <div class="mc-ui-grid-item we-desc desc">所从事的工作岗位，工作职责与应聘的岗位吻合程度。</div>
      <div class="mc-ui-grid-item pskill-desc desc">是否具备所应被岗位所要求的专业知识和技能，知识技能是否健全。</div>
      <div class="mc-ui-grid-item gzsl-desc desc">工作思路清晰，可以较好开展工作。</div>
      <div class="mc-ui-grid-item xxnl-desc desc">学习工作所需的新知识，技能的速度和掌握情况。</div>
      <div class="mc-ui-grid-item ksx-desc desc">专业潜力是否具有可塑性。</div>
      <div class="mc-ui-grid-item ybnl-desc desc">面对外界环境事物发生改变，能否及时作出应变。</div>
      <div class="mc-ui-grid-item we-eva rate"><el-rate v-model="form.appraise.value1" />评分</div>
      <div class="mc-ui-grid-item pskill-eva rate"><el-rate v-model="form.appraise.value2" />评分</div>
      <div class="mc-ui-grid-item gzsl-eva rate"><el-rate v-model="form.appraise.value3" />评分</div>
      <div class="mc-ui-grid-item xxnl-eva rate"><el-rate v-model="form.appraise.value4" />评分</div>
      <div class="mc-ui-grid-item ksx-eva rate"><el-rate v-model="form.appraise.value5" />评分</div>
      <div class="mc-ui-grid-item ybnl-eva rate"><el-rate v-model="form.appraise.value6" />评分</div>
      <div class="mc-ui-grid-item edi-options">
        <el-radio label="1" v-model="form.opinion">建议录用</el-radio>
        <el-radio label="2" v-model="form.opinion">不予考虑</el-radio>
        <el-radio label="3" v-model="form.opinion">进入下一轮面试</el-radio>
        <el-radio label="4" v-model="form.opinion">列为候补</el-radio>
        <el-radio label="4" v-model="form.opinion">建议存档</el-radio>
        <el-radio label="5" v-model="form.opinion">推荐他用</el-radio>
      </div>
      <div class="mc-ui-grid-item edi-eva px-5 pt-0.5">
        评价：
        <div>1</div>
        <div class="hr-writer">
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
    <!-- <controls-dialog ref="controlsDialogRef" width="50%" @submit="dialogSubmit"></controls-dialog> -->
  </div>
</template>

<style scoped lang="scss">
$cell-height: 20px;

.layer-container {
  position: relative;

  .mask {
    position: absolute;
    top: 40px;
    left: 150px;
    width: calc(100% - 150px);
    height: calc(100% - 40px);
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
  text-align: center;
}

.mc-ui-grid-item {
  border: 1px solid #464646;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-columns: 0.5fr 0.6fr 1.5fr 0.8fr;
  grid-template-rows: 0.3fr 0.4fr 0.3fr 0.4fr 0.4fr 0.4fr 0.4fr 3fr;
  gap: 0px 0px;
  border: 1px solid #8d8d8d;
  line-height: $cell-height;
  grid-auto-flow: row;
  grid-template-areas:
    "ieoed ieoed mpooe eva"
    "psk we we-desc we-eva"
    "psk pskill pskill-desc pskill-eva"
    "psk gzsl gzsl-desc gzsl-eva"
    "psk xxnl xxnl-desc xxnl-eva"
    "psk ksx ksx-desc ksx-eva"
    "psk ybnl ybnl-desc ybnl-eva"
    "edi edi-options edi-eva edi-eva";
}

.edi-options {
  label {
    width: 100%;
    margin-left: 20px;
  }
}

.rate {
  display: flex;
  justify-content: center;
  align-items: center;
}

.desc {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
}

.ieoed {
  grid-area: ieoed;
  line-height: calc($cell-height*2);
  background: #b2e0fd
}

.mpooe {
  grid-area: mpooe;
  line-height: calc($cell-height*2);
  background: #b2e0fd
}

.eva {
  grid-area: eva;
  line-height: calc($cell-height*2);
  background: #b2e0fd
}

.psk {
  grid-area: psk;
  padding-top: calc($cell-height*5);
}

.edi {
  grid-area: edi;
  line-height: calc($cell-height*9);
}

.we {
  grid-area: we;
  line-height: calc($cell-height*2);
}

.pskill {
  grid-area: pskill;
  line-height: calc($cell-height*2);
}

.gzsl {
  grid-area: gzsl;
  line-height: calc($cell-height*2);
}

.xxnl {
  grid-area: xxnl;
  line-height: calc($cell-height*2);
}

.ksx {
  grid-area: ksx;
  line-height: calc($cell-height*2);
}

.ybnl {
  grid-area: ybnl;
  line-height: calc($cell-height*2);
}

.we-desc {
  grid-area: we-desc;
}

.pskill-desc {
  grid-area: pskill-desc;
}

.gzsl-desc {
  grid-area: gzsl-desc;
}

.xxnl-desc {
  grid-area: xxnl-desc;
}

.ksx-desc {
  grid-area: ksx-desc;
}

.ybnl-desc {
  grid-area: ybnl-desc;
}

.we-eva {
  grid-area: we-eva;
}

.pskill-eva {
  grid-area: pskill-eva;
}

.gzsl-eva {
  grid-area: gzsl-eva;
}

.xxnl-eva {
  grid-area: xxnl-eva;
}

.ksx-eva {
  grid-area: ksx-eva;
}

.ybnl-eva {
  grid-area: ybnl-eva;
}

.edi-options {
  grid-area: edi-options;
}

.edi-eva {
  grid-area: edi-eva;
  text-align: left;
  position: relative;
  padding-left: 20px;
  padding-top: 10px;

  .hr-writer {
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
  }
}</style>