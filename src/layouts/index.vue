<template>
    <component :is="layouts[themeConfig.layout]" />
</template>

<script setup lang="ts">
import { onBeforeMount, onUnmounted, defineAsyncComponent } from 'vue';
import { storeToRefs } from 'pinia';
import { useThemeConfig } from '@/stores/themeConfig.ts';

const storesThemeConfig = useThemeConfig();
const { themeConfig } = storeToRefs(storesThemeConfig)
// 引入组件
const layouts: any = {
    defaults: defineAsyncComponent(() => import('@/layouts/main.vue')),
};
</script>