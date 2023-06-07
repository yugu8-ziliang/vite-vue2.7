import request from "@/utils/request";

// 退货退款
export const getList = data => {
  return request({
    type: "post",
    url: "/pc/order/orderReturn/",
    data: data,
  });
};
//我提交的退货退款单详情 #
export const getInfo = data => {
  return request({
    type: "post",
    url: "/pc/order/getreturnorderdetail/",
    data: data,
  });
};
