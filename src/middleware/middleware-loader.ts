/**
 * @Author: yangling
 * @Description: 全局组件引用管理
 */
import { App } from 'vue';
import { defineAsyncComponent, AsyncComponentLoader } from 'vue';

const componentss = import.meta.glob('./**/*.vue');

export default {
	install(app: App) {
		for (let [key, value] of Object.entries(componentss)) {
			let name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
			app.component(name, defineAsyncComponent(value as AsyncComponentLoader));
		}
	},
};
