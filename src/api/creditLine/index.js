import request from "@/utils/request";
// 列表
export function getList(data) {
  return request({
    url: "/pc/financial/creditManagement/",
    type: "post",
    data: data,
  });
}
//设置额度
export function userCreditSet(data) {
  return request({
    url: "/pc/custmor/userCreditSet/",
    type: "post",
    data: data,
  });
}
