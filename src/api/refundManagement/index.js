import request from "@/utils/request";

//获取平台用户 getUser
export const getUser = data => {
  return request({
    type: "post",
    url: "/pc/order/getcustomer/",
    data: data,
  });
};
//获取非平台用户
export const getFUser = data => {
  return request({
    type: "post",
    url: "/pc/commodity/unplatformlist/",
    data: data,
  });
};
//退筐退款-选择卖家订单
export const basketReturnOrderList = data => {
  return request({
    type: "post",
    url: "/pc/basket/basketReturnOrderList/",
    data: data,
  });
};
//退筐退款-获取退入筐子/退还筐子订单详情
export const getOrderInfo = data => {
  return request({
    type: "post",
    url: "/pc/basket/getOrderInfo/",
    data: data,
  });
};
//新建退筐退款（含修改）
export const createOrderBasketReturn = data => {
  return request({
    type: "post",
    url: "/pc/basket/createOrderBasketReturn/",
    data: data,
  });
};
//退货退款-获取退货退款单关联的采购单信息
export const OrderReturnSellInfo = data => {
  return request({
    type: "post",
    url: "/pc/order/OrderReturnSellInfo/",
    data: data,
  });
};
//新建退货退款-含卖家、买家修改
export const createOrderReturn = data => {
  return request({
    type: "post",
    url: "/pc/order/createOrderReturn/",
    data: data,
  });
};
