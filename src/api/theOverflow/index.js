import request from "@/utils/request";

//获取批次
export const getBatch = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productBatch/",
    data: data,
  });
};
//获取自家筐子
export const getOwnBasket = data => {
  return request({
    type: "post",
    url: "/pc/commodity/addOwnBasket/",
    data: data,
  });
};
//获取报溢筐子
export const getOverFlowBasket = data => {
  return request({
    type: "post",
    url: "/pc/commodity/overFlowBasketList/",
    data: data,
  });
};
//获取载货筐子信息
export const getCarryBasket = data => {
  return request({
    type: "post",
    url: "/pc/commodity/batchGetBasket/",
    data: data,
  });
};
//报溢提交
export const submitOverFlow = data => {
  return request({
    type: "post",
    url: "/pc/commodity/newOverFlowProduct/",
    data: data,
  });
};
//单位转换 提交
export const getunitConversion = data => {
  return request({
    type: "post",
    url: "/pc/commodity/unitConversion/",
    data: data,
  });
};
// 腾空 提交
export const getSoar = data => {
  return request({
    type: "post",
    url: "/pc/commodity/newEmptyBasket/",
    data: data,
  });
};
// 分拣 提交
export const getSorting = data => {
  return request({
    type: "post",
    url: "/pc/commodity/addProductSort/",
    data: data,
  });
};
// 装筐单 提交
export const addProductLoad = data => {
  return request({
    type: "post",
    url: "/pc/commodity/addProductLoad/",
    data: data,
  });
};
// 盘点单 提交
export const takeStock = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productCheck/",
    data: data,
  });
};

///commodity/checkDetail//commodity/addProductSort/
export const test = data => {
  return request({
    type: "post",
    url: "/pc/commodity/checkDetail/",
    data: data,
  });
};
