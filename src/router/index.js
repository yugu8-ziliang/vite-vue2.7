import Vue from "vue";
import Router, { RouterView } from "vue-router";
// import {createR}
import Layout from "@/layout/index.vue";

const { isHashRouterMode } = require("../config");

Vue.use(Router);

// 解决导航菜单的时候，重复点击报错的问题
// https://my.oschina.net/u/4256357/blog/4304073
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

export const constantRoutes = [
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/login"),
    hidden: true,
  },
  // {
  //   path: "/",
  //   component: Layout,
  //   redirect: "/index",
  //   meta: {
  //     breadcrumb: false,
  //   },
  //   children: [
  //     {
  //       path: "index",
  //       name: "index",
  //       component: () => import("@/views/home"),
  //       meta: {
  //         title: "首页",
  //         icon: "homePage",
  //         affix: true,
  //       },
  //     },
  //   ],
  // },
  {
    path: "/",
    component: () => import("@/views/test/index.vue"),
  },
];

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default new Router({
  mode: isHashRouterMode ? "hash" : "history",
  routes: constantRoutes,
});
