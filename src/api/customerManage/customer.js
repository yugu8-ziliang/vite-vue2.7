import request from "@/utils/request";

// 客户管理-手机号添加好友
export function addFriends(data) {
  return request({
    url: "/pc/custmor/addFriends/",
    type: "post",
    data: data,
  });
}
// 添加好友---手机号搜索
export function searchFriends(data) {
  return request({
    url: "/pc/custmor/searchFriends/",
    type: "post",
    data: data,
  });
}

// 客户详情-草稿箱删除
export function delateDraftBox(data) {
  return request({
    url: "/pc/order/delateDraftBox/",
    type: "post",
    data: data,
  });
}
// 客户详情-需求草稿箱列表
export function draftList(data) {
  return request({
    url: "/pc/order/draftList/",
    type: "post",
    data: data,
  });
}
// 客户详情-转账、记账单
export function custmorTransfer(data) {
  return request({
    url: "/pc/custmor/custmorTransfer/",
    type: "post",
    data: data,
  });
}
// 客户详情-销售草稿箱列表
export function sellOrderDraftList(data) {
  return request({
    url: "/pc/order/sellOrderDraftList/",
    type: "post",
    data: data,
  });
}
// 客户详情-我收到的、发出的需求单列表
export function getOrderBefore(data) {
  return request({
    url: "/pc/order/getOrderBefore/",
    type: "post",
    data: data,
  });
}
// 客户详情-客户详情--经营交易
export function custmorinfo(data) {
  return request({
    url: "/pc/custmor/custmorinfo/",
    type: "post",
    data: data,
  });
}

// 客户列表 客户列表
export function merchantList(data) {
  return request({
    url: "/pc/custmor/merchantlist/",
    type: "post",
    data: data,
  });
}

// 客户列表 获取经营范围
export function getBussinessScope(data) {
  return request({
    url: "/pc/custmor/getBussinessScope/",
    type: "post",
    data: data,
  });
}

// 客户详情-赊账授信 赊账授信
export function userCreditList(data) {
  return request({
    url: "/pc/custmor/userCreditList/",
    type: "post",
    data: data,
  });
}

// 客户详情-赊账授信 设置赊账授信额度
export function userCreditSet(data) {
  return request({
    url: "/pc/custmor/userCreditSet/",
    type: "post",
    data: data,
  });
}

// 客户详情-交易订单 商品销售单、商品采购单
export function getSellOrder(data) {
  return request({
    url: "/pc/custmor/getSellOrder/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 收到的退货退款单  发出的退货退款单
export function getOrderReturn(data) {
  return request({
    url: "/pc/custmor/getOrderReturn/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 记账货款、筐子款（未收、未付）
export function getTransFerNote(data) {
  return request({
    url: "/pc/custmor/getTransFerNote/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 筐子购入、售出单
export function getOrderBasket(data) {
  return request({
    url: "/pc/custmor/getOrderBasket/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 发出的退筐退款、收到的退筐退款
export function getOrderReturnBasket(data) {
  return request({
    url: "/pc/custmor/getOrderReturnBasket/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 筐子自购单
export function getUserBuyMySelf(data) {
  return request({
    url: "/pc/custmor/getUserBuyMySelf/",
    type: "post",
    data: data,
  });
}
// 客户详情-交易订单 筐子报废单
export function getOrderBasketScrap(data) {
  return request({
    url: "/pc/custmor/getOrderBasketScrap/",
    type: "post",
    data: data,
  });
}

// 客户详情-往来款、经营往来款  往来款
export function businessPaymentsDetail(data) {
  return request({
    url: "/pc/custmor/businessPaymentsDetail/",
    type: "post",
    data: data,
  });
}
// 客户详情-往来款、经营往来款  经营往来款
export function businessTransactionDetail(data) {
  return request({
    url: "/pc/custmor/businessTransactionDetail/",
    type: "post",
    data: data,
  });
}
// 选择非平台客户
export function unplatformlist(data) {
  return request({
    url: "/pc/commodity/unplatformlist/",
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
// 需求单-需求单详情
export function orderBeforeDetails(data) {
  return request({
    url: "/pc/order/orderBeforeDetails/",
    type: "post",
    data: data,
  });
}
