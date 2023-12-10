<script setup lang="ts">
import {useValidator,useDynamicTag} from "./index"

const form=reactive({
  hrOpinion:'',
  hrAppraise:{
    value1:0,
    value2:0,
    value3:0,
    value4:0,
    value5:0,
    value6:0,
    value7:0,
    value8:0,
    value9:0,
    value10:0,
  },
  remark:'',
})
const validator = useValidator()
const rules={
  hrAppraise:[
      {
        required: true,
        message: '请选择面试要素',
        validator:validator.apprasiveValidate
      }
  ],
  hrOpinion:[
      {
        required: true,
        message: '请选择结果意见',
        validator:validator.optionValidate
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
        message: '评价字数在10-500之间',
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


// 表单提交

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

function initState() {
  alert('initState')
}
defineExpose({
  handleSubmit,
  initState
})
</script>

<template>
  <el-form :model="form" :rules="rules" ref="formRef" @submit.native.prevent>
    <el-form-item label="面试要素:" prop="hrAppraise">
      <div class="container">
        <div class="mc-ui-grid-item job-match">岗位匹配</div>
        <div class="mc-ui-grid-item job-exp">岗位经验</div>
        <div class="mc-ui-grid-item career-planning">职业规划匹配度</div>
        <div class="mc-ui-grid-item job-exp-desc desc">有5年岗位经验并且热爱岗位工作，且具备岗位要求的专业能力。</div>
        <div class="mc-ui-grid-item career-planning-desc desc">对岗位认知清晰，职业规划清晰且应聘岗位匹配。</div>
        <div class="mc-ui-grid-item job-exp-desc-eva rate"><el-rate v-model="form.hrAppraise.value1" />评分</div>
        <div class="mc-ui-grid-item career-planning-desc-eva rate"><el-rate v-model="form.hrAppraise.value2" />评分</div>
        <div class="mc-ui-grid-item personal-bg">
          个人背景
        </div>
        <div class="mc-ui-grid-item edu-bg">学历背景</div>
        <div class="mc-ui-grid-item edu-bg-desc desc">学历背景良好，具备一定学习能力。</div>
        <div class="mc-ui-grid-item edu-bg-desc-eva rate"><el-rate v-model="form.hrAppraise.value3" />评分</div>
        <div class="mc-ui-grid-item stable-bg">稳定性</div>
        <div class="mc-ui-grid-item stable-bg-desc desc">过往履历稳定性较好，综合考虑家庭因素，职业规划，通勤距离与通勤方式等，预判未来稳定性也可以。</div>
        <div class="mc-ui-grid-item stable-bg-desc-eva rate"><el-rate v-model="form.hrAppraise.value4" />评分</div>
        <div class="mc-ui-grid-item leaveing-ng-">离职原因</div>
        <div class="mc-ui-grid-item leaveing-bg-desc desc">离职原因合乎情理，无异常。</div>
        <div class="mc-ui-grid-item leaveing-bg-desc-eva rate"><el-rate v-model="form.hrAppraise.value5" />评分</div>
        <div class="mc-ui-grid-item job-hunting-bg">求职意愿</div>
        <div class="mc-ui-grid-item job-hunting-bg-desc desc">从事这一岗位的动力，来我司工作的动力，到我司服务的意愿程度。</div>
        <div class="mc-ui-grid-item job-hunting-bg-desc-eva rate"><el-rate v-model="form.hrAppraise.value6" />评分</div>
        <div class="mc-ui-grid-item cq">综合素质</div>
        <div class="mc-ui-grid-item cq-mbzx">目标感与执行力</div>
        <div class="mc-ui-grid-item cq-cynl">承压能力</div>
        <div class="mc-ui-grid-item cq-gtnl">沟通能力</div>
        <div class="mc-ui-grid-item cq-jzg">价值观</div>
        <div class="mc-ui-grid-item cq-mbzx-desc desc">目标感强，为了目标不轻易放弃，执行力强，不推诿。</div>
        <div class="mc-ui-grid-item cq-cynl-desc desc">耐心，坚韧，在遇到批评，指责，压力或受到冲击时，能够克制，容忍，理智的对待。</div>
        <div class="mc-ui-grid-item cq-gtnl-desc desc">善于倾听，清晰表达自己的观点，说服力强，善于交往。</div>
        <div class="mc-ui-grid-item cq-jzg-desc desc">认同创业文化，具有拼搏精神，团队合作意识，自驱力。</div>
        <div class="mc-ui-grid-item cq-cynl-desc-eva rate"><el-rate v-model="form.hrAppraise.value7" />评分</div>
        <div class="mc-ui-grid-item cq-gtnl-desc-eva rate"><el-rate v-model="form.hrAppraise.value8" />评分</div>
        <div class="mc-ui-grid-item cq-jzg-desc-eva rate"><el-rate v-model="form.hrAppraise.value9" />评分</div>
        <div class="mc-ui-grid-item cq-mbzx-desc-eva rate"><el-rate v-model="form.hrAppraise.value10" />评分</div>
      </div>
    </el-form-item>
    <el-form-item label="结果意见：" prop="hrOpinion">
      <el-radio label="1" v-model="form.hrOpinion">不复试</el-radio>
      <el-radio label="2" v-model="form.hrOpinion">复试</el-radio>
      <el-radio label="3" v-model="form.hrOpinion">列为候补</el-radio>
      <el-radio label="4" v-model="form.hrOpinion">建议存档</el-radio>
      <el-radio label="5" v-model="form.hrOpinion">推荐他用</el-radio>
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

.container {
  display: grid;
  grid-template-columns: 0.7fr 0.8fr 1.5fr 1fr;
  grid-template-rows: 1.4fr 1.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  border:1px solid #8d8d8d;
  line-height: $cell-height;
  grid-template-areas:
    "job-match job-exp job-exp-desc job-exp-desc-eva"
    "job-match career-planning career-planning-desc career-planning-desc-eva"
    "personal-bg edu-bg edu-bg-desc edu-bg-desc-eva"
    "personal-bg stable-bg stable-bg-desc stable-bg-desc-eva"
    "personal-bg leaveing-ng- leaveing-bg-desc leaveing-bg-desc-eva"
    "personal-bg job-hunting-bg job-hunting-bg-desc job-hunting-bg-desc-eva"
    "cq cq-mbzx cq-mbzx-desc cq-mbzx-desc-eva"
    "cq cq-cynl cq-cynl-desc cq-cynl-desc-eva"
    "cq cq-gtnl cq-gtnl-desc cq-gtnl-desc-eva"
    "cq cq-jzg cq-jzg-desc cq-jzg-desc-eva"
    "hr-opinion hr-options hr-eva hr-eva";
}
.container{
  text-align: center;
}
.mc-ui-grid-item {
  border: 1px solid #464646;
  text-align: center;
  font-size: 14px;
  box-sizing: border-box;
}
.hr-options{
  label{
    width: 100%;
    margin-left: 20px;
  }
}
.hr-eva{
  text-align: left;
  position: relative;
  .hr-writer{
    position: absolute;
    display: flex;
    bottom: 10px;
    right: 10px;
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

.hr-interview-elements { grid-area: hr-interview-elements; line-height:calc($cell-height*2); background: #b2e0fd  }

.mpooae { grid-area: mpooae; line-height:calc($cell-height*2); background: #b2e0fd }

.eva { grid-area: eva; line-height:calc($cell-height*2); background: #b2e0fd  }

.job-match { grid-area: job-match; line-height:calc($cell-height*4); }

.job-exp { grid-area: job-exp;line-height:calc($cell-height*2);  }

.career-planning { grid-area: career-planning; line-height:calc($cell-height*2);  }

.job-exp-desc { grid-area: job-exp-desc; }

.career-planning-desc { grid-area: career-planning-desc; }

.job-exp-desc-eva { grid-area: job-exp-desc-eva; }

.career-planning-desc-eva { grid-area: career-planning-desc-eva; }

.personal-bg { grid-area: personal-bg; line-height:calc($cell-height*8); }

.edu-bg { grid-area: edu-bg;line-height:calc($cell-height*2);  }

.edu-bg-desc { grid-area: edu-bg-desc; }

.edu-bg-desc-eva { grid-area: edu-bg-desc-eva; }

.stable-bg { grid-area: stable-bg;line-height:calc($cell-height*2);  }

.stable-bg-desc { grid-area: stable-bg-desc; }

.stable-bg-desc-eva { grid-area: stable-bg-desc-eva; }

.leaveing-ng- { grid-area: leaveing-ng-; line-height:calc($cell-height*2);  }

.leaveing-bg-desc { grid-area: leaveing-bg-desc; }

.leaveing-bg-desc-eva { grid-area: leaveing-bg-desc-eva; }

.job-hunting-bg { grid-area: job-hunting-bg;line-height:calc($cell-height*2);  }

.job-hunting-bg-desc { grid-area: job-hunting-bg-desc; }

.job-hunting-bg-desc-eva { grid-area: job-hunting-bg-desc-eva; }

.cq { grid-area: cq; line-height:calc($cell-height*8); }

.cq-mbzx { grid-area: cq-mbzx; line-height:calc($cell-height*2); }

.cq-cynl { grid-area: cq-cynl;line-height:calc($cell-height*2);  }

.cq-gtnl { grid-area: cq-gtnl; line-height:calc($cell-height*2); }

.cq-jzg { grid-area: cq-jzg;line-height:calc($cell-height*2);  }

.cq-mbzx-desc { grid-area: cq-mbzx-desc; }

.cq-cynl-desc { grid-area: cq-cynl-desc; }

.cq-gtnl-desc { grid-area: cq-gtnl-desc; }

.cq-jzg-desc { grid-area: cq-jzg-desc; }

.cq-cynl-desc-eva { grid-area: cq-cynl-desc-eva; }

.cq-gtnl-desc-eva { grid-area: cq-gtnl-desc-eva; }

.cq-jzg-desc-eva { grid-area: cq-jzg-desc-eva; }

.cq-mbzx-desc-eva { grid-area: cq-mbzx-desc-eva; }

.hr-opinion { grid-area: hr-opinion; line-height:calc($cell-height*8); }

.hr-options { grid-area: hr-options; }

.hr-eva { grid-area: hr-eva; }

:deep(.el-tag){
  margin-right: 10px;
}
</style>