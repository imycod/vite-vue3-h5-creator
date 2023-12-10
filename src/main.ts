import { createApp } from "vue";
import router from "./routers";
import store from "./stores";

// import notification from "@/hooks/useNotice.ts";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

// 全局配置
// app.config.globalProperties.$notice = notification

app.use(store).use(router).mount("#app");

// import {isString} from "@/utils/typeof"
// const app = document.querySelector<HTMLDivElement>("#app")!;
// let num = 5
// app?.innerHTML=isString(num.toString()) ? 'XXX' : 'aaa'
