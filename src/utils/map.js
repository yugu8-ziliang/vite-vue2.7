/* 1.现金:cash 2，微信:weChat 3.支付宝:aliPay  4.银行卡:bankCard  

/**
 * 线下收款方式
 *
 */
export const offlineReceiptWaysMap = new Map();
offlineReceiptWaysMap.set(1, {
  zh: "现金",
  en: "cash",
});
offlineReceiptWaysMap.set(2, {
  zh: "微信",
  en: "weChat",
});
offlineReceiptWaysMap.set(3, {
  zh: "支付宝",
  en: "aliPay",
});
offlineReceiptWaysMap.set(4, {
  zh: "银行卡",
  en: "bankCard",
});

/**
 * 线上收款方式
 * 3.支付宝:aliPay 5.拉卡拉线上付款:lakalaCollection
 */
export const onlineReceiptWaysMap = new Map();
onlineReceiptWaysMap.set(6, {
  zh: "拉卡拉",
  en: "lakalaCollection",
});

// 根据收款方式获取对应 payType字典
export const receiptWayTypeMap = new Map();
receiptWayTypeMap.set("cash", 1);
receiptWayTypeMap.set("weChat", 2);
receiptWayTypeMap.set("aliPay", 3);
receiptWayTypeMap.set("bankCard", 4);
receiptWayTypeMap.set("lakalaCollection", 5);
receiptWayTypeMap.set("sellerCash", 6);
receiptWayTypeMap.set("qrCode", 7);

export const GET_PAY_TYPE = (isPlatform, isFirstTime) => {};
