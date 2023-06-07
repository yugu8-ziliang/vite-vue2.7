import { defineStore } from "pinia";

import { getToken, setToken, removeToken } from "@/utils/auth";

import {
  loginMain,
  loginSub,
  getInfo,
  accountSwitch,
} from "@/api/login";

import { resetRouter } from "@/router";

import { useTabStore } from "./tab";
import { usePermissionStore } from "./permission";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: getToken(),
    userInfo: {},
    roles: [],
    permissions: [],
  }),

  actions: {
    setToken(token) {
      this.token = getToken();
      setToken(token);
    },
    setUserInfo(data) {
      this.userInfo = data;
    },
    setRoles(roles) {
      this.roles = roles;
    },
    setPermissions(permissions) {
      this.permissions = permissions;
    },
    /**
     * @description: 登录
     * @param userInfo
     */
    login(userInfo) {
      const { phonenum, phonecode, password } = userInfo;

      return new Promise((resolve, reject) => {
        loginMain({
          phonenum: phonenum,
          phonecode: phonecode,
          password: password,
        })
          .then(({ data }) => {
            // const { data } = response;
            const { token, ...userInfo } = data;
            this.setToken(token);
            this.setUserInfo(userInfo);
            // commit("SET_TOKEN", data.token);
            // commit("SET_USERINFO", data);
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 切换账户
    accountSwitchLogin(userInfo) {
      return new Promise((resolve, reject) => {
        accountSwitch({ switchUserId: userInfo.userId })
          .then(({ data }) => {
            const { token } = data;

            const { personName, personHeadPhoto, type } = userInfo;

            const info = {
              personName,
              personHeadPhoto,
              usertype: userInfo.type,
              purchaseType: 1,
              token,
              isSetPayWord: 0,
            };

            this.setToken(token);
            this.setUserInfo(info);

            localStorage.setItem("userInfo", JSON.stringify(info));

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 副账户登录
    loginSub(userInfo) {
      const { phonenum, subPhoneNum, password } = userInfo;
      return new Promise((resolve, reject) => {
        loginSub({
          phoneNum: phonenum,
          subPhoneNum: subPhoneNum,
          password: password,
        })
          .then(({ data: [res] }) => {
            const { token, ...userInfo } = res;

            this.setToken(token);

            const { userName: personName, ...restInfo } = userInfo;

            const info = { personName, ...restInfo };

            this.setUserInfo(info);
            // commit("SET_USERINFO", data[0]);
            localStorage.setItem("userInfo", JSON.stringify(info));
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    // 获取个人信息
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        // getInfo().then(response => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        // commit("SET_USERINFO", userInfo);
        this.setUserInfo(userInfo);

        // if (response.data.roles && response.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        //     commit("SET_ROLES", response.data.roles);
        //     commit("SET_PERMISSIONS", response.data.permissions);
        // } else {
        // commit("SET_ROLES", ["ROLE_DEFAULT"]);
        this.setRoles(["ROLE_DEFAULT"]);
        // }
        resolve();
        // }).catch(error => {
        //     reject(error)
        // })
      });
    },
    // 退出登录
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        removeToken();
        resetRouter();
        localStorage.removeItem("userInfo");

        const tabStore = useTabStore();

        const permissionStore = usePermissionStore();

        tabStore.delAllViews();

        permissionStore.clearRoutes();

        // dispatch("tagsView/delAllViews", null, {
        //   root: true,
        // });
        // dispatch("permission/clearRouter", null, {
        //   root: true,
        // });

        resolve();
      });
    },
  },
});
