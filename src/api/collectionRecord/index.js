import request from "@/utils/request";

// 收付款记录(多种订单)
export function getPaymentRecord(data) {
  return request({
    url: "/pc/financial/getPaymentRecord/",
    type: "post",
    data: data,
  });
}
// 往来款抵充详情
export function comeInPriceRecordInfo(data) {
  return request({
    url: "/pc/financial/comeInPriceRecordInfo/",
    type: "post",
    data: data,
  });
}
// 查看修改前记录
export function paymentRecordHistory(data) {
  return request({
    url: "/pc/financial/paymentRecordHistory/",
    type: "post",
    data: data,
  });
}
