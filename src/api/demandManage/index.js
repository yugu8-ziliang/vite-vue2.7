import request from "@/utils/request";
//用户---订单信息
export function getUserOrderMsg(data) {
  return request({
    url: "/pc/order/customerOrderBefore/",
    type: "post",
    data: data,
  });
}
// /order/orderBeforeDetails/
//订单详情
export function getOrderDetail(data) {
  return request({
    url: "/pc/order/orderBeforeDetails/",
    type: "post",
    data: data,
  });
}

// 需求单-发出的需求、历史发送需求
export function alreadySendToOrderBefore(data) {
  return request({
    url: "/pc/order/alreadySendToOrderBefore/",
    type: "post",
    data: data,
  });
}
//保存草稿 /order/draftadd/
export function Draftadd(data) {
  return request({
    url: "/pc/order/draftadd/",
    type: "post",
    data: data,
  });
}
//按商品查看/order/receivedOrderBeforeSummary/
export function getGoodsOrderMsg(data) {
  return request({
    url: "/pc/order/receivedOrderBeforeSummary/",
    type: "post",
    data: data,
  });
}
///order/orderBeforeProductDetails/
export function getGoodsOrderDetails(data) {
  return request({
    url: "/pc/order/orderBeforeProductDetails/",
    type: "post",
    data: data,
  });
}
///order/hasSendOrderBefore/
export function getCheckSend(data) {
  return request({
    url: "/pc/order/hasSendOrderBefore/",
    type: "post",
    data: data,
  });
}
// /order/getcustomer/
export function getUser(data) {
  return request({
    url: "/pc/order/getcustomer/",
    type: "post",
    data: data,
  });
}
//需求单-保存的草稿
export function allDraftList(data) {
  return request({
    url: "/pc/order/allDraftList/",
    type: "post",
    data: data,
  });
}
//需求单-新建需求单-查看草稿箱-批量删除
export function deleteDrafts(data) {
  return request({
    url: "/pc/order/deleteDrafts/",
    type: "post",
    data: data,
  });
}
//需求单-新建需求单-确认发送
export function demandadd(data) {
  return request({
    url: "/pc/order/demandadd/",
    type: "post",
    data: data,
  });
}
//需求单-新建需求单-保存至草稿箱
export function draftadd(data) {
  return request({
    url: "/pc/order/draftadd/",
    type: "post",
    data: data,
  });
}
// 需求单-新建需求单-查看草稿箱
export function draftList(data) {
  return request({
    url: "/pc/order/draftList/",
    type: "post",
    data: data,
  });
}
// 需求单-按客户查看
export function customerOrderBefore(data) {
  return request({
    url: "/pc/order/customerOrderBefore/",
    type: "post",
    data: data,
  });
}
