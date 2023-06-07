import request from "@/utils/request";

export const newPayLoad = data => {
  return request({
    type: "post",
    url: "/pc/financial/newPayLoad/",
    data: data,
  });
};

// 新支付- 添加收付款信息（包含非平台、批量支付）
export const agreePayment = data => {
  return request({
    type: "post",
    url: "/pc/financial/agreePayment/",
    data: data,
  });
};
// 获取支付页面 平账金额
export const getBalancePay = data => {
  return request({
    type: "post",
    url: "/pc/financial/payLoadGetBalance/",
    data: data,
  });
};
