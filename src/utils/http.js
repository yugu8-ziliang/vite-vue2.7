import { useUserStore } from "@/store/user";
import { getToken, removeToken, setToken } from "@/utils/token";

import qs from "qs";
import router from "@/router";
import { isArray } from "@/utils/validate";
import {
  baseURL,
  contentType,
  messageName,
  requestTimeout,
  statusName,
  successCode,
} from "@/config";

import axios from "axios";

let loadingInstance;

const CODE_MESSAGE = {
  401: "认证失败，无法访问系统资源",
  403: "当前操作没有权限",
  404: "访问资源不存在",
  default: "系统未知错误，请反馈给管理员",
};

/**
 * axios响应拦截器
 * @param data response数据
 * @param status HTTP status
 * @param statusText HTTP status text
 * @returns {Promise<*|*>}
 */
const handleData = async ({ data, status = 0, statusText }) => {
  if (loadingInstance) loadingInstance.close();
  // 若data.code存在，覆盖默认code
  let code = data && data[statusName] ? data[statusName] : status;
  // 若code属于操作正常code，则code修正为200
  if ([...successCode].indexOf(code) + 1) code = 200;
  switch (code) {
    case 200:
      // 不管成功与否都有相应的数据格式
      return data;
    case 401:
      store
        .dispatch("user/resetAll")
        .then(() =>
          router.push({ path: "/login", replace: true }).then(() => {})
        );
      break;
    case 403:
      router.push({ path: "/403" }).then(() => {});
      break;
  }
  // 异常处理
  // 若data.msg存在，覆盖默认提醒消息
  const errMsg = `${
    data && data[messageName]
      ? data[messageName]
      : CODE_MESSAGE[code]
      ? CODE_MESSAGE[code]
      : statusText
  }`;
  Vue.prototype.$baseMessage(errMsg, "error", "vab-hey-message-error");
  // 是否添加错误日志(与errorHandler钩子触发逻辑一致)
  //   if (needErrorLog())
  //     addErrorLog({ message: errMsg, stack: data, isRequest: true });
  return Promise.reject(data);
};

/**
 * @description axios初始化
 */
const instance = axios.create({
  baseURL,
  timeout: requestTimeout,
  headers: {
    "Content-Type": contentType,
  },
});

/**
 * @description axios请求拦截器
 */
instance.interceptors.request.use(
  config => {
    const isToken = (config.headers || {}).isToken === false;
    const { token } = useUserStore();

    // FIXME: isToken的逻辑
    if (token && !isToken) config.headers["Authorization"] = `${token}`;

    if (
      config.data &&
      config.headers["Content-Type"] ===
        "application/x-www-form-urlencoded;charset=UTF-8"
    )
      config.data = qs.stringify(config.data);
    if (debounce.some(item => config.url.includes(item)))
      loadingInstance = Vue.prototype.$baseLoading();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

/**
 * @description axios响应拦截器
 */
instance.interceptors.response.use(
  response => handleData(response),
  error => {
    const { response = {} } = error;
    return handleData(response);
  }
);

export default instance;
