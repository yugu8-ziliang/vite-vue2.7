import request from "@/utils/request";
//上
export function topdata(data) {
  return request({
    url: "/pc/financial/financialManagementHomeUpper/",
    type: "post",
    data: data,
  });
}
//下
export function bottomdata(data) {
  return request({
    url: "/pc/financial/financialManagementHomeLower/",
    type: "post",
    data: data,
  });
}
