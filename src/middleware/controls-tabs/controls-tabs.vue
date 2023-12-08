<template>
    <el-tabs v-model="state.active" @tab-click="tabClick">
        <el-tab-pane v-for="tab in state.options" :label="tab.label" :name="tab.tabName">
            <component :data-key="tab.tabName" :is="tab.componentName" ref="componentRef" :state="tab.componentState"></component>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import useTab from "@/hooks/useTab.ts"

import {nextTick} from "vue"

const { state, initState,componentRef } = useTab()

const tabClick=(current)=>{
    const index=current.index
    const item = state.options[index]
    nextTick(()=>{
        componentRef.value[index].initState && componentRef.value[index].initState(item.data)
    })
}

function setState(newState) {
    console.log(newState.tabs);
    
    initState(newState)

    nextTick(()=>{
        tabClick({index:0})
    })
}


defineExpose({
    setState
})
</script>