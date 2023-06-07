import request from "@/utils/request";
//获取详情
export const getInfo = data => {
  return request({
    type: "post",
    url: "/pc/order/sellInfoDetail/",
    data: data,
  });
};
//草稿箱
export const getDrafts = data => {
  return request({
    type: "post",
    url: "/pc/order/sellOrderDraftList/",
    data: data,
  });
};
//草稿箱详情
export const getDraftsDetails = data => {
  return request({
    type: "post",
    url: "/pc/order/getOrderDraftSellInfo/",
    data: data,
  });
};
//删除
export const delone = data => {
  return request({
    type: "post",
    url: "/pc/order/deleteSellOrderDraft/",
    data: data,
  });
};
// 取消订单
export const repealOrder = data => {
  return request({
    type: "post",
    url: "/pc/order/cancellationOfOrder/",
    data: data,
  });
};
//撤回取消 /financial/refusedOrder/
export const refusedOrder1 = data => {
  return request({
    type: "post",
    url: "/pc/financial/refusedOrder/",
    data: data,
  });
};
// 提醒 /transaction/remindCollect/
export const remind = data => {
  return request({
    type: "post",
    url: "/pc/transaction/remindPay/",
    data: data,
  });
};
//提醒收款 /transaction/remindCollect/
export const remind2 = data => {
  return request({
    type: "post",
    url: "/pc/transaction/remindCollect/",
    data: data,
  });
};
