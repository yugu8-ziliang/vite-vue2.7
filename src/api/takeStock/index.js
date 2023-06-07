import request from "@/utils/request";
//获取商品分类
export const getGoodsType = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productCate/",
    data: data,
  });
};
