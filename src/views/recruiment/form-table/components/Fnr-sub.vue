<script setup lang="ts">
const formRef=ref(null)
 const form=reactive({
   finalResult:'',
   evaluationRank:'',
   evaluationSalaryScale:'',
   recommendedSalary:'',
   probationaryPeriod:'',
   becomingSalary:'',
   standard:'',
   remark:'',
 })
 const rules={
   finalResult:[
       {
         required: true,
         message: '请选择最终面试结果',
       }
   ],
   evaluationRank:[
       {
         required: true,
         message: '请选择职级评估',
       }
   ],
   evaluationSalaryScale:[
       {
         required: true,
         message: '请选择薪级评估',
       }
   ],
   recommendedSalary:[
       {
         required: true,
         message: '请填写试用期建议薪资',
       },
       {
         min: 1000,
         max: 100000000,
         message: '推荐薪资在 1000 到 100000000 之间',
       }
   ],
   probationaryPeriod:[
       {
         required: true,
         message: '请选择建议试用期',
       },
   ],
   becomingSalary:[
       {
         required: true,
         message: '请填写转正后薪资',
       },
       {
         min: 1000,
         max: 100000000,
         message: '转正后薪资在 1000 到 100000000 之间',
       }
   ]
 }

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
  <el-form :model="form" :rules="rules" ref="formRef">
    <el-form-item label-width="130px"  label="最终面试结果:" prop="finalResult">
      <el-radio label="1" v-model="form.finalResult">通过</el-radio>
      <el-radio label="2" v-model="form.finalResult">不通过</el-radio>
    </el-form-item>
    <el-row>
      <el-col span="12">
        <el-form-item label="职级评估:" label-width="130px"  prop="evaluationRank">
          <el-select v-model="form.evaluationRank">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label-width="130px" label="薪级评估:" prop="evaluationSalaryScale">
         <el-select v-model="form.evaluationSalaryScale">
           <el-option label="1" value="1"></el-option>
           <el-option label="2" value="2"></el-option>
         </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col span="12">
        <el-form-item label="试用期建议薪资:" label-width="130px"  prop="recommendedSalary">
          <el-input v-model="form.recommendedSalary" type="number"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label-width="150px" label="试用期建议:" prop="probationaryPeriod">
          <el-select v-model="form.probationaryPeriod">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col span="12">
        <el-form-item label="转正建议薪资:" label-width="130px"  prop="becomingSalary">
          <el-input v-model="form.becomingSalary" type="number"></el-input>
        </el-form-item>
      </el-col>
      <el-col span="12">
        <el-form-item label-width="150px" label="绩效标准:" prop="standard">
          <el-input v-model="form.standard"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-form-item style="margin-top: 20px" label-width="130px" label="备注:" prop="remark">
      <el-input v-model="form.remark"
                :autosize="{ minRows: 4, maxRows: 10 }"
                autosize
                type="textarea"
                placeholder="请输入，最多500字" maxlength="500"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss">

</style>