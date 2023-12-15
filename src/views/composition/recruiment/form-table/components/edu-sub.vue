<script setup lang="ts">
import {useValidator,useDynamicTag} from "./index"
const props=defineProps({
  submit:{
    type:Function,
    default:()=>{}
  }
})
const form=reactive({
  option:'',
  skill:{
    value1:0,
    value2:0,
    value3:0,
    value4:0,
    value5:0,
    value6:0,
  },
  remark:'',
})
const validator = useValidator()
const rule={
  skill:[
    {
      required: true,
      message: '请选择专业技能',
      validator: validator.apprasiveValidate
    }
  ],
  option:[
      {
        required: true,
        message: '请选择结果意见',
        validator: validator.optionValidate
      }
  ],
  remark:[
      {
        required: true,
        message: '请填写评价',
        trigger: 'blur'
      },
      {
        min: 10,
        max: 500,
        message: '评价长度在 10 到 500 个字符',
        trigger: 'blur'
      }
  ]
}

// 标签
const {
  inputValue,
  dynamicTags,
  inputVisible,
  InputRef,
  handleClose,
  showInput,
  handleInputConfirm,
} = useDynamicTag()

// 提交表单
const formRef=ref(null)
function handleSubmit(close) {
  // 业务逻辑
  formRef.value.validate(valid=>{
    console.log('valid--',valid)
    if (valid){

      close()
    }
  })
}

defineExpose({
  handleSubmit
})
</script>

<template>
  <el-form :model="form" ref="formRef" :rules="rule" @submit.native.prevent>
    <el-form-item label="专业技能：" prop="skill">
      <div class="container">
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
        <div class="mc-ui-grid-item we-eva rate"><el-rate v-model="form.skill.value1" />评分</div>
        <div class="mc-ui-grid-item pskill-eva rate"><el-rate v-model="form.skill.value2" />评分</div>
        <div class="mc-ui-grid-item gzsl-eva rate"><el-rate v-model="form.skill.value3" />评分</div>
        <div class="mc-ui-grid-item xxnl-eva rate"><el-rate v-model="form.skill.value4" />评分</div>
        <div class="mc-ui-grid-item ksx-eva rate"><el-rate v-model="form.skill.value5" />评分</div>
        <div class="mc-ui-grid-item ybnl-eva rate"><el-rate v-model="form.skill.value6" />评分</div>
      </div>
    </el-form-item>
    <el-form-item label="结果意见：" prop="option">
      <el-radio label="1" v-model="form.option">建议录用</el-radio>
      <el-radio label="2" v-model="form.option">不予考虑</el-radio>
      <el-radio label="3" v-model="form.option">进入下一轮面试</el-radio>
      <el-radio label="4" v-model="form.option">列为候补</el-radio>
      <el-radio label="5" v-model="form.option">建议存档</el-radio>
      <el-radio label="6" v-model="form.option">推荐他用</el-radio>
    </el-form-item>
    <el-form-item label="评价:" prop="remark">
      <el-input v-model="form.remark"
                :autosize="{ minRows: 4, maxRows: 6 }"
                autosize
                type="textarea"
                placeholder="请输入评价" maxlength="500"></el-input>
    </el-form-item>
    <el-form-item label="亮点标签:" prop="shim">
      <el-tag
          v-for="tag in dynamicTags"
          :key="tag"
          class="mx-1"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="ml-1 w-20"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
      />
      <el-button v-else class="button-new-tag ml-1" size="small" @click="showInput">
        + New Tag
      </el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">

$cell-height:20px;
.container{
  text-align: center;
}
.mc-ui-grid-item {
  border: 1px solid #464646;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
}
.container {  display: grid;
  grid-template-columns: 0.5fr 1.5fr 0.8fr;
  grid-template-rows: 0.3fr 0.4fr 0.3fr 0.4fr 0.4fr 0.4fr;
  gap: 0px 0px;
  border:1px solid #8d8d8d;
  line-height: $cell-height;
  grid-auto-flow: row;
  grid-template-areas:
    "we we-desc we-eva"
    "pskill pskill-desc pskill-eva"
    "gzsl gzsl-desc gzsl-eva"
    "xxnl xxnl-desc xxnl-eva"
    "ksx ksx-desc ksx-eva"
    "ybnl ybnl-desc ybnl-eva"
    "edi-options edi-eva edi-eva";
}

.edi-options{
  label{
    width: 100%;
    margin-left: 20px;
  }
}
.rate{
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


.psk { grid-area: psk; padding-top:calc($cell-height*5); }

.edi { grid-area: edi;line-height:calc($cell-height*9); }

.we { grid-area: we;line-height:calc($cell-height*2); }

.pskill { grid-area: pskill; line-height:calc($cell-height*2);}

.gzsl { grid-area: gzsl;line-height:calc($cell-height*2); }

.xxnl { grid-area: xxnl;line-height:calc($cell-height*2); }

.ksx { grid-area: ksx;line-height:calc($cell-height*2); }

.ybnl { grid-area: ybnl;line-height:calc($cell-height*2); }

.we-desc { grid-area: we-desc; }

.pskill-desc { grid-area: pskill-desc; }

.gzsl-desc { grid-area: gzsl-desc; }

.xxnl-desc { grid-area: xxnl-desc; }

.ksx-desc { grid-area: ksx-desc; }

.ybnl-desc { grid-area: ybnl-desc; }

.we-eva { grid-area: we-eva; }

.pskill-eva { grid-area: pskill-eva; }

.gzsl-eva { grid-area: gzsl-eva; }

.xxnl-eva { grid-area: xxnl-eva; }

.ksx-eva { grid-area: ksx-eva; }

.ybnl-eva { grid-area: ybnl-eva; }

.edi-options { grid-area: edi-options; }

.edi-eva { grid-area: edi-eva;
  text-align: left;
  position: relative;
  padding-left: 20px;
  padding-top: 10px;
  .hr-writer{
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
  }
}
:deep(.el-tag){
  margin-right: 10px;
}
</style>