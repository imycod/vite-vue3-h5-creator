<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" :key="$route.fullPath" v-if="route.meta.isKeepAlive" />
      </keep-alive>
    </transition>
    <transition>
      <component :is="Component" :key="$route.fullPath" v-if="!route.meta.isKeepAlive" />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
const route = useRoute();
</script>