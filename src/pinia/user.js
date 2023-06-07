import { defineStore } from "pinia";

import { getToken, removeToken, setToken } from "@/utils/token";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
  }),
  getters: { getToken: state => state.token },
  actions: {
    /**
     * @description 设置token
     * @param {*} token
     */
    setToken(token) {
      this.token = token;
      setToken(token);
    },
  },
});
