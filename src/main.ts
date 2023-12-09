import { createApp } from "vue";

import router from "./routers";
import store from "./stores";

import "./style.css";
import App from "./App.vue";

createApp(App).use(store).use(router).mount("#app");
