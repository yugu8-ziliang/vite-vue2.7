import request from "@/utils/request";

//获取详情
export const getInfo = data => {
  return request({
    type: "post",
    url: "/pc/commodity/goodsDetailsPc/",
    data: data,
  });
};

//选择商品 /commodity/productCate/
export const getgoods = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productCate/",
    data: data,
  });
};
//近7天交易 /commodity/transactionuser/
export const getTransactionuser = data => {
  return request({
    type: "post",
    url: "/pc/commodity/transactionuser/",
    data: data,
  });
};
//批次详情
export const BatchDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productLotDetailsPc/",
    data: data,
  });
};
//添加商品详情  添加入库详情
export const productOrderDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productOrderDetail/",
    data: data,
  });
};
//商品报损
export const newDamagedProduct = data => {
  return request({
    type: "post",
    url: "/pc/commodity/newDamagedProduct/",
    data: data,
  });
};
//商品报溢/报损详情
export const productOverOrLossDetails = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productOverOrLossDetails/",
    data: data,
  });
};
//商品出入库明细
export const goodsStorage = data => {
  return request({
    type: "post",
    url: "/pc/commodity/goodsStorage/",
    data: data,
  });
};
//单位转换详情
export const unitConversionDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/unitConversionDetail/",
    data: data,
  });
};
//商品腾空详情
export const emptyDetails = data => {
  return request({
    type: "post",
    url: "/pc/commodity/emptyDetails/",
    data: data,
  });
};
//商品装筐单详情
export const productLoadDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productLoadDetail/",
    data: data,
  });
};
//商品分拣单详情
export const productSortDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/productSortDetail/",
    data: data,
  });
};
//商品盘点单详情
export const checkDetail = data => {
  return request({
    type: "post",
    url: "/pc/commodity/checkDetail/",
    data: data,
  });
};
//盘点列表
export const checkList = data => {
  return request({
    type: "post",
    url: "/pc/commodity/checkList/",
    data: data,
  });
};
