import { createApp } from "vue";

import router from "./routers";
import store from "./stores";

import middlewareComps from "./middleware/middleware-loader.ts";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);


app.use(middlewareComps).use(store).use(router).mount("#app");

// import notification from "@/hooks/useNotice.ts";
// 全局配置
// app.config.globalProperties.$notice = notification

// import {isString} from "@/utils/typeof"
// const app = document.querySelector<HTMLDivElement>("#app")!;
// let num = 5
// app?.innerHTML=isString(num.toString()) ? 'XXX' : 'aaa'


// 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