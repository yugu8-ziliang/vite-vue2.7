import { defineStore } from "pinia";

const getLocalStorage = key => {
  const value = localStorage.getItem(key);
  return value && isJson(value) ? JSON.parse(value) : false;
};

// 是否折叠
const { collapse = false } = getLocalStorage("collapse");

export const useAppStore = defineStore("app", {
  // 其他配置...
  state: () => ({
    screenHeight: 0,
    collapse,
    device: "desktop",
  }),

  actions: {
    updateState(obj) {
      Object.getOwnPropertyNames(obj).forEach(key => {
        // eslint-disable-next-line
        this[key] = obj[key];
        localStorage.setItem(
          key,
          typeof obj[key] == "string"
            ? `{"${key}":"${obj[key]}"}`
            : `{"${key}":${obj[key]}}`
        );
      });
    },
    toggleSideBar() {
      this.collapse = !this.collapse;
      localStorage.setItem("collapse", `{"collapse":${this.collapse}}`);
    },
    openSideBar() {
      this.updateState({ collapse: false });
    },
    closeSideBar() {
      this.updateState({ collapse: true });
    },
    setDevice(device) {
      this.devive = device;
    },
    setScreenHeight(H) {
      this.screenHeight = H;
    },
  },
});
