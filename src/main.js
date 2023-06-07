import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import { lib as libProvider } from "@/lib/plugins/base";

import App from "./App.vue";
import router from "./router";

import "./router/permission";
import "./lib";

// 虚拟模块注册
import { useModules } from "virtual:modules";
useModules();

Vue.use(PiniaVuePlugin);

const pinia = createPinia();

new Vue({
  el: "#app",
  router,
  pinia,
  render: h => h(App),
  provide: libProvider,
});
