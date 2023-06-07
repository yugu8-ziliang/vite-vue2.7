import { defineStore } from "pinia";

import { title as _title, foldSidebar } from "@/config";

const getLocalStorage = key => {
  const value = localStorage.getItem(key);
  return value && isJson(value) ? JSON.parse(value) : false;
};

const { collapse = foldSidebar } = getLocalStorage("collapse");
const { title = _title } = getLocalStorage("title");

export const useSettingStore = defineStore("settings", {
  state: () => ({
    device: "desktop",
    collapse,
  }),
  getters: {
    getDevice: state => state.device,
    getCollapse: state => state.collapse,
    getTitle: state => state.title,
  },
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
    toggleCollapse() {
      this.collapse = !this.collapse;
      localStorage.setItem("collapse", `{"collapse":${this.collapse}}`);
    },
    toggleDevice(device) {
      this.updateState({ device });
    },
    openSideBar() {
      this.updateState({ collapse: false });
    },
    foldSideBar() {
      this.updateState({ collapse: true });
    },
    changeTitle(title) {
      this.updateState({ title });
    },
  },
});
