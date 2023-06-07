import request from "@/utils/request";

// 销售单管理-首页
export const sellInfo = data => {
  return request({
    type: "post",
    url: "/pc/order/sellInfo/",
    data: data,
  });
};
// 查看历史销售单
export const historySellOrder = data => {
  return request({
    type: "post",
    url: "/pc/order/historySellOrder/",
    data: data,
  });
};
// 销售单管理-销售单详情
export const sellInfoDetail = data => {
  return request({
    type: "post",
    url: "/pc/order/sellInfoDetail/",
    data: data,
  });
};
// 需求单-按客户查看
export const customerOrderBefore = data => {
  return request({
    type: "post",
    url: "/pc/order/customerOrderBefore/",
    data: data,
  });
};
// 需求单-需求单详情
export const orderBeforeDetails = data => {
  return request({
    type: "post",
    url: "/pc/order/orderBeforeDetails/",
    data: data,
  });
};
// 商品采购单首页
export const buyInfoList = data => {
  return request({
    type: "post",
    url: "/pc/order/buyInfo/",
    data: data,
  });
};
// 商品采购单自家生产
export const selfProduct = data => {
  return request({
    type: "post",
    url: "/pc/order/selfProduct/",
    data: data,
  });
};
