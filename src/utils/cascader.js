// 各用户对客户
// 用户  3:企业采购商, 4:个人采购商, 6:企业经营户, 7:个人经营户, 10:个体供货商, 11:企业供货商
// 客户 1:经营户, 2:采购商, 3:供货商, 4:非平台
export function isCascader(userType, customerType) {
    // 经营户 对 经营户
    if ((userType == 6 || userType == 7) && customerType == 1) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "9",
                        label: "收归还记账货款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "14",
                        label: "收归还预付款"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "24",
                        label: "付归还记账货款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "29",
                        label: "付归还预付款"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 经营户 对 采购商
    if ((userType == 6 || userType == 7) && customerType == 2) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "9",
                        label: "收归还记账货款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "29",
                        label: "付归还预付款"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 经营户 对 供货商
    if ((userType == 6 || userType == 7) && customerType == 3) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "14",
                        label: "收归还预付款"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 经营户 对 非平台
    if ((userType == 6 || userType == 7) && customerType == 4) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "5",
                        label: "收筐子报废款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "8",
                        label: "修改记录退款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "20",
                        label: "付筐子自购款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "23",
                        label: "修改记录付款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    }
                ]
            },
        ]
    }

    // 供货商 对 经营户
    if ((userType == 10 || userType == 11) && customerType == 1) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "9",
                        label: "收归还记账货款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "29",
                        label: "付归还预付款"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 供货商 对 采购商
    if ((userType == 10 || userType == 11) && customerType == 2) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "9",
                        label: "收归还记账货款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "29",
                        label: "付归还预付款"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 供货商 对 供货商
    if ((userType == 10 || userType == 11) && customerType == 3) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 供货商 对 非平台
    if ((userType == 10 || userType == 11) && customerType == 4) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "1",
                        label: "收销售款"
                    },
                    {
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "5",
                        label: "收筐子报废款"
                    },
                    {
                        value: "6",
                        label: "记账未收货款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "8",
                        label: "修改记录退款"
                    },
                    {
                        value: "11",
                        label: "收预付款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "17",
                        label: "付退货退款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "20",
                        label: "付筐子自购款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "23",
                        label: "修改记录付款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "29",
                        label: "付归还预付款"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }

    // 采购商 对 经营户
    if ((userType == 3 || userType == 4) && customerType == 1) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "14",
                        label: "收归还预付款"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 采购商 对 采购商
    if ((userType == 3 || userType == 4) && customerType == 2) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 采购商 对 供货商
    if ((userType == 3 || userType == 4) && customerType == 3) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "10",
                        label: "收归还记账筐子款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    },
                    {
                        value: "14",
                        label: "收归还预付款"
                    },
                    {
                        value: "15",
                        label: "收归还借款"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "25",
                        label: "付归还记账筐子款"
                    },
                    {
                        value: "26",
                        label: "付预付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    },
                    {
                        value: "30",
                        label: "付归还借款"
                    }
                ]
            },
        ]
    }
    // 采购商 对 非平台
    if ((userType == 3 || userType == 4) && customerType == 4) {
        return [{
                value: "0",
                label: "全部"
            },
            {
                value: "",
                label: "收款类型",
                children: [{
                        value: "2",
                        label: "收退货退款"
                    },
                    {
                        value: "3",
                        label: "收筐子售出款"
                    },
                    {
                        value: "4",
                        label: "收退筐退款"
                    },
                    {
                        value: "5",
                        label: "收筐子报废款"
                    },
                    {
                        value: "7",
                        label: "记账未收筐子款"
                    },
                    {
                        value: "8",
                        label: "修改记录退款"
                    },
                    {
                        value: "12",
                        label: "收借款"
                    },
                    {
                        value: "13",
                        label: "收其他"
                    }
                ]
            },
            {
                value: "",
                label: "付款类型",
                children: [{
                        value: "16",
                        label: "付采购款"
                    },
                    {
                        value: "18",
                        label: "付筐子购入款"
                    },
                    {
                        value: "19",
                        label: "付退筐退款"
                    },
                    {
                        value: "20",
                        label: "付筐子自购款"
                    },
                    {
                        value: "21",
                        label: "记账未付货款"
                    },
                    {
                        value: "22",
                        label: "记账未付筐子款"
                    },
                    {
                        value: "23",
                        label: "修改记录付款"
                    },
                    {
                        value: "27",
                        label: "付借款"
                    },
                    {
                        value: "28",
                        label: "付其他"
                    }
                ]
            },
        ]
    }

}

//0 全部 1.报溢入库 2.采购入库 3.转换入库 4.退货入库 5.报损出库 6.销售出库  7.转换出库 8.退货出库 11.分拣入库 12.分拣出库 13 自家生产 14 配送出库 15 销售记账出库 16 菜品销售记账出库 17 配送退货入库 
export function isTypeoptions(userType, purchaseType) {
    // 用户经营户/供货商
    if (userType == 6 || userType == 7 || userType == 10 || userType == 11) {
        return [{
                value: "",
                label: "入库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    },
                    {
                        value: "2",
                        label: "采购入库"
                    },
                    {
                        value: "13",
                        label: "自家生产"
                    },
                    {
                        value: "1",
                        label: "报溢入库"
                    },
                    {
                        value: "4",
                        label: "退货入库"
                    },
                    {
                        value: "3",
                        label: "转换入库"
                    },
                    {
                        value: "11",
                        label: "分拣入库"
                    }
                ]
            },
            {
                value: "",
                label: "出库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "6",
                        label: "销售出库"
                    },
                    {
                        value: "5",
                        label: "报损出库"
                    },
                    {
                        value: "7",
                        label: "转换出库"
                    },
                    {
                        value: "8",
                        label: "退货出库"
                    },
                    {
                        value: "12",
                        label: "分拣出库"
                    }
                ]
            },
        ]
    }
    // 用户采购商-生鲜超市
    if ((userType == 3 || userType == 4) && purchaseType == 2) {
        return [{
                value: "",
                label: "入库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "2",
                        label: "采购入库"
                    },
                    {
                        value: "13",
                        label: "自家生产"
                    },
                    {
                        value: "1",
                        label: "报溢入库"
                    },
                    {
                        value: "3",
                        label: "转换入库"
                    },
                    {
                        value: "17",
                        label: "配送退货"
                    },
                    {
                        value: "11",
                        label: "分拣入库"
                    }
                ]
            },
            {
                value: "",
                label: "出库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "14",
                        label: "配送出库"
                    },
                    {
                        value: "15",
                        label: "销售记账"
                    },
                    {
                        value: "5",
                        label: "报损出库"
                    },
                    {
                        value: "7",
                        label: "转换出库"
                    },
                    {
                        value: "8",
                        label: "退货出库"
                    },
                    {
                        value: "12",
                        label: "分拣出库"
                    }
                ]
            },
        ]
    }
    // 用户采购商-农贸市场
    if ((userType == 3 || userType == 4) && purchaseType == 3) {
        return [{
                value: "",
                label: "入库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "2",
                        label: "采购入库"
                    },
                    {
                        value: "13",
                        label: "自家生产"
                    },
                    {
                        value: "1",
                        label: "报溢入库"
                    },
                    {
                        value: "3",
                        label: "转换入库"
                    },
                    {
                        value: "11",
                        label: "分拣入库"
                    }
                ]
            },
            {
                value: "",
                label: "出库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "15",
                        label: "销售记账"
                    },
                    {
                        value: "5",
                        label: "报损出库"
                    },
                    {
                        value: "7",
                        label: "转换出库"
                    },
                    {
                        value: "8",
                        label: "退货出库"
                    },
                    {
                        value: "12",
                        label: "分拣出库"
                    }
                ]
            },
        ]
    }
    // 用户采购商-食堂饭店
    if ((userType == 3 || userType == 4) && purchaseType == 1) {
        return [{
                value: "",
                label: "入库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "2",
                        label: "采购入库"
                    },
                    {
                        value: "13",
                        label: "自家生产"
                    },
                    {
                        value: "1",
                        label: "报溢入库"
                    },
                    {
                        value: "3",
                        label: "转换入库"
                    },
                    {
                        value: "11",
                        label: "分拣入库"
                    }
                ]
            },
            {
                value: "",
                label: "出库类型",
                children: [{
                        value: "0",
                        label: "全部"
                    }, {
                        value: "16",
                        label: "菜品销售"
                    },
                    {
                        value: "5",
                        label: "报损出库"
                    },
                    {
                        value: "7",
                        label: "转换出库"
                    },
                    {
                        value: "8",
                        label: "退货出库"
                    },
                    {
                        value: "12",
                        label: "分拣出库"
                    }
                ]
            },
        ]
    }
}