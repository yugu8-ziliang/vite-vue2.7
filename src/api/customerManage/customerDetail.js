import request from "@/utils/request";

// 客户详情--头部数据
export function custmorinfoTitle(data) {
  return request({
    url: "/pc/custmor/custmorinfoTitle/",
    type: "post",
    data: data,
  });
}

// 设置常用/取消常用
export function commonlyuse(data) {
  return request({
    url: "/pc/custmor/commonlyuse/",
    type: "post",
    data: data,
  });
}
// 设置屏蔽/取消屏蔽
export function custmorShield(data) {
  return request({
    url: "/pc/custmor/shield/",
    type: "post",
    data: data,
  });
}

// 查看、搜索 记一笔
export function custmorSeeNote(data) {
  return request({
    url: "/pc/custmor/seeNote/",
    type: "post",
    data: data,
  });
}
// 添加、修改 记一笔
export function custmorEditorNote(data) {
  return request({
    url: "/pc/custmor/editorNote/",
    type: "post",
    data: data,
  });
}
// 删除记一笔
export function custmorDelNote(data) {
  return request({
    url: "/pc/custmor/delNote/",
    type: "post",
    data: data,
  });
}
