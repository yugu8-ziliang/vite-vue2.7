import Progress from "nprogress";
import "nprogress/nprogress.css";

import getPageTitle from "@/utils/pageTitle";
import { toLoginRoute } from "@/utils/routes";

import { useUserStore } from "@/store/user";

const { routesWhiteList } = require("@/config");

import router from "./";

export function setupRouter() {
  Progress.configure({
    easing: "ease",
    speed: 500,
    trickleSpeed: 200,
    showSpinner: false,
  });
  router.onReady(() => {
    console.log("=>", "router is ready");
    router.beforeEach((to, from, next) => {
      const { token } = useUserStore();

      if (token) {
        if (to.path === "/login") {
          next({
            path: "/",
          });
          Progress.done();
        }
      } else {
        if (routesWhiteList.includes(to.path)) {
          next({ path: to.path, replace: true });
        } else next(toLoginRoute(to.path));
      }
    });
    router.afterEach(to => {
      document.title = getPageTitle(to.meta.title);
      if (Progress.status) Progress.done();
    });
  });
}

// TODO:暂定
setupRouter();
