<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> 营收趋势 </span>
      <div class="chart-info">
        <div class="info">
          <div
            v-for="(item, index) in formList"
            :key="index"
            :class="['item', item.color]"
          >
            {{ item.name }}
          </div>
          <!-- <div class="item color2">配送金额</div>
          <div class="item color3">销售记账金额</div> -->
        </div>
        <el-radio-group class="unmover" v-model="radio1" @input="init()">
          <el-radio-button label="本月"></el-radio-button>
          <el-radio-button label="今年"></el-radio-button>
          <el-radio-button label="全部"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="content">
      <div id="mychart"></div>
      <div class="statistics">
        <el-row class="statistics-detail" :gutter="60">
          <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24" class="item">
            <h2>
              {{ tabList[0].name }}：{{ tabList[0].data }}万<span
                v-if="tabList[1].name"
                >{{ tabList[1].name }}：{{ tabList[1].data }}元</span
              >
            </h2>
            <el-row>
              <el-col :span="8">
                <div class="name">
                  {{ tabList[6].name }}
                  <el-popover
                    placement="bottom"
                    width="200"
                    trigger="hover"
                    v-if="tabList[6].name1"
                  >
                    <div>
                      <p v-for="(item, index) in tabList[6].data1" :key="index">
                        {{ item.name }}：{{ item.data }}元
                      </p>
                      <!-- <p>利润：{{ formData.goodsProfit }}元</p> -->
                    </div>
                    <i
                      slot="reference"
                      class="el-icon-warning-outline"
                      style="
                        font-size: 15px;
                        color: var(--color-primary);
                        margin-right: 5px;
                      "
                    ></i>
                  </el-popover>
                </div>
                <div class="price">{{ tabList[6].data }}元</div>
              </el-col>
              <el-col :span="8">
                <div class="name">{{ tabList[7].name }}</div>
                <div class="price">{{ tabList[7].data }}元</div>
              </el-col>
              <el-col :span="8">
                <div class="name">
                  {{ tabList[8].name }}
                  <el-popover
                    placement="bottom"
                    width="100"
                    trigger="hover"
                    v-if="tabList[8].name1"
                  >
                    <div>
                      <p v-for="(item, index) in tabList[8].data1" :key="index">
                        {{ item.name }}：{{ item.data1 }}元
                      </p>
                    </div>
                    <i
                      slot="reference"
                      class="el-icon-warning-outline"
                      style="
                        font-size: 15px;
                        color: var(--color-primary);
                        margin-right: 5px;
                      "
                    ></i>
                  </el-popover>
                </div>
                <div class="price">{{ tabList[8].data }}元</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24" class="item">
            <h2>
              {{ tabList[2].name }}：{{ tabList[2].data }}万
              <span v-if="tabList[3].name"
                >{{ tabList[3].name }}：{{ tabList[3].data }}元</span
              >
            </h2>
            <el-row>
              <el-col :span="8">
                <div class="name">
                  {{ tabList[9].name
                  }}<el-popover
                    placement="bottom"
                    width="200"
                    trigger="hover"
                    v-if="tabList[9].name1"
                  >
                    <div>
                      <p v-for="(item, index) in tabList[9].data1" :key="index">
                        {{ item.name }}：{{ item.data }}元
                      </p>
                    </div>
                    <i
                      slot="reference"
                      class="el-icon-warning-outline"
                      style="
                        font-size: 15px;
                        color: var(--color-primary);
                        margin-right: 5px;
                      "
                    ></i>
                  </el-popover>
                </div>
                <div class="price">{{ tabList[9].data }}元</div>
              </el-col>
              <el-col :span="8" v-if="tabList[10].name">
                <div class="name">{{ tabList[10].name }}</div>
                <div class="price">{{ tabList[10].data }}元</div>
              </el-col>
              <el-col :span="8">
                <div class="name">
                  {{ tabList[11].name }}
                  <el-popover
                    placement="bottom"
                    width="100"
                    trigger="hover"
                    v-if="tabList[11].name1"
                  >
                    <div>
                      <p
                        v-for="(item, index) in tabList[11].data1"
                        :key="index"
                      >
                        {{ item.name }}：{{ item.data }}元
                      </p>
                    </div>
                    <i
                      slot="reference"
                      class="el-icon-warning-outline"
                      style="
                        font-size: 15px;
                        color: var(--color-primary);
                        margin-right: 5px;
                      "
                    ></i>
                  </el-popover>
                </div>
                <div class="price">{{ tabList[11].data }}元</div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24" class="item">
            <h2>
              {{ tabList[4].name }}：<span v-if="tabList[4].data">{{
                tabList[4].data
              }}</span
              >万<span v-if="tabList[5].name"
                >{{ tabList[5].name }}：{{ tabList[5].data }}元</span
              >
            </h2>
            <el-row>
              <el-col :span="12">
                <div class="name">{{ tabList[12].name }}</div>
                <div class="price">{{ tabList[12].data }}元</div>
              </el-col>
              <el-col :span="12" v-if="tabList[13].name">
                <div class="name">{{ tabList[13].name }}</div>
                <div class="price">{{ tabList[13].data }}元</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <div class="footer">
          <div class="item" v-if="tabList[14].name">
            {{ tabList[14].name }}：{{ tabList[14].data }}万
          </div>
          <div class="item" v-if="tabList[15].name">
            {{ tabList[15].name }}：{{ tabList[15].data }}万
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChartMixin from "../mixin/index";
import { statistics } from "@/api/homePage/index";
import { parseTime } from "@/utils/common";
export default {
  mixins: [ChartMixin],
  data() {
    return {
      radio1: "本月",
      formData: { goodsCost: 0, goodsProfit: 0, tendency: [] },
      formList: [],
      tabList: [
        { name: "年销售金额", data: "" },
        { name: "年利润", data: "" },
        { name: "年采购金额", data: "" },
        { name: "", data: "" },
        { name: "年商品生产成本", data: "" },
        { name: "", data: "" },

        { name: "商品销售金额", data: "" },
        { name: "销售退货利润", data: "" },
        { name: "筐子销售金额", data: "" },

        { name: "商品采购金额", data: "" },
        { name: "采购退货亏损", data: "" },
        { name: "筐子采购金额", data: "" },

        { name: "商品生产成本", data: "" },
        { name: "", data: "" },

        { name: "", data: "" },
        { name: "", data: "" },
      ],
    };
  },
  methods: {
    getstartMonth() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = "01";
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, m, "01"].join("-") + " 00:00:00";
    },
    getLastMNonth() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date(y, m, 0).getDate(); //获取当月最后一日
      m = m < 10 ? "0" + m : m; //月份补 0
      d = d < 10 ? "0" + d : d; //日数补 0
      return [y, m, "31"].join("-") + " 23:59:59";
    },
    getstartYeaar() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = "01";
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, "01", "01"].join("-") + " 00:00:00";
    },
    getLastYear() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date(y, m, 0).getDate(); //获取当月最后一日
      m = m < 10 ? "0" + m : m; //月份补 0
      d = d < 10 ? "0" + d : d; //日数补 0
      return [y, "12", "31"].join("-") + " 23:59:59";
    },
    init() {
      let type, startTime, endTime;
      if (this.radio1 == "本月") {
        type = 2;
        startTime = this.getstartMonth();
        endTime = this.getLastMNonth();
      } else if (this.radio1 == "今年") {
        type = 3;
        startTime = this.getstartYeaar();
        endTime = this.getLastYear();
      } else {
        type = 4;
        startTime = 1000000000;
        endTime = 1000000000;
      }
      let param = {
        startTime: parseInt(new Date(startTime).getTime() / 1000), // 全部传1000000000
        endTime: parseInt(new Date(endTime).getTime() / 1000),
        type: type,
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
      let Year = [];
      let series = [];
      let buy_price = {
        name: "销售金额", //销售记账
        type: "line",
        showSymbol: false,
        data: [],
      };
      let sell_price = {
        name: "采购金额",
        type: "line",
        showSymbol: false,
        data: [],
      };
      let order_add_price = {
        name: "商品生产成本",
        type: "line",
        showSymbol: false,
        data: [],
      };
      let delivery_price = {
        name: "配送金额",
        type: "line",
        showSymbol: false,
        data: [],
      };

      for (let i = 0; i < this.formData.tendency.length; i++) {
        const el = this.formData.tendency[i];
        if (this.radio1 == "本月") {
          Year.push(parseTime(el.timestamp, "{y}-{m}-{d}"));
        } else if (this.radio1 == "今年") {
          Year.push(parseTime(el.timestamp, "{y}-{m}"));
        } else {
          Year.push(parseTime(el.timestamp, "{y}-{m}"));
        }
        buy_price.data.push(el.buy_price);
        sell_price.data.push(el.sell_price);
        order_add_price.data.push(el.order_add_price);
        delivery_price.data.push(el.delivery_price);
      }

      let param1 = "";
      param1 = JSON.parse(localStorage.getItem("userInfo"));
      // 经营户 1
      if (param1.usertype == 6 || param1.usertype == 7) {
        this.formList = [
          { color: "color1", name: "销售金额" },
          { color: "color2", name: "采购金额" },
        ];
        series = [buy_price, sell_price];

        this.tabList = [
          { name: "年销售金额", data: this.formData.allSell },
          { name: "年利润", data: this.formData.goodsProfit },
          { name: "年采购金额", data: this.formData.allBuy },
          { name: "", data: "" },
          { name: "年商品生产成本", data: this.formData.goodsProductCost },
          { name: "", data: "" },

          {
            name: "商品销售金额",
            data: this.formData.goodsSell,
            name1: true,
            data1: [
              { name: "成本:", data: this.formData.goodsCost },
              { name: "利润:", data: this.formData.goodsProfit },
            ],
          },
          { name: "销售退货利润", data: this.formData.sellReturnProfit },
          {
            name: "筐子销售金额",
            data: this.formData.sellBasket,
            name1: true,
            data1: [
              { name: "载货筐子售出:", data: this.formData.sellLoadPrice },
              { name: "空筐售出:", data: this.formData.sellEmptyPrice },
              { name: "空筐报废:", data: this.formData.sellScarpPrice },
              { name: "记账未收筐子款:", data: this.formData.sellNoteBasket },
            ],
          },

          { name: "商品采购金额", data: this.formData.goodsBuy },
          { name: "采购退货亏损", data: this.formData.differencePrice },
          {
            name: "筐子采购金额",
            data: this.formData.basketBuy,
            name1: true,
            data1: [
              { name: "载货筐子购入:", data: this.formData.buyLoadPrice },
              { name: "空筐购入:", data: this.formData.buyEmptyPrice },
              { name: "空筐自购:", data: this.formData.buyMyselfPrice },
              { name: "记账未付筐子款:", data: this.formData.buyNoteBasket },
            ],
          },

          { name: "商品生产成本", data: this.formData.goodsProductCost },
          { name: "", data: "" },

          { name: "", data: "" },
          { name: "", data: "" },
        ];
      } // 供货商 2
      if (param1.usertype == 10 || param1.usertype == 11) {
        this.formList = [
          { color: "color1", name: "销售金额" },
          { color: "color2", name: "采购金额" },
          { color: "color3", name: "商品生产成本" },
        ];
        series = [buy_price, sell_price, order_add_price];

        this.tabList = [
          { name: "年销售金额", data: this.formData.allSell },
          { name: "年利润", data: this.formData.allProfit },
          { name: "年采购金额", data: this.formData.allBuy },
          { name: "", data: "" },
          { name: "年商品生产成本", data: this.formData.goodsProductCost },
          { name: "", data: "" },

          {
            name: "商品销售金额",
            data: this.formData.goodsSell,
            name1: true,
            data1: [
              { name: "成本", data: this.formData.goodsCost },
              { name: "利润", data: this.formData.goodsProfit },
            ],
          },

          { name: "销售退货利润", data: this.formData.sellReturnProfit },
          {
            name: "筐子销售金额",
            data: this.formData.sellBasket,
            name1: true,
            data1: [
              { name: "载货筐子售出:", data: this.formData.sellLoadPrice },
              { name: "空筐售出:", data: this.formData.sellEmptyPrice },
              { name: "空筐报废:", data: this.formData.sellScarpPrice },
              { name: "记账未收筐子款:", data: this.formData.sellNoteBasket },
            ],
          },

          { name: "商品采购金额", data: this.formData.goodsBuy },
          { name: "采购退货亏损", data: this.formData.differencePrice },
          {
            name: "筐子采购金额",
            data: this.formData.basketBuy,
            name1: true,
            data1: [
              { name: "载货筐子购入:", data: this.formData.buyLoadPrice },
              { name: "空筐购入:", data: this.formData.buyEmptyPrice },
              { name: "空筐自购:", data: this.formData.buyMyselfPrice },
              { name: "记账未付筐子款:", data: this.formData.buyNoteBasket },
            ],
          },

          { name: "商品生产成本", data: this.formData.goodsProductCost },
          { name: "", data: "" },

          { name: "", data: "" },
          { name: "", data: "" },
        ];
      } // 采购商
      if (param1.usertype == 3 || param1.usertype == 4) {
        // 生鲜超市 3
        if (param1.purchaseType == 2) {
          this.formList = [
            { color: "color1", name: "采购金额" },
            { color: "color2", name: "配送金额" },
            { color: "color3", name: "销售金额" },
          ];
          series = [sell_price, delivery_price, buy_price];

          this.tabList = [
            { name: "年采购金额", data: this.formData.allBuy },
            { name: "", data: "" },
            { name: "年配送金额", data: this.formData.allDelivery },
            { name: "年商品配送利润", data: this.formData.deliveryGoodsPrice },
            { name: "年销售记账", data: this.formData.allSell },
            { name: "年销售记账利润", data: this.formData.allProfit },

            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            {
              name: "筐子采购金额",
              data: this.formData.basketBuy,
              name1: true,
              data1: [
                { name: "载货筐子购入:", data: this.formData.buyLoadPrice },
                { name: "空筐购入:", data: this.formData.buyEmptyPrice },
                { name: "空筐自购:", data: this.formData.buyMyselfPrice },
                { name: "记账未付筐子款:", data: this.formData.buyNoteBasket },
              ],
            },

            {
              name: "商品金额",
              data: this.formData.deliveryGoodsPrice,
              name1: true,
              data1: [
                { name: "成本:", data: this.formData.goodsCost },
                { name: "利润:", data: this.formData.goodsProfit },
              ],
            },
            { name: "配送退货利润", data: this.formData.returnGoodsProfit },
            { name: "筐子金额", data: this.formData.deliveryBasketPrice },

            { name: "商品金额", data: this.formData.goodsSell },
            { name: "筐子金额", data: this.formData.sellBasket },

            { name: "商品生产成本", data: this.formData.goodsProductCost },
            { name: "空筐售出金额", data: this.formData.sellEmptyBasketPrice },
          ];
        }
        // 农贸市场 4
        if (param1.purchaseType == 3) {
          this.formList = [
            { color: "color1", name: "销售金额" },
            { color: "color2", name: "采购金额" },
          ];
          series = [buy_price, sell_price];

          this.tabList = [
            { name: "年采购金额", data: this.formData.allBuy },
            { name: "", data: "" },
            { name: "年销售金额", data: this.formData.allSell },
            { name: "年销售记账利润", data: this.formData.allProfit },
            { name: "年商品生产成本", data: "" },
            { name: "", data: "" },

            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            {
              name: "筐子采购金额",
              data: this.formData.basketBuy,
              name1: true,
              data1: [
                { name: "载货筐子购入:", data: this.formData.buyLoadPrice },
                { name: "空筐购入:", data: this.formData.buyEmptyPrice },
                { name: "空筐自购:", data: this.formData.buyMyselfPrice },
                { name: "记账未付筐子款:", data: this.formData.buyNoteBasket },
              ],
            },

            {
              name: "商品销售记账金额",
              data: this.formData.goodsSell,
              name1: true,
              data1: [
                { name: "销售记账成本:", data: this.formData.goodsCost },
                { name: "销售记账利润:", data: this.formData.goodsProfit },
              ],
            },
            { name: "", data: "" },
            {
              name: "筐子销售金额",
              data: this.formData.sellBasket,
              name1: true,
              data1: [
                { name: "载货筐子售出:", data: this.formData.sellLoadPrice },
                { name: "空筐售出:", data: this.formData.sellEmptyPrice },
                { name: "空筐报废:", data: this.formData.sellScarpPrice },
                { name: "记账未收筐子款:", data: this.formData.sellNoteBasket },
              ],
            },

            { name: "商品生产成本", data: this.formData.goodsProductCost },
            { name: "", data: "" },

            { name: "", data: "" },
            { name: "", data: "" },
          ];
        } // 食堂饭店 5
        if (param1.purchaseType == 1) {
          this.formList = [
            { color: "color1", name: "销售金额" },
            { color: "color2", name: "采购金额" },
          ];
          series = [buy_price, sell_price];

          this.tabList = [
            { name: "年采购金额", data: this.formData.allBuy },
            { name: "", data: "" },
            { name: "年销售金额", data: this.formData.allSell },
            { name: "菜品销售利润", data: this.formData.varietySellProfit },
            { name: "年商品生产成本", data: "" },
            { name: "", data: "" },

            { name: "商品采购金额", data: this.formData.goodsBuy },
            { name: "采购退货亏损", data: this.formData.differencePrice },
            {
              name: "筐子采购金额",
              data: this.formData.basketBuy,
              name1: true,
              data1: [
                { name: "载货筐子购入:", data: this.formData.buyLoadPrice },
                { name: "空筐购入:", data: this.formData.buyEmptyPrice },
                { name: "空筐自购:", data: this.formData.buyMyselfPrice },
                { name: "记账未付筐子款:", data: this.formData.buyNoteBasket },
              ],
            },

            { name: "菜品销售金额", data: this.formData.varietySellPrice },
            { name: "", data: "" },
            { name: "空筐售出金额", data: this.formData.sellEmptyBasketPrice },

            { name: "商品生产成本", data: this.formData.goodsProductCost },
            { name: "", data: "" },

            { name: "", data: "" },
            { name: "", data: "" },
          ];
        }
      }

      this.initChart(Year, series);
    },
    initChart(Year, series) {
      this.createChart({
        dom: "mychart",
        option: {
          grid: {
            left: "20px",
            right: "20px",
            bottom: "10px",
            top: "27px",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            valueFormatter: (value) => value + "k",
          },
          xAxis: {
            type: "category",
            data: Year,
            axisLine: {
              lineStyle: {
                color: "#E9E9E9",
              },
            },
            axisLabel: {
              formatter(value) {
                let data = value.split("-");
                // return data[1] + "\n\n" + data[0];
                return value;
              },
              color: "#0106218C",
              align: "center",
              height: "69px",
            },
            axisTick: {
              show: false,
            },
          },
          yAxis: {
            axisLabel: {
              formatter: (value) => {
                return value.toFixed(1) + " K";
              },
            },
            splitNumber: 4,
          },
          color: ["#FFC53D", "#6DC7B8", "#85A5FF"],
          series: series,
        },
      });
    },
  },
  mounted() {
    this.init();
    // this.initChart();
  },
};
</script>

<style lang="scss" scoped>
#mychart {
  width: 100%;
  height: 296px;
  border-bottom: solid 1px #e9e9e9;
}

.chart-info {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;

  .info {
    display: flex;
    align-items: center;

    .item {
      font-size: 14px;
      color: rgba(1, 6, 33, 0.9);
      margin-right: 16px;
      display: flex;
      align-items: center;

      &::before {
        content: "";
        display: block;
        height: 8px;
        width: 8px;
        border-radius: 2em;
        margin-right: 8px;
      }

      &.color1::before {
        background-color: #ffc53d;
      }

      &.color2::before {
        background-color: #6dc7b8;
      }

      &.color3::before {
        background-color: #85a5ff;
      }
    }
  }
}

.statistics {
  padding: 0 24px;

  .statistics-detail {
    padding: 0 0 24px;
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
        right: 0px;
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

      span {
        margin-left: 24px;
        color: rgba(1, 6, 33, 0.55);
      }
    }

    .name,
    .price {
      font-size: 14px;
      color: rgba(1, 6, 33, 0.75);
    }

    .price {
      margin-top: 8px;
    }

    .name i {
      color: #00a499;
      margin-left: 5px;
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
