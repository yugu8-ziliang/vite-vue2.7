import request from "@/utils/request";
// 历史配置列表
export function gethistorycostlist(data) {
  return request({
    url: "/pc/costUnfixd/gethistorycostlist/",
    type: "post",
    data: data,
  });
}
// 历史配置详情
export function costhistorydetails(data) {
  return request({
    url: "/pc/costUnfixd/costhistorydetails/",
    type: "post",
    data: data,
  });
}
//固定成本列表
export function getList(data) {
  return request({
    url: "/pc/costUnfixd/fixedcostlist/",
    type: "post",
    data: data,
  });
}
//非固定成本历史配置列表
export function getFloatingHistory(data) {
  return request({
    url: "/pc/costUnfixd/historyConfig/",
    type: "post",
    data: data,
  });
}

export function setcostinfo(data) {
  return request({
    url: "/pc/costUnfixd/setcostinfo/",
    type: "post",
    data: data,
  });
}

//非固定成本历史配置详情
export function getFloatingHistoryDetail(data) {
  return request({
    url: "/pc/costUnfixd/historyConfigDetail/",
    type: "post",
    data: data,
  });
}
export function getCostunfixd(data) {
  return request({
    url: "/pc/costUnfixd/costunfixd/",
    type: "post",
    data: data,
  });
}
// 非固定成本配置(批量和单月)
export function batchUnfixd(data) {
  return request({
    url: "/pc/costUnfixd/batchUnfixd/",
    type: "post",
    data: data,
  });
}
// 非固定成本历史配置详情 or 获取当月配置
export function historyConfigDetail(data) {
  return request({
    url: "/pc/costUnfixd/historyConfigDetail/",
    type: "post",
    data: data,
  });
}
