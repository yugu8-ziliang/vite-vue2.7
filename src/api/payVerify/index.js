import request from "@/utils/request";

//在途订单验证
export const getpayVerify = data => {
  return request({
    type: "post",
    url: "/pc/financial/payVerify/",
    data: data,
  });
};
