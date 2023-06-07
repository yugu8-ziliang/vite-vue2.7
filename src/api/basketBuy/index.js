import request from "@/utils/request";

export const getList = data => {
  return request({
    type: "post",
    url: "/pc/basket/buyOrderBasket/",
    data: data,
  });
};
//选择客户（平,非）
export const getUser = data => {
  return request({
    type: "post",
    url: "/pc/custmor/getcustomer/",
    data: data,
  });
};
//获取筐子
export const getBasket = data => {
  return request({
    type: "post",
    url: "/pc/basket/userSystemBasket/",
    data: data,
  });
};
//新建筐子购入单
export const getAdd = data => {
  return request({
    type: "post",
    url: "/pc/basket/addbasketorder/",
    data: data,
  });
};
//获取详情
export const getInfo = data => {
  return request({
    type: "post",
    url: "/pc/basket/buyBasketOrderDetail/",
    data: data,
  });
};
