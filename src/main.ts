import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";
import ElementPlus from "element-plus";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";
import './assets/reset.scss'
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const vueApp = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  vueApp.component(key, component);
}
vueApp.use(router).use(ElementPlus, {
  locale: zhCn,
}).mount('#app')
