import { defineStore } from "pinia";

import { constantRoutes } from "@/router";

export const usePermissionStore = defineStore("permission", {
  state: () => ({
    routes: constantRoutes,
  }),

  actions: {
    setRotes(rotes) {
      this.routes = routes;
    },
  },
});
