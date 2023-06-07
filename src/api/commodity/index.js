import request from "@/utils/request";

// 获取商品列表(库内，库外)
export function productchecklist(data) {
  return request({
    url: "/pc/commodity/productchecklist/",
    type: "post",
    data: data,
  });
}
// 提醒添加经营范围
export function reminAddScope(data) {
  return request({
    url: "/pc/order/reminAddScope/",
    type: "post",
    data: data,
  });
}

// 获取商品批次列表
export function productBatch(data) {
  return request({
    url: "/pc/commodity/productBatch/",
    type: "post",
    data: data,
  });
}
//获取载货筐子信息
export function getCarryBasket(data) {
  return request({
    type: "post",
    url: "/pc/commodity/batchgetbasket/",
    data: data,
  });
}
//使用空筐过磅
export function overFlowBasketList(data) {
  return request({
    type: "post",
    url: "/pc/commodity/overFlowBasketList/",
    data: data,
  });
}
// 使用空置筐子
export function addOwnBasket(data) {
  return request({
    type: "post",
    url: "/pc/commodity/addOwnBasket/",
    data: data,
  });
}
// 新建销售单
export function addSellInfo(data) {
  return request({
    type: "post",
    url: "/pc/order/addSellInfo/",
    data: data,
  });
}
// 保存至草稿箱
export function addSellDraft(data) {
  return request({
    type: "post",
    url: "/pc/order/addSellDraft/",
    data: data,
  });
}
