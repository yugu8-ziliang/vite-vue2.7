import request from "@/utils/request";

//  资金收支明细
export function financialDetails(data) {
  return request({
    url: "/pc/financial/financialDetails/",
    type: "post",
    data: data,
  });
}
//  资金统计
export function moneyStatistics(data) {
  return request({
    url: "/pc/financial/moneyStatistics/",
    type: "post",
    data: data,
  });
}
//  待收款客户列表
export function userCollectionList(data) {
  return request({
    url: "/pc/financial/userCollectionList/",
    type: "post",
    data: data,
  });
}
// 订单未收
export function uncollectedOrder(data) {
  return request({
    url: "/pc/financial/uncollectedOrder/",
    type: "post",
    data: data,
  });
}
// 订单未付
export function orderUnpaid(data) {
  return request({
    url: "/pc/financial/orderUnpaid/",
    type: "post",
    data: data,
  });
}
// 订单未付--客户列表
export function orderUnpaidCustmorList(data) {
  return request({
    url: "/pc/financial/orderUnpaidCustmorList/",
    type: "post",
    data: data,
  });
}
// 订单未付--订单列表
export function orderUnpaidOrderList(data) {
  return request({
    url: "/pc/financial/orderUnpaidOrderList/",
    type: "post",
    data: data,
  });
}
// 在途订单查询
export function payVerify(data) {
  return request({
    url: "/pc/financial/payVerify/",
    type: "post",
    data: data,
  });
}
// 提醒收款
export function remindCollect(data) {
  return request({
    url: "/pc/transaction/remindCollect/",
    type: "post",
    data: data,
  });
}
// 财务管理-往来款、经营往来款
export function businessPayments(data) {
  return request({
    url: "/pc/financial/businessPayments/",
    type: "post",
    data: data,
  });
}
// 同意收付款
export function agreeCollection(data) {
  return request({
    url: "/pc/financial/agreeCollection/",
    type: "post",
    data: data,
  });
}

// 订单收款详情
export function userCollectionDetail(data) {
  return request({
    url: "/pc/financial/userCollectionDetail/",
    type: "post",
    data: data,
  });
}
// 订单操作（平台）
export function refusedOrder(data) {
  return request({
    url: "/pc/financial/refusedOrder/",
    type: "post",
    data: data,
  });
}
// 订单已收款/已付款详情
export function userReceivedDetail(data) {
  return request({
    url: "/pc/financial/userReceivedDetail/",
    type: "post",
    data: data,
  });
}
