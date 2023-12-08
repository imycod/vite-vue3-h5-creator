<script setup lang="ts">
import { ref, onMounted } from "vue"
// import HockeyTeamList from "./components/HockeyTeamList.vue"
const people = [
    {
        name: 'Calvin Hawkins',
        email: 'calvin.hawkins@example.com',
        image:
            'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@example.com',
        image:
            'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Ted Fox',
        email: 'ted.fox@example.com',
        image:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
]

const visible = ref(false)
</script>

<template>
    <div>
        <div class="px-5 bd">
            <HockeyTeamList :teams="people"></HockeyTeamList>

            <div class="sm:col-span-3">
                <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                <div class="mt-2">
                    <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset 
                  focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                    </select>
                </div>
            </div>

        <fieldset>
            <legend class="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                <p class="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                <div class="mt-6 space-y-6">
                    <div class="flex items-center gap-x-3">
                        <input id="push-everything" name="push-notifications" type="radio"
                            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        <label for="push-everything"
                            class="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                </div>
                <div class="flex items-center gap-x-3">
                    <input id="push-email" name="push-notifications" type="radio"
                        class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                    <label for="push-email" class="block text-sm font-medium leading-6 text-gray-900">Same as
                        email</label>
                </div>
                <div class="flex items-center gap-x-3">
                    <input id="push-nothing" name="push-notifications" type="radio"
                            class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
                        <label for="push-nothing" class="block text-sm font-medium leading-6 text-gray-900">No push
                            notifications</label>
                    </div>
                </div>
            </fieldset>

            <!-- <el-button type="primary">按需导入 element button</el-button> -->
            <!-- <el-dialog v-model="visible">
                        111
                      </el-dialog> -->

            <!-- <van-button type="primary">按需导入 vant button</van-button>  -->
            <!-- <van-image width="100" height="100" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" /> -->

            <p class="font">375设计稿 测试字体是否被转化成vw</p>

            <!-- <button class="py-2 px-4 bg-blue-500
                text-white 
                font-semibold 
                rounded-lg 
                shadow-md 
                hover:bg-blue-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-400 
                focus:ring-opacity-75">测试</button> -->
        </div>
        <div class="container ig-container"></div>
        <!-- <div class="card"></div> -->
    </div>
</template>

<style lang="scss" scoped>
.font {
    font-size: 22px;
}

.container {
    width: 375px; // 375px == 100vw == 100%
    height: 200px;
    background-color: red;
}

// 大屏-平板以上应用此样式不转换
@media only screen and (min-width: 768px) {
    .ig-container {
        width: 375px;
        height: 200px;
        background-color: red;
    }
}
</style>
