import request from "@/utils/request";

export const getUserList = data => {
  return request({
    type: "post",
    url: "/pc/order/returnUserList/",
    data: data,
  });
};

///order/returnOrderList/#采购单#销售单
export const returnOrderList = data => {
  return request({
    type: "post",
    url: "/pc/order/returnOrderList/",
    data: data,
  });
};

///basket/basketReturnOrderList/#筐子购入#筐子售出
export const basketReturnOrderList = data => {
  return request({
    type: "post",
    url: "/pc/basket/basketReturnOrderList/",
    data: data,
  });
};
///order/returnProductList/#退货退款商品选择
export const rarSelectGoods = data => {
  return request({
    type: "post",
    url: "/pc/order/returnProductList/",
    data: data,
  });
};
///basket/getOrderInfo/#退筐选筐子
export const rarSelectBasket = data => {
  return request({
    type: "post",
    url: "/pc/basket/getOrderInfo/",
    data: data,
  });
};
///order/orderReturnListPC/#查看无剩余可退
export const noReturn = data => {
  return request({
    type: "post",
    url: "/pc/order/orderReturnListPC/",
    data: data,
  });
};
///basket/OrderReturnBasketList/#获取无剩余可退筐子
export const noReturnBasket = data => {
  return request({
    type: "post",
    url: "/pc/basket/OrderReturnBasketList/",
    data: data,
  });
};
