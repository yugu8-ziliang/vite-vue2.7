import request from "@/utils/request";

// 往来款
export function businessPayments(data) {
  return request({
    url: "/pc/home/businessPayments/",
    type: "post",
    data: data,
  });
}
// 待办
export function backlog(data) {
  return request({
    url: "/pc/home/backlog/",
    type: "post",
    data: data,
  });
}
// 通知
export function systemMessageListAll(data) {
  return request({
    url: "/pc/home/systemMessageListAll/",
    type: "post",
    data: data,
  });
}
// 今日数据（本月、今年、全部）
export function statistics(data) {
  return request({
    url: "/pc/home/statistics/",
    type: "post",
    data: data,
  });
}
// 供货商排名
export function customerRankings(data) {
  return request({
    url: "/pc/home/customerRankings/",
    type: "post",
    data: data,
  });
}
// 销售记账排名
export function sellOrderRankings(data) {
  return request({
    url: "/pc/home/sellOrderRankings/",
    type: "post",
    data: data,
  });
}
// 配送排名
export function deliveryRankings(data) {
  return request({
    url: "/pc/home/deliveryRankings/",
    type: "post",
    data: data,
  });
}
// 商品排名
export function productRankings(data) {
  return request({
    url: "/pc/home/productRankings/",
    type: "post",
    data: data,
  });
}
// 菜品排名
export function varietyRankings(data) {
  return request({
    url: "/pc/home/varietyRankings/",
    type: "post",
    data: data,
  });
}
