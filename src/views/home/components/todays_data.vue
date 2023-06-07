<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> 今日数据 </span>
      <div class="iaes">
        <div class="item">资金收入：{{ formData.allIncome }}元</div>
        <div class="item">资金支出：{{ formData.allDisburse }}元</div>
      </div>
    </div>
    <div class="content">
      <el-row class="statistics-detail" :gutter="60">
        <el-col :xl="9" :lg="9" :md="12" :sm="24" :xs="24" class="item">
          <h2>
            {{ tabList[0].name }}：{{ tabList[0].data }}万
            <span
              v-if="tabList[0].name1"
              style="name1
                margin-left: 15px;
                color: rgba(1, 6, 33, 0.55);
                font-size: 14px;
              "
              >{{ tabList[0].name1 }}：{{ tabList[0].data1 }}元</span
            >
          </h2>
          <el-row>
            <el-col :span="12">
              <div class="name">
                {{ tabList[3].name }}：{{ tabList[3].data }}元
              </div>
              <div class="price">
                <span>成本：{{ formData.goodsCost }}元</span
                ><span style="margin-left: 15px"
                  >利润：{{ formData.goodsProfit }}元</span
                >
              </div>
            </el-col>
            <el-col :span="6">
              <div class="name">{{ tabList[4].name }}</div>
              <div class="price">{{ tabList[4].data }}元</div>
            </el-col>
            <el-col :span="6">
              <div class="name">{{ tabList[5].name }}</div>
              <div class="price">{{ tabList[5].data }}元</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xl="9" :lg="9" :md="12" :sm="24" :xs="24" class="item">
          <h2>
            {{ tabList[1].name }}： {{ tabList[1].data }}万
            <span
              v-if="tabList[1].name1"
              style="name1
                margin-left: 15px;
                color: rgba(1, 6, 33, 0.55);
                font-size: 14px;
              "
              >{{ tabList[1].name1 }}：{{ tabList[1].data1 }}元</span
            >
          </h2>
          <el-row>
            <el-col :span="8">
              <div class="name">{{ tabList[6].name }}</div>
              <div class="price">{{ tabList[6].data }}元</div>
            </el-col>
            <el-col :span="8">
              <div class="name">{{ tabList[7].name }}</div>
              <div class="price">{{ tabList[7].data }}元</div>
            </el-col>
            <el-col :span="8" v-if="tabList[8].name">
              <div class="name">{{ tabList[8].name }}</div>
              <div class="price">{{ tabList[8].data }}元</div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xl="6" :lg="6" :md="12" :sm="24" :xs="24" class="item">
          <h2>{{ tabList[2].name }}</h2>
          <el-row>
            <el-col :span="12">
              <div class="name">{{ tabList[9].name }}</div>
              <div class="price">{{ tabList[9].data }}元</div>
            </el-col>
            <el-col :span="12" v-if="tabList[10].name">
              <div class="name">{{ tabList[10].name }}</div>
              <div class="price">{{ tabList[10].data }}元</div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <!-- <div class="footer">
        <div class="item">商品生产成本：888,888.88万</div>
        <div class="item">空筐售出金额：888,888.88万</div>
      </div> -->
    </div>
  </div>
</template>

<script>
import { statistics } from "@/api/homePage/index";
export default {
  data() {
    return {
      formData: {},
      tabList: [
        { name: "销售金额", data: 0 },
        { name: "采购金额", data: 0 },
        { name: "商品生产成本" },
        { name: "商品销售金额", data: 0 },
        { name: "销售退货利润", data: 0 },
        { name: "筐子销售金额", data: 0 },
        { name: "商品采购金额", data: 0 },
        { name: "采购退货亏损", data: 0 },
        { name: "筐子采购金额", data: 0 },
        { name: "商品生产成本", data: 0 },
        { name: "" },
      ],
    };
  },
  methods: {
    getstartDay() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date().getDate();
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, m, d].join("-") + " 00:00:00";
    },
    getstartDay1() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date().getDate();
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, m, d].join("-") + " 23:59:59";
    },
    init() {
      let param = {
        startTime:parseInt(new Date(this.getstartDay()).getTime() / 1000), // 全部传1000000000
        endTime: parseInt(new Date(this.getstartDay1()).getTime() / 1000),
        type: 1,
      };
      statistics(param).then((res) => {
        if (res.status == 200) {
          this.formData = res.data;
          this.userFi();
        } else {
          this.userFi();
        }
      });
    },
    userFi() {
      let param = "";
      param = JSON.parse(localStorage.getItem("userInfo"));

      // 经营户 1
      if (param.usertype == 6 || param.usertype == 7) {
        this.tabList = [
          {
            name: "销售金额",
            data: this.formData.allSell,
            name1: "利润",
            data1: this.formData.allProfit,
          },
          { name: "采购金额", data: this.formData.allBuy },
          { name: "商品生产成本" },
          { name: "商品销售金额", data: this.formData.goodsSell },
          { name: "销售退货利润", data: this.formData.sellReturnProfit },
          { name: "筐子销售金额", data: this.formData.sellBasket },
          { name: "商品采购金额", data: this.formData.goodsBuy },
          { name: "采购退货亏损", data: this.formData.differencePrice },
          { name: "筐子采购金额", data: this.formData.basketBuy },
          { name: "商品生产成本", data: this.formData.goodsProductCost },
          { name: "" },
        ];
      }
      // 供货商 2
      if (param.usertype == 10 || param.usertype == 11) {
        this.tabList = [
          {
            name: "销售金额",
            data: this.formData.allSell,
            name1: "利润",
            data1: this.formData.allProfit,
          },
          { name: "采购金额", data: this.formData.allBuy },
          { name: "商品生产成本" },
          { name: "商品销售金额", data: this.formData.goodsSell },
          { name: "销售退货利润", data: this.formData.sellReturnProfit },
          { name: "筐子销售金额", data: this.formData.sellBasket },
          { name: "商品采购金额", data: this.formData.goodsBuy },
          { name: "采购退货亏损", data: this.formData.differencePrice },
          { name: "筐子采购金额", data: this.formData.basketBuy },
          { name: "商品生产成本", data: this.formData.goodsProductCost },
          { name: "" },
        ];
      }
      // 采购商
      if (param.usertype == 3 || param.usertype == 4) {
        // 生鲜超市 3
        if (param.purchaseType == 2) {
          this.tabList = [
            { name: "采购金额", data: this.formData.allBuy },
            {
              name: "配送金额",
              data: this.formData.allDelivery,
              name1: "商品利润",
              data1: this.formData.goodsProfit,
            },
            { name: "销售记账", data: this.formData.allSell },
            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            { name: "筐子采购金额", data: this.formData.basketBuy },
            { name: "商品金额", data: this.formData.deliveryGoodsPrice },
            { name: "配送退货利润", data: this.formData.returnGoodsProfit },
            { name: "筐子金额", data: this.formData.deliveryBasketPrice },
            { name: "商品金额", data: this.formData.goodsSell },
            { name: "筐子金额", data: this.formData.sellBasket },
          ];
        }
        // 农贸市场 4
        if (param.purchaseType == 3) {
          this.tabList = [
            { name: "采购金额", data: this.formData.allBuy },
            {
              name: "销售金额",
              data: this.formData.allSell,
              name1: "销售记账利润",
              data1: this.formData.goodsProfit,
            },
            { name: "商品生产成本" },
            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            { name: "筐子采购金额", data: this.formData.basketBuy },
            { name: "商品销售记账金额", data: this.formData.goodsSell },
            { name: "筐子销售金额", data: this.formData.sellBasket },
            { name: "", data: "" },
            { name: "商品生产成本", data: this.formData.goodsProductCost },
            { name: "" },
          ];
        }
        // 食堂饭店 5
        if (param.purchaseType == 1) {
          this.tabList = [
            { name: "采购金额", data: this.formData.allBuy },
            {
              name: "销售金额",
              data: this.formData.allSell,
              name1: "菜品销售利润",
              data1: this.formData.varietySellProfit,
            },
            { name: "商品生产成本" },
            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            { name: "筐子采购金额", data: this.formData.basketBuy },
            { name: "菜品销售金额", data: this.formData.varietySellPrice },
            { name: "空筐售出金额", data: this.formData.sellEmptyPrice },
            { name: "" },
            { name: "商品金额", data: this.formData.goodsSell },
            { name: "" },
          ];
        }
      }
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.header {
  .iaes {
    display: flex;
    align-items: center;

    .item {
      margin-right: 60px;
      font-size: 16px;
      color: rgba(1, 6, 33, 0.9);
    }
  }
}

.content {
  padding: 0 24px;

  .statistics-detail {
    padding: 0px 0 24px;
    border-bottom: solid 1px #e9e9e9;

    .item {
      position: relative;
      margin-top: 16px;
      &:last-child::before {
        display: none;
      }
      &::before {
        content: "";
        position: absolute;
        right: 10px;
        top: 50%;
        height: 48px;
        transform: translateY(-50%);
        border-right: solid 1px #d0d0d2;
      }
    }

    h2 {
      font-size: 16px;
      color: rgba(1, 6, 33, 0.9);
      font-weight: normal;
      margin-bottom: 16px;
    }

    .name,
    .price {
      font-size: 14px;
      color: rgba(1, 6, 33, 0.75);
    }

    .price {
      margin-top: 8px;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    height: 54px;

    .item {
      font-size: 16px;
      color: rgba(1, 6, 33, 0.9);
      margin-right: 60px;
    }
  }
}
</style>
