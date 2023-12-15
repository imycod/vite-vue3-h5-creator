<template>
    <div class="form-container">
        <div class="header">
            <h2>面试评估</h2>
            <div class="header-bottom">
                <div class="name">
                    <span>姓名:</span>
                    <span class="text">张三</span>
                </div>
                <div class="name">
                    <span>应聘部门:</span>
                    <span class="text">研发部</span>
                </div>
                <div class="name">
                    <span>应聘岗位:</span>
                    <span class="text">JAVA开发</span>
                </div>
            </div>
        </div>
        <Hr @edit="handleEdit('hr')">
        </Hr>
        <Edo @edit="handleEdit('yrbm')"></Edo>
        <Ftr @edit="handleEdit('hr-opt')" v-if="state.isAddFinalEva"></Ftr>
        <Fnr @edit="handleEdit('hr-final')"></Fnr>
    </div>
    <controls-dialog ref="controlsDialogRef"></controls-dialog>
</template>

<script setup lang="ts">
import Hr from "./hr.vue"
import Edo from "./edo.vue"
import Ftr from "./ftr.vue"
import Fnr from "./fnr.vue"

import EdoSub from "./edu-sub.vue";
import FnrSub from "./Fnr-sub.vue";
import FtrSub from "./ftr-sub.vue";
import HrSub from "./hr-sub.vue"
import { onMounted } from "vue";

const state=reactive({
    isAddFinalEva:false
})

const controlsDialogRef = ref(null)


function handleEdit(type) {
    switch (type) {
        case 'hr':
            controlsDialogRef.value.setState({
                visible: true,
                title: 'HR意见',
                componentName: HrSub
            })
            break;
        case 'yrbm':
            controlsDialogRef.value.setState({
                visible: true,
                title: '用人部门意见',
                componentName: EdoSub
            })
            break;
        case 'hr-opt':
            controlsDialogRef.value.setState({
                visible: true,
                title: '终试意见',
                componentName: FtrSub
            })
            break;
        case 'hr-final':
            controlsDialogRef.value.setState({
                visible: true,
                title: '面试结果',
                componentName: FnrSub
            })
            break;

        default:
            break;
    }
}

const setState = (newState) => {
    Object.assign(state, newState)
}
onMounted(()=>{
    alert('onMounted')
})
defineExpose({
    setState
})
</script>

<style scoped lang="scss">
.form-container {
    .header {
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-family: "宋体";
        }

        &-bottom {
            margin-top: 10px;
            display: flex;
            justify-content: space-around;
            width: 100%;

            .text {
                margin-left: 4px;
            }
        }
    }
}
</style>
