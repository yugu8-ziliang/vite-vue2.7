// 当前登录用户
// 用户 3:企业采购商, 4:个人采购商, 6:企业经营户, 7:个人经营户, 10:个体供货商, 11:企业供货商
//采购户具体类型  1-食堂/饭店 2-生鲜超市  3-农贸市场
//0 全部 1 筐子自购单 2 商品采购单 3 商品销售单 4 筐子售出单 5 筐子购入单 6 筐子报废单 7 筐子报失单 8 筐子报溢单 10 筐子腾空单 11 发出的退货退款单 12 收到的退货退款单 13 退还筐子单 14 退入筐子单 20 销售记账单 21 配送退款单 22 配送退筐单 24 配送单 25 自有筐子单 26 商品报溢单 
export function isbasketInOut(userType, purchaseType) {
    // 经营户
    if (userType == 6 || userType == 7) {
        return [
            {
                value: "0",
                label: "全部"
            },
            {
                value: "1",
                label: "筐子自购单"
            },
            {
                value: "2",
                label: "商品采购单"
            },
            {
                value: "3",
                label: "商品销售单"
            },
            {
                value: "4",
                label: "筐子售出单"
            },
            {
                value: "5",
                label: "筐子购入单"
            },
            {
                value: "6",
                label: "筐子报废单"
            },
            {
                value: "7",
                label: "筐子报失单"
            },
            {
                value: "8",
                label: "筐子报溢单"
            },
            {
                value: "10",
                label: "筐子腾空单"
            },
            {
                value: "11",
                label: "发出的退货退款单"
            },
            {
                value: "12",
                label: "收到的退货退款单"
            },
            {
                value: "13",
                label: "退还筐子单"
            },
            {
                value: "14",
                label: "退入筐子单"
            },
            {
                value: "25",
                label: "自有筐子单"
            },
            {
                value: "26",
                label: "商品报溢单"
            }
        ]
    }

    // 供货商
    if (userType == 10 || userType == 11) {
        return [
            {
                value: "0",
                label: "全部"
            },
            {
                value: "1",
                label: "筐子自购单"
            },
            {
                value: "3",
                label: "商品销售单"
            },
            {
                value: "4",
                label: "筐子售出单"
            },
            {
                value: "5",
                label: "筐子购入单"
            },
            {
                value: "6",
                label: "筐子报废单"
            },
            {
                value: "7",
                label: "筐子报失单"
            },
            {
                value: "8",
                label: "筐子报溢单"
            },
            {
                value: "10",
                label: "筐子腾空单"
            },
            {
                value: "12",
                label: "收到的退货退款单"
            },
            {
                value: "13",
                label: "退还筐子单"
            },
            {
                value: "14",
                label: "退入筐子单"
            },
            {
                value: "25",
                label: "自有筐子单"
            },
            {
                value: "26",
                label: "商品报溢单"
            }
        ]
    }

    // 采购商-食堂/饭店
    if ((userType == 3 || userType == 4) && purchaseType == 1) {
        return [
            {
                value: "0",
                label: "全部"
            },
            {
                value: "1",
                label: "筐子自购单"
            },
            {
                value: "2",
                label: "商品采购单"
            },
            {
                value: "4",
                label: "筐子售出单"
            },
            {
                value: "5",
                label: "筐子购入单"
            },
            {
                value: "6",
                label: "筐子报废单"
            },
            {
                value: "7",
                label: "筐子报失单"
            },
            {
                value: "8",
                label: "筐子报溢单"
            },
            {
                value: "10",
                label: "筐子腾空单"
            },
            {
                value: "11",
                label: "发出的退货退款单"
            },
            {
                value: "13",
                label: "退还筐子单"
            },
            {
                value: "14",
                label: "退入筐子单"
            },
            {
                value: "25",
                label: "自有筐子单"
            },
            {
                value: "26",
                label: "商品报溢单"
            }
        ]
    }
    // 采购商-生鲜超市
    if ((userType == 3 || userType == 4) && purchaseType == 2) {
        return [
            {
                value: "0",
                label: "全部"
            },
            {
                value: "1",
                label: "筐子自购单"
            },
            {
                value: "2",
                label: "商品采购单"
            },
            {
                value: "4",
                label: "筐子售出单"
            },
            {
                value: "5",
                label: "筐子购入单"
            },
            {
                value: "6",
                label: "筐子报废单"
            },
            {
                value: "7",
                label: "筐子报失单"
            },
            {
                value: "8",
                label: "筐子报溢单"
            },
            {
                value: "10",
                label: "筐子腾空单"
            },
            {
                value: "11",
                label: "发出的退货退款单"
            },
            {
                value: "13",
                label: "退还筐子单"
            },
            {
                value: "14",
                label: "退入筐子单"
            },
            {
                value: "20",
                label: "销售记账单"
            },
            {
                value: "21",
                label: "配送退款单"
            },
            {
                value: "22",
                label: "配送退筐单"
            },
            {
                value: "24",
                label: "配送单"
            },
            {
                value: "25",
                label: "自有筐子单"
            },
            {
                value: "26",
                label: "商品报溢单"
            }
        ]
    }
    // 采购商-农贸市场
    if ((userType == 3 || userType == 4) && purchaseType == 3) {
        return [
            {
                value: "0",
                label: "全部"
            },
            {
                value: "1",
                label: "筐子自购单"
            },
            {
                value: "2",
                label: "商品采购单"
            },
            {
                value: "4",
                label: "筐子售出单"
            },
            {
                value: "5",
                label: "筐子购入单"
            },
            {
                value: "6",
                label: "筐子报废单"
            },
            {
                value: "7",
                label: "筐子报失单"
            },
            {
                value: "8",
                label: "筐子报溢单"
            },
            {
                value: "10",
                label: "筐子腾空单"
            },
            {
                value: "11",
                label: "发出的退货退款单"
            },
            {
                value: "13",
                label: "退还筐子单"
            },
            {
                value: "14",
                label: "退入筐子单"
            },
            {
                value: "20",
                label: "销售记账单"
            },
            {
                value: "25",
                label: "自有筐子单"
            },
            {
                value: "26",
                label: "商品报溢单"
            }
        ]
    }

}

