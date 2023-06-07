// 筐子管理接口
import request from "@/utils/request";

// 当前库存
export function currentbasket(data) {
  return request({
    url: "/pc/basket/currentbasket/",
    type: "post",
    data: data,
  });
}
// 当前库存-筐子详情
export function currentInventoryDetails(data) {
  return request({
    url: "/pc/basket/currentInventoryDetails/",
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
//报废、报失、报溢（当前库存、我的筐子）
export function basketScrap(data) {
  return request({
    url: "/pc/basket/basketScrap/",
    type: "post",
    data: data,
  });
}
// 当前库存（腾空筐子——载货商品明细）
export function basketBindProductDetail(data) {
  return request({
    url: "/pc/basket/basketBindProductDetail/",
    type: "post",
    data: data,
  });
}
// 当前库存（腾空筐子——获取商品下批次筐子数量）
export function goodsBatchBasket(data) {
  return request({
    url: "/pc/basket/goodsBatchBasket/",
    type: "post",
    data: data,
  });
}
// 当前库存（腾空筐子——获取商品下批次筐子数量）
export function emptyBasketPc(data) {
  return request({
    url: "/pc/basket/emptyBasketPc/",
    type: "post",
    data: data,
  });
}

// 我的库存
export function myBasketList(data) {
  return request({
    url: "/pc/basket/myBasketList/",
    type: "post",
    data: data,
  });
}
// 我的筐子-自购筐子明细
export function buyMySelfBasketInandOutDetails(data) {
  return request({
    url: "/pc/basket/buyMySelfBasketInandOutDetails/",
    type: "post",
    data: data,
  });
}
// 获取系统筐子
export function userSystemBasket(data) {
  return request({
    url: "/pc/basket/userSystemBasket/",
    type: "post",
    data: data,
  });
}
// 添加自购筐子（当前库存、我的筐子）
export function addUserBasketBuyMyself(data) {
  return request({
    url: "/pc/basket/addUserBasketBuyMyself/",
    type: "post",
    data: data,
  });
}
