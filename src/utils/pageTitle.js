// import pinia from "@/store";
const { titleSeparator } = require("@/config");
// TODO:
// import { useSettingsStore } from "@/store/setting";

/**
 * @description 设置标题
 * @param pageTitle
 * @returns {string}
 */
export default function getPageTitle(pageTitle) {
  // const { getTitle } = useSettingsStore(pinia);
  let newTitles = [];
  // if (pageTitle) newTitles.push(pageTitle);
  if (getTitle) newTitles.push(getTitle);
  return newTitles.join(titleSeparator);
}
