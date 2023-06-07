import request from "@/utils/request";
// 非固定成本首页
export function costunfixdList(data) {
  return request({
    url: "/pc/costUnfixd/costunfixd/",
    type: "post",
    data: data,
  });
}
// 非固定成本查看当年明细
export function costUnFixdYearDetail(data) {
  return request({
    url: "/pc/costUnfixd/costUnFixdYearDetail/",
    type: "post",
    data: data,
  });
}
// 非固定成本月详情
export function costUnFixdDetail(data) {
  return request({
    url: "/pc/costUnfixd/costUnFixdDetail/",
    type: "post",
    data: data,
  });
}
// 非固定成本月详情修改金额
export function costUnFixdDetailUpdate(data) {
  return request({
    url: "/pc/costUnfixd/costUnFixdDetailUpdate/",
    type: "post",
    data: data,
  });
}
