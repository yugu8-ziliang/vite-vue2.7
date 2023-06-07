import request from "@/utils/request";

export const getList = data => {
  return request({
    type: "post",
    url: "/pc/basket/sellOrderBasket/",
    data: data,
  });
};
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
//获取详情
export const getInfo = data => {
  return request({
    type: "post",
    url: "/pc/basket/sellBasketOrderDetail/",
    data: data,
  });
};
