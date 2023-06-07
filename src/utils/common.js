/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 * 格式化时间
 */
export function parseTime(time, cFormat) {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    } else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            } else {
                // support safari
                // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
    return time_str
}

/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 * 距离当前时间多久前
 */
export function formatTime(time, option) {
    if (('' + time).length === 10) {
        time = parseInt(time) * 1000
    } else {
        time = +time
    }
    const d = new Date(time)
    const now = Date.now()

    const diff = (now - d) / 1000

    if (diff < 30) {
        return '刚刚'
    } else if (diff < 3600) {
        // less 1 hour
        return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
        return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
        return '1天前'
    }
    if (option) {
        return parseTime(time, option)
    } else {
        return (
            d.getMonth() +
            1 +
            '月' +
            d.getDate() +
            '日' +
            d.getHours() +
            '时' +
            d.getMinutes() +
            '分'
        )
    }
}

/**
 * @param {string} url
 * @returns {Object}
 * 获取链接查询参数
 */
export function getQueryObject(url) {
    url = url == null ? window.location.href : url
    const search = url.substring(url.lastIndexOf('?') + 1)
    const obj = {}
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, $1, $2) => {
        const name = decodeURIComponent($1)
        let val = decodeURIComponent($2)
        val = String(val)
        obj[name] = val
        return rs
    })
    return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 * 返回utf8字符串的字节长度
 */
export function byteLength(str) {
    let s = str.length
    for (var i = str.length - 1; i >= 0; i--) {
        const code = str.charCodeAt(i)
        if (code > 0x7f && code <= 0x7ff) s++
        else if (code > 0x7ff && code <= 0xffff) s += 2
        if (code >= 0xDC00 && code <= 0xDFFF) i--
    }
    return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 * 清理数组
 */
export function cleanArray(actual) {
    const newArray = []
    for (let i = 0; i < actual.length; i++) {
        if (actual[i]) {
            newArray.push(actual[i])
        }
    }
    return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 * 对象转查询参数
 */
export function param(json) {
    if (!json) return ''
    return cleanArray(
        Object.keys(json).map(key => {
            if (json[key] === undefined) return ''
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
        })
    ).join('&')
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 * 对象合并，最后一个优先
 */
export function objectMerge(target, source) {
    if (typeof target !== 'object') {
        target = {}
    }
    if (Array.isArray(source)) {
        return source.slice()
    }
    Object.keys(source).forEach(property => {
        const sourceProperty = source[property]
        if (typeof sourceProperty === 'object') {
            target[property] = objectMerge(target[property], sourceProperty)
        } else {
            target[property] = sourceProperty
        }
    })
    return target
}

/**
 * @param {Object} source
 * @returns {Object}
 * 深度拷贝
 */
export function deepClone(source) {
    if (!source && typeof source !== 'object') {
        throw new Error('error arguments', 'deepClone')
    }
    const targetObj = source.constructor === Array ? [] : {}
    Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = deepClone(source[keys])
        } else {
            targetObj[keys] = source[keys]
        }
    })
    return targetObj
}


/**
 * @returns {string}
 * 创建随机数
 */
export function createUniqueString() {
    const timestamp = +new Date() + ''
    const randomNum = parseInt((1 + Math.random()) * 65536) + ''
    return (+(randomNum + timestamp)).toString(32)
}

// 列表转树形结构
export function handleTree(data, id, parentId, children, rootId) {
    id = id || "id";
    parentId = parentId || "parentId";
    children = children || "children";
    // 排序
    function NumCompare(a, b) {
        // 数字比较函数
        return a.orderNum - b.orderNum;
    }
    rootId = rootId || Math.min.apply(Math, data.map(item => {
        return item[parentId];
    })) || 0;
    // 对源数据深度克隆
    const cloneData = JSON.parse(JSON.stringify(data));
    // 循环所有项
    const treeData = cloneData.filter(father => {
        const branchArr = cloneData.filter(child => {
            // 返回每一项的子级数组
            return father[id] === child[parentId];
        });
        branchArr.sort(NumCompare);
        branchArr.length > 0 ? father.children = branchArr : "";
        // 返回第一层
        return father[parentId] === rootId || !father[parentId];
    });
    treeData.sort(NumCompare);
    return treeData !== "" ? treeData : data;
}

// 过滤对象
export function filterObj(obj, arr) {
    if (typeof (obj) !== "object" || !Array.isArray(arr)) {
        throw new Error("参数格式不正确")
    }
    const result = {}
    Object.keys(obj).filter((key) => arr.includes(key)).forEach((key) => {
        result[key] = obj[key]
    })
    return result
}

/**
 * 保存
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */

function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        var body = document.querySelector("body");

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        // fix Firefox
        link.style.display = "none";
        body.appendChild(link);

        link.click();
        body.removeChild(link);

        window.URL.revokeObjectURL(link.href);
    }
}

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {cb}
 */
function getBlob(url, cb) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
        if (xhr.status === 200) {
            cb(xhr.response);
        }
    };
    xhr.send();
}

// 下载方法
export function download(file_url, fileName) {
    getBlob(process.env.VUE_APP_BASE_API + file_url, function (blob) {
        saveAs(blob, fileName);
    });
}

// 转换字符串，undefined,null等转化为""
export function praseStrEmpty(str) {
    if (!str || str == "undefined" || str == "null") {
        return "";
    }
    return str;
}


// 各用户对客户
// 用户  3:企业采购商, 4:个人采购商, 6:企业经营户, 7:个人经营户, 10:个体供货商, 11:企业供货商
// 客户 1:经营户, 2:采购商, 3:供货商, 4:非平台 5:散户
export function isUserToCustomerFilter(userType, customerType) {
    let menuList = [{
            id: 1,
            name: '经营交易',
            parentId: '',
            currentView: 'businessTransaction'
        },
        // 交易订单
        {
            id: 2,
            name: '交易订单',
            parentId: '',
            currentView: 'tradeOrder' // 
        }, {
            id: 3,
            name: '销售',
            parentId: 2,
            currentView: 'salesOrder' // 
        },
        {
            id: 4,
            name: '商品销售单',
            parentId: 3,
            currentView: 'commoditySalesorder'
        }, {
            id: 5,
            name: '筐子售出单',
            parentId: 3,
            currentView: 'basketSaleorder'
        }, {
            id: 6,
            name: '筐子报废单',
            parentId: 3,
            currentView: 'basketScrapsheet'
        }, {
            id: 7,
            name: '采购',
            parentId: 2,
            currentView: 'purchase' // 
        }, {
            id: 8,
            name: '商品采购单',
            parentId: 7,
            currentView: 'purchaseOrder'
        }, {
            id: 9,
            name: '筐子购入单',
            parentId: 7,
            currentView: 'basketPurchaseorder'
        }, {
            id: 10,
            name: '筐子自购单',
            parentId: 7,
            currentView: 'basketMypurchaseorder'
        }, {
            id: 11,
            name: '商品退款',
            parentId: 2,
            currentView: 'productRefund'
        }, {
            id: 12,
            name: '收到的退货退款',
            parentId: 11,
            currentView: 'receivedReturnsrefunded'

        }, {
            id: 13,
            name: '发出的退货退款',
            parentId: 11,
            currentView: 'issueRefundreturns'
        }, {
            id: 14,
            name: '筐子退款',
            parentId: 2,
            currentView: 'basketRefund'
        }, {
            id: 15,
            name: '收到的退筐退款',
            parentId: 14,
            currentView: 'receivedRefundreturnedbasket'
        }, {
            id: 16,
            name: '发出的退筐退款',
            parentId: 14,
            currentView: 'issueRefundbasket'
        }, {
            id: 17,
            name: '记账',
            parentId: 2,
            currentView: 'bookkeeping'
        }, {
            id: 18,
            name: '记账未付货款',
            parentId: 17,
            currentView: 'accountUnpaidgoods'
        }, {
            id: 19,
            name: '记账未付筐子款',
            parentId: 17,
            currentView: 'chargeUnpaidbasket'
        }, {
            id: 20,
            name: '记账未收货款',
            parentId: 17,
            currentView: 'bookedGoodsunpaid'
        }, {
            id: 21,
            name: '记账未收筐子款',
            parentId: 17,
            currentView: 'chargenotCollectedbasket'
        },
        // 交易订单
        // 转/记账单
        {
            id: 22,
            name: '转/记账单',
            parentId: '',
            currentView: 'transferBilling'
        }, {
            id: 23,
            name: '发出的',
            parentId: 22,
            currentView: 'dispatched'
        }, {
            id: 24,
            name: '预付款',
            parentId: 23,
            currentView: 'advancePayment'
        }, {
            id: 25,
            name: '借款',
            parentId: 23,
            currentView: 'isBorrowing'
        }, {
            id: 26,
            name: '其他',
            parentId: 23,
            currentView: 'isOther'
        }, {
            id: 27,
            name: '归还预付款',
            parentId: 23,
            currentView: 'returnadvancePayment'
        }, {
            id: 28,
            name: '归还借款',
            parentId: 23,
            currentView: 'returnBorrowing'
        }, {
            id: 29,
            name: '归还记账货款',
            parentId: 23,
            currentView: 'returnAccountpayments'
        }, {
            id: 30,
            name: '归还记账筐子款',
            parentId: 23,
            currentView: 'returnChargebasket'
        }, {
            id: 31,
            name: '收到的',
            parentId: 22,
            currentView: 'received'
        }, {
            id: 32,
            name: '预付款',
            parentId: 31,
            currentView: 'receivedadvancePayment'
        }, {
            id: 33,
            name: '借款',
            parentId: 31,
            currentView: 'receivedBorrowing'
        }, {
            id: 34,
            name: '其他',
            parentId: 31,
            currentView: 'receivedOther'
        }, {
            id: 35,
            name: '归还预付款',
            parentId: 31,
            currentView: 'receivedreturnadvancePayment'
        }, {
            id: 36,
            name: '归还借款',
            parentId: 31,
            currentView: 'receivedreturnBorrowing'
        }, {
            id: 37,
            name: '归还记账货款',
            parentId: 31,
            currentView: 'receivedreturnAccountpayments'
        }, {
            id: 38,
            name: '归还记账筐子款',
            parentId: 31,
            currentView: 'receivedreturnChargebasket'
        }
        // 转/记账单
        //赊账授信
        , {
            id: 39,
            name: '赊账授信',
            parentId: '',
            currentView: 'crediCredit'
        }
        //赊账授信
        //经营往来款
        , {
            id: 40,
            name: '经营往来款',
            parentId: '',
            currentView: 'operatingCurrent'
        }
        //经营往来款
        //往来款
        , {
            id: 41,
            name: '往来款',
            parentId: '',
            currentView: 'comegoMoney'
        }
        //往来款
        //草稿箱
        , {
            id: 42,
            name: '草稿箱',
            parentId: '',
            listHidden: true,
            currentView: 'draftBox'
        }, {
            id: 43,
            name: '销售草稿',
            parentId: 42,
            currentView: 'salesDraft'
        }, {
            id: 44,
            name: '需求草稿',
            parentId: 42,
            currentView: 'demandDraft'
        }
        // 草稿箱
        // 需求单
        , {
            id: 45,
            name: '需求单',
            parentId: '',
            listHidden: true,
            currentView: 'demandList',
        }, {
            id: 46,
            name: '发出的需求单',
            parentId: 45,
            currentView: 'issuedDemandsingle'
        }, {
            id: 47,
            name: '收到的需求单',
            parentId: 45,
            currentView: 'requestsheetReceived'
        },
        // 需求单
        //
        {
            id: 48,
            name: '需求草稿箱',
            parentId: '',
            currentView: 'demandDraft'
        },
        {
            id: 49,
            name: '商品销售单草稿',
            parentId: '',
            currentView: 'salesDraft'
        },
        {
            id: 50,
            name: '发出的需求单',
            parentId: '',
            currentView: 'issuedDemandsingle'
        },
        {
            id: 51,
            name: '收到的需求单',
            parentId: '',
            currentView: 'requestsheetReceived'
        }
    ]

    let menuId = []
    // 经营户 对 经营户
    if ((userType == 6 || userType == 7) && customerType == 1) {
        menuId = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]
    }
    // 经营户 对 采购商
    if ((userType == 6 || userType == 7) && customerType == 2) {
        menuId = [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 49, 51]
    }
    // 经营户 对 供货商
    if ((userType == 6 || userType == 7) && customerType == 3) {
        menuId = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 34, 35, 36, 38, 40, 41, 48, 50]
    }
    // 经营户 对 非平台
    if ((userType == 6 || userType == 7) && customerType == 4) {
        menuId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 31, 32, 33, 34, 40, 41, 49]
    }
    // 经营户 对 散户
    if ((userType == 6 || userType == 7) && customerType == 5) {
        menuId = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16]
    }

    // 供货商 对 经营户
    if ((userType == 10 || userType == 11) && customerType == 1) {
        menuId = [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 49, 51]
    }
    // 供货商 对 采购商
    if ((userType == 10 || userType == 11) && customerType == 2) {
        menuId = [1, 2, 3, 4, 5, 7, 9, 11, 12, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25, 26, 27, 28, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 49, 51]
    }
    // 供货商 对 供货商
    if ((userType == 10 || userType == 11) && customerType == 3) {
        menuId = [1, 2, 3, 5, 7, 9, 14, 15, 16, 17, 19, 21, 22, 23, 25, 26, 28, 30, 31, 33, 34, 35, 38, 40, 41]
    }
    // 供货商 对 非平台
    if ((userType == 10 || userType == 11) && customerType == 4) {
        menuId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 31, 32, 33, 34, 40, 41, 49]
    }
    // 供货商 对 散户
    if ((userType == 10 || userType == 11) && customerType == 5) {
        menuId = [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16]
    }

    // 采购商 对 经营户
    if ((userType == 3 || userType == 4) && customerType == 1) {
        menuId = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 34, 35, 36, 38, 40, 41, 48, 50]
    }
    // 采购商 对 采购商
    if ((userType == 3 || userType == 4) && customerType == 2) {
        menuId = [1, 2, 3, 5, 7, 9, 14, 15, 16, 17, 19, 21, 22, 23, 25, 26, 28, 30, 31, 33, 34, 36, 38, 40, 41]
    }
    // 采购商 对 供货商
    if ((userType == 3 || userType == 4) && customerType == 3) {
        menuId = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 40, 41, 48, 50]
    }
    // 采购商 对 非平台
    if ((userType == 3 || userType == 4) && customerType == 4) {
        menuId = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 31, 33, 34, 40, 41]
    }
    // 采购商 对 散户
    if ((userType == 3 || userType == 4) && customerType == 5) {
        menuId = [1, 2, 3, 5, 7, 8, 9, 11, 13, 14, 15, 16]
    }
    // 过滤id
    let mapMenuList = mapId(menuList, menuId)
    return getJsonTree(mapMenuList, '')
}

function mapId(arr, names) {
    return names.reduce((acc, val) => {
        const index = arr.findIndex(el => el.id === val);
        return acc.concat(arr[index]);
    }, []);
}

function getJsonTree(data, parentId) {
    var itemArr = [];
    for (var i = 0; i < data.length; i++) {
        var node = data[i];
        if (node.parentId == parentId) {
            // var newNode = {
            //     id: node.id,
            //     name: node.name,
            //     currentView: node.currentView,
            //     list: getJsonTree(data, node.id)
            // };

            var newNode = {
                ...node,
                list: getJsonTree(data, node.id)
            }
            if (newNode.list.length == 0) {
                delete newNode.list;
            }
            itemArr.push(newNode);
        }
    }
    return itemArr;
}

// 用户  3:企业采购商, 4:个人采购商, 6:企业经营户, 7:个人经营户, 10:个体供货商, 11:企业供货商
// 1---食堂/饭店   2---生鲜超市     3---农贸市场   
//typeView
//  0 全部 1 自购 2 商品采购单 3 商品销售单 4 筐子售出单 5 筐子购入单 6 报废 7 报失 8 报溢 10 腾空 11 发出的退货退款 
//  12 收到的退货退款 13 退还筐子 14 退入筐子 20 销售记账 21 配送退货 22 配送退筐 24 配送单 25 添加自家已有 26 商品报溢单
export function isCurrentBasketTypeFilter(param, customerType) {
    let menuList = [{
            id: 1,
            name: "自购"
        },
        {
            id: 2,
            name: "商品采购单"
        },
        {
            id: 3,
            name: "商品销售单"
        },
        {
            id: 4,
            name: "筐子售出单"
        },
        {
            id: 5,
            name: "筐子购入单"
        },
        {
            id: 6,
            name: "报废"
        },
        {
            id: 7,
            name: "报失"
        },
        {
            id: 8,
            name: "报溢"
        },
        {
            id: 10,
            name: "腾空"
        },
        {
            id: 11,
            name: "发出的退货退款"
        },
        {
            id: 12,
            name: "收到的退货退款"
        },
        {
            id: 13,
            name: "退还筐子"
        },
        {
            id: 14,
            name: "退入筐子"
        },
        {
            id: 20,
            name: "销售记账"
        },
        {
            id: 21,
            name: "配送退款"
        },
        {
            id: 22,
            name: "配送退筐"
        },
        {
            id: 24,
            name: "配送单"
        },
        {
            id: 25,
            name: "自有筐子单"
        },
        {
            id: 26,
            name: "商品报溢单"
        },
        {
            id: 27,
            name: "装筐单"
        },
    ]

    let menuId = []
    // 经营户
    if (param.usertype == 6 || param.usertype == 7) {
        menuId = [5, 4, 14, 13, 6, 7, 8, 1, 10, 25, 2, 3, 26, 12, 11,27]
    }
    // 供货商
    if (param.usertype == 10 || param.usertype == 11) {
        menuId = [5, 4, 14, 13, 6, 7, 8, 1, 10, 25, 3, 26, 12,27]
    }
    // 采购商
    if (param.usertype == 3 || param.usertype == 4) {
        // 生鲜超市
        if (param.purchaseType == 2) {
            menuId = [5, 4, 14, 13, 6, 7, 8, 1, 10, 25, 2, 26, 11, 24, 21, 22, 20,27]
        }
        // 农贸市场
        if (param.purchaseType == 3) {
            menuId = [5, 4, 14, 13, 6, 7, 8, 1, 10, 25, 3, 26, 11, 20,27]
        }
        // 食堂饭店
        if (param.purchaseType == 1) {
            menuId = [5, 4, 14, 13, 6, 7, 8, 1, 10, 25, 3, 26, 11,27]
        }
    }
    // 过滤id
    let mapMenuList = mapId(menuList, menuId)
    return mapMenuList
}