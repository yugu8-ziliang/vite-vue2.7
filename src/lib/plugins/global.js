// import store from "@/store";
import { useTabStore } from "@/store/tab.js";
// TODO:store替换为pinia

import Vue from "vue";

import { Message } from "element-ui";

import {
  handleTree,
  filterObj,
  deepClone,
  download,
} from "../../utils/common.js";

const $toast = function (type, msg) {
  Message({
    message: msg,
    type: type,
    offset: 120,
    duration: 1500,
  });
};

export function closePage(targetRoutePath, query) {
  let view = vm.$route;
  const tabStore = useTabStore();
  tabStore.delView(view).then(({ visitedViews }) => {
    if (targetRoutePath) {
      vm.$router.push({ path: targetRoutePath, query: query });
    } else {
      const latestView = visitedViews.slice(-1)[0];
      if (latestView) {
        vm.$router.push(latestView.fullPath + "&ts=123");
      } else {
        vm.$router.push("/");
      }
    }
  });
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 * @param {*} rootId 根Id 默认 0
 */
Vue.prototype.handleTree = handleTree;
/**
 * 验证权限
 * @param {*} values 权限字符数组
 */
Vue.prototype.hasPermi = values => {
  const tabStore = useTabStore();
  const permissions = tabStore.permissions;
  return permissions.some(permission => {
    return permission === "*:*:*" || values.includes(permission);
  });
};
/**
 * 过滤对象
 * @param {*} obj [过滤前数据]
 * @param {*} arr [过滤条件，要求为数组]
 */
Vue.prototype.filterObj = filterObj;
/**
 * 深度克隆
 */
Vue.prototype.deepClone = deepClone;

/**
 * 关闭当前页
 * @param {*} targetRoutePath 返回指定的路由路径
 */

Vue.prototype.$closePage = closePage;
// Vue.provide("closePage", 1);
/**
 * 刷新当前页
 */
Vue.prototype.$refreshPage = () => {
  let view = vm.$route;
  const tabStore = useTabStore();
  tabStore.delCachedView(view).then(() => {
    const { fullPath } = view;
    vm.$nextTick(() => {
      vm.$router.replace({
        path: "/redirect" + fullPath,
      });
    });
  });
};
/**
 * 修改当前标签页名称
 */
Vue.prototype.$editPageName = name => {
  const tabStore = useTabStore();
  let view = vm.$route;
  view.meta.title = name;
  view = Object.assign(
    {
      title: name,
    },
    view
  );
  tabStore.updateVisitedView(view);
};
/**
 * 获取字典数据
 * @param {*} code 字典code
 */
// Vue.prototype.getDicts = getDicts;
/**
 * 获取字典label
 * @param {*} data 字典数据
 * @param {*} value 字典值
 */
Vue.prototype.formatDict = (datas, value) => {
  var actions = [];
  Object.keys(datas).some(key => {
    if (String(datas[key].dictValue) === "" + String(value)) {
      actions.push(datas[key].dictLabel);
      return true;
    }
  });
  return actions.join("");
};
/**
 * 获取字典默认值
 * @param {*} datas 字典数据
 */
Vue.prototype.selectDictDefault = datas => {
  var actions = [];
  Object.keys(datas).some(key => {
    if (datas[key].is_default === true) {
      actions.push(datas[key].dictValue);
      return true;
    }
  });
  if (!actions[0] && datas[0]) {
    actions.push(datas[0].dictValue);
  }
  return actions.join("");
};
/**
 * 格式化查询参数
 * @param {*} data 搜索表单对象
 * @param {*} config 搜索配置对象
 */
Vue.prototype.queryFormat = (data, config) => {
  let paging = filterObj(config, ["pageNum", "pageSize"]);
  for (var key in data) {
    if (key == "daterange" && data[key].length > 0) {
      data = Object.assign(data, {
        as: JSON.stringify({
          create_datetime__range: data[key],
        }),
      });
      delete data.daterange;
    }
  }
  return Object.assign(paging, data);
};
/**
 * 成功提示
 */
Vue.prototype.$success = msg => {
  $toast("success", msg);
};
/**
 * 失败提示
 */
Vue.prototype.$error = msg => {
  $toast("error", msg);
};
/**
 * 普通提示
 */
Vue.prototype.$info = msg => {
  $toast("info", msg);
};
/**
 * 警告提示
 */
Vue.prototype.$warning = msg => {
  $toast("warning", msg);
};
// 通用下载方法
Vue.prototype.download = download;

// object -> form-data

Vue.prototype.$useFormData = object => {
  // 创建
  const form = new FormData();
  // 循环
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];

      // 数组
      if (Array.isArray(value)) {
        // 空数组
        if (value.length === 0) {
          form.append(key, JSON.stringify(value));
          continue;
        }

        if (value.every(_ => _ instanceof File)) {
          for (let index = 0; index < value.length; index++) {
            const file = value[index];
            form.append(key, file);
          }
        } else {
          form.append(key, JSON.stringify(value));
          // form.append(key, value);
        }
      } else if (
        // 对象
        Object.prototype.toString.call(value) === "[object Object]"
      ) {
        // form.append(key, JSON.stringify(value));
        form.append(key, JSON.stringify(value));
      } else {
        {
          // 普通类型
          form.append(key, value);
        }
      }
    }
  }
  return form;
};
