import request from "@/utils/request";

//商品列表
export function productList(data) {
  return request({
    url: "/pc/commodity/productList/",
    type: "post",
    data: data,
  });
}

//商品分类
export function productCate(data) {
  return request({
    url: "/pc/commodity/productCate/",
    type: "post",
    data: data,
  });
}
//品牌
export function varietyList(data) {
  return request({
    url: "/pc/commodity/varietyList/",
    type: "post",
    data: data,
  });
}
//级别/规格
export function specList(data) {
  return request({
    url: "/pc/commodity/specList/",
    type: "post",
    data: data,
  });
}
// 选择计算单位
export function subunitList(data) {
  return request({
    url: "/pc/commodity/subunitList/",
    type: "post",
    data: data,
  });
}
// 选择自家筐子
export function addOwnBasket(data) {
  return request({
    url: "/pc/commodity/addOwnBasket/",
    type: "post",
    data: data,
  });
}
// 选择卖家筐子
export function overFlowBasketList(data) {
  return request({
    url: "/pc/commodity/overFlowBasketList/",
    type: "post",
    data: data,
  });
}
// 添加商品
export function addProduct(data) {
  return request({
    url: "/pc/commodity/addProduct/",
    type: "post",
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // 为键值对格式
    },
  });
}
// 添加入库
export function addProductStock(data) {
  return request({
    url: "/pc/commodity/addProductStock/",
    type: "post",
    data: data,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", // 为键值对格式
    },
  });
}

//产地列表
export function getRegion(data) {
  return request({
    url: "/pc/commodity/getRegion/",
    type: "post",
    data: data,
  });
}
