<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition :name="transitionName" mode="out-in">
                <keep-alive>
                    <component :is="Component" :key="$route.fullPath" style="width: 100%;" v-if="route.meta.isKeepAlive" />
                </keep-alive>
            </transition>
            <transition :name="transitionName" mode="out-in">
                <component :is="Component" :key="$route.fullPath" style="width: 100%;" v-if="!route.meta.isKeepAlive" />
            </transition>
        </router-view>
    </div>
</template>

<script setup lang="ts">
import { useThemeConfig } from "@/stores/themeConfig"

const route = useRoute();

const { themeConfig } = storeToRefs(useThemeConfig());

const transitionName = computed(() => themeConfig.value.animation);

</script>