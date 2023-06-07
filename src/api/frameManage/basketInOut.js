// 筐子进出明细  退筐退款管理
import request from "@/utils/request";

// 筐子进出明细
export function basketenteredDetail(data) {
  return request({
    url: "/pc/basket/basketEnteredDetail/",
    type: "post",
    data: data,
  });
}

// 退筐退款列表(我收到的和我发出的)
export function basketreturnList(data) {
  return request({
    url: "/pc/basket/basketReturnList/",
    type: "post",
    data: data,
  });
}

// 退筐退款-选择卖家订单
export function basketReturnOrderList(data) {
  return request({
    url: "/pc/basket/basketReturnOrderList/",
    type: "post",
    data: data,
  });
}

// 退筐退款-新建退筐退款（含修改）
export function createOrderBasketReturn(data) {
  return request({
    url: "/pc/basket/createOrderBasketReturn/",
    type: "post",
    data: data,
  });
}
// 退筐退款-未到付款步骤的取消、修改订单
export function cancelBasketReturn(data) {
  return request({
    url: "/pc/basket/cancelBasketReturn/",
    type: "post",
    data: data,
  });
}

// 筐子购入单详情
export function buyBasketOrderDetail(data) {
  return request({
    url: "/pc/basket/buyBasketOrderDetail/",
    type: "post",
    data: data,
  });
}
// 筐子售出单详情
export function sellBasketOrderDetail(data) {
  return request({
    url: "/pc/basket/sellBasketOrderDetail/",
    type: "post",
    data: data,
  });
}
// 报失详情、报溢详情
export function overflowDetails(data) {
  return request({
    url: "/pc/basket/overflowDetails/",
    type: "post",
    data: data,
  });
}
// 报废详情
export function orderBasketScrapDetails(data) {
  return request({
    url: "/pc/basket/orderBasketScrapDetails/",
    type: "post",
    data: data,
  });
}
// 腾空筐子详情
export function emptyBasketPcDetails(data) {
  return request({
    url: "/pc/basket/emptyBasketPcDetails/",
    type: "post",
    data: data,
  });
}
// 自购筐子详情
export function userBuyMySelfDetail(data) {
  return request({
    url: "/pc/basket/userBuyMySelfDetail/",
    type: "post",
    data: data,
  });
}
// 获取退入筐子/退还筐子订单详情
export function basketReturnDetail(data) {
  return request({
    url: "/pc/basket/basketReturnDetail/",
    type: "post",
    data: data,
  });
}
// 查看暂无可退数量、金额列表
export function OrderReturnBasketList(data) {
  return request({
    url: "/pc/basket/OrderReturnBasketList/",
    type: "post",
    data: data,
  });
}
