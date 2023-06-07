import request from "@/utils/request";

//列表
export const getList = data => {
  return request({
    type: "post",
    url: "/pc/financial/transferHome/",
    data: data,
  });
};
//获取用户
export const getUser = data => {
  return request({
    type: "post",
    url: "/pc/order/getcustomer/",
    data: data,
  });
};
//获取单据
export const getOrder = data => {
  return request({
    type: "post",
    url: "/pc/financial/transferChoiceList/",
    data: data,
  });
};
//提交发起转账
export const submit = data => {
  return request({
    type: "post",
    url: "/pc/financial/initiateTransfer/",
    data: data,
  });
};
//获取详情
export const getDetail = data => {
  return request({
    type: "post",
    url: "/pc/financial/getTransferInfo/",
    data: data,
  });
};
//撤回
export const revocation = data => {
  return request({
    type: "post",
    url: "/pc/financial/withdrawTransfer/",
    data: data,
  });
};
//提醒收款
export const remind = data => {
  return request({
    type: "post",
    url: "/pc/transaction/remindCollect/",
    data: data,
  });
};
//确认收款 receipt
export const receipt = data => {
  return request({
    type: "post",
    url: "/pc/financial/confirmTransfer/",
    data: data,
  });
};
//校验密码 /user/checkoutPayPassword/
export const password = data => {
  return request({
    type: "post",
    url: "/pc/user/checkoutPayPassword/",
    data: data,
  });
};
//获取抵扣记录
export const getDikou = data => {
  return request({
    type: "post",
    url: "/pc/financial/transferHistoricalReturn/",
    data: data,
  });
};
//选择单据验证
export const orderVerify = data => {
  return request({
    type: "post",
    url: "/pc/financial/checkTransferChoiceList/",
    data: data,
  });
};
