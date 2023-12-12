<template>
    <el-row>
        <el-col :span="12">
            <div style="position: fixed;display: flex;">
                <el-input v-model="inputValue"></el-input>
                <el-button type="primary" @click="search">搜索</el-button>
            </div>
        </el-col>

        <el-col :span="12">
            <div>
                B区域
                <ul ref="scrollRef" style="height: 100vh;border: 1px solid #000;overflow-y: scroll;">
                    <li style="height:40px;line-height: 40px;cursor: pointer; border: 1px solid #000;" v-for="n in nums"
                        @click="() => router.push('/')">{{ n }} - 点击切换路由，1.路由必须keepAlive 2.引用useCacheScroll</li>
                </ul>
            </div>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const inputValue = ref('')
const router = useRouter()
const route = useRoute()
const { toTop, scrollRef } = useCacheScroll(route.path)

let nums = ref(Array.from({ length: 50 }).map((_, i) => i))

function search() {
    nums.value = [...nums.value, ...Array.from({ length: 100 }).map((_, i) => i)]
    toTop()
}
</script>

<style  lang="scss">
body {
    overflow: hidden;
}
</style>