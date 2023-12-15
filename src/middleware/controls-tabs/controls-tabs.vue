<template>
    <el-tabs v-model="state.active" @tab-click="tabClick">
        <el-tab-pane v-for="tab in state.options" :label="tab.label" :name="tab.tabName">
            <component :key="tab.tabName" v-if="destroy && (state.active === tab.tabName)" :data="tab.data"
                :data-key="tab.tabName" :is="tab.componentName" ref="componentRef"></component>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import useTab from "@/hooks/useTab.ts"

import { nextTick } from "vue"

const props = defineProps({
    destroy: {
        type: Boolean,
        default: true,
    },
});

const { state, initState, componentRef } = useTab()

const componentRefs = ref<any[]>([])

const tabClick = (current) => {
    const index = current.index
    const item = state.options[index]

    // console.log('/controls-tabls componentRef.value',componentRef.value);
    //  v-if="destroy && (state.active === tab.tabName)"  这个之后 就只有componentRef.value[0]，因为只会渲染当前项
    // nextTick(()=>{
    //     componentRef.value && componentRef.value[0]?.initState && componentRef.value[0].initState(item.data)
    // })
    setTimeout(() => {
        componentRef.value && componentRef.value[0]?.initState && componentRef.value[0].initState(item.data)
    }, 100)
}

function addRef(itemRef: any) {
    componentRefs.push(itemRef);
}

function setState(newState) {
    console.log(newState.tabs);

    initState(newState)

    nextTick(() => {
        tabClick({ index: 0 })
    })
}


defineExpose({
    setState
})
</script>