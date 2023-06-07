<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> 往来款<i class="el-icon-arrow-right" /> </span>
    </div>
    <div class="content">
      <div class="balance">
        往来款余额：<span v-html="balanceNum(formData.paymentsPrice)"></span>元
      </div>
      <el-row :gutter="32">
        <el-col :xl="9" :lg="10" :md="24" :sm="12" :xs="24">
          <div class="left-panel">
            <div class="panel-balance">
              经营往来款余额：<el-tooltip
                class="item"
                effect="dark"
                content="【剩余应收】-【剩余应付】"
                placement="top"
              >
                <i
                  class="el-icon-question"
                  style="color: #0ba198"
                ></i> </el-tooltip
              ><span v-html="balanceNum(formData.businessPayments)"></span
              >元
            </div>
            <div class="chart-main">
              <div class="item">
                <div class="legend">
                  <div class="child-item color1">
                    <div class="name">剩余应收(元)</div>
                    <div class="number" v-html="balanceNum(formData.accountsReceivable)"></div>
                  </div>
                  <div class="child-item">
                    <div class="name">已收(元)</div>
                    <div class="number">{{ formData.overReceiveAmount }}</div>
                  </div>
                </div>
                <div class="chart" id="mychart6"></div>
              </div>
              <div class="item">
                <div class="legend">
                  <div class="child-item color2">
                    <div class="name">剩余应付(元)</div>
                    <div class="number">{{ formData.dealWithRemaining }}</div>
                  </div>
                  <div class="child-item">
                    <div class="name">已付(元)</div>
                    <div class="number">{{ formData.overPayAmount }}</div>
                  </div>
                </div>
                <div class="chart" id="mychart7"></div>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :xl="15" :lg="14" :md="24" :sm="12" :xs="24">
          <div class="right-panel">
            <div class="panel-balance">
              其他往来款余额：<el-tooltip
                class="item"
                effect="dark"
                content="【剩余其他支出】-【剩余其他收入】"
                placement="top"
              >
                <i
                  class="el-icon-question"
                  style="color: #0ba198"
                ></i> </el-tooltip
              ><span v-html="balanceNum(formData.otherPaymentsPrice)"></span
              >元
            </div>
            <div class="chart-main">
              <div class="item">
                <div class="legend">
                  <div class="space">
                    <div class="child-item color2">
                      <div class="name">剩余其他收入(元)</div>
                      <div class="number">
                        {{ formData.surplusOtherIncome }}
                      </div>
                    </div>
                  </div>
                  <div class="space">
                    <div class="child-item color3">
                      <div class="name">已抵用收款金额</div>
                      <div class="number">{{ formData.offsetCollection }}</div>
                    </div>
                    <div class="child-item">
                      <div class="name">已付归还金额</div>
                      <div class="number">{{ formData.issuedOthers }}</div>
                    </div>
                  </div>
                </div>
                <div class="chart" id="mychart8"></div>
              </div>
              <div class="item">
                <div class="legend">
                  <div class="space">
                    <div class="child-item color1">
                      <div class="name">剩余其他支出(元)</div>
                      <div class="number">
                        {{ formData.surplusOtherExpenses }}
                      </div>
                    </div>
                  </div>
                  <div class="space">
                    <div class="child-item color3">
                      <div class="name">已抵用付款金额</div>
                      <div class="number">{{ formData.offsetPayment }}</div>
                    </div>
                    <div class="child-item">
                      <div class="name">已收归还金额</div>
                      <div class="number">{{ formData.receivedOthers }}</div>
                    </div>
                  </div>
                </div>
                <div class="chart" id="mychart9"></div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import ChartMixin from "../mixin/index";
import { businessPayments } from "@/api/homePage/index";

export default {
  mixins: [ChartMixin],
  data() {
    return {
      formData: {},
      chartData1: [
        { value: 328, name: "已收" },
        { value: 3288, name: "剩余应收" },
      ],
      chartData2: [
        { value: 3288, name: "已付" },
        { value: 328, name: "剩余应付" },
      ],
      chartData3: [
        { value: 3288, name: "剩余其他收入" },
        { value: 328, name: "已抵用收款金额" },
        { value: 328, name: "已付归还金额" },
      ],
      chartData4: [
        { value: 3288, name: "剩余其他支出" },
        { value: 328, name: "已抵用付款金额" },
        { value: 328, name: "已收归还金额" },
      ],
    };
  },
  methods: {
    balanceNum(val) {
      if (parseInt(val) == 0) {
        return (
          "<span style='color:rgba(1, 6, 33, 0.75);'>" +
          val +
          "</span>"
        );
      } else if (parseInt(val) > 0) {
        return (
          "<span style='color:rgba(36, 139, 57, 1);'>+" +
          val +
          "</span>"
        );
      } else {
        return (
          "<span style='color:rgba(221, 76, 77, 1);'>" +
          val +
          "</span>"
        );
      }
    },
    setOptions(type, title, amount, data, color) {
      return {
        title: {
          text: title,
          subtext: amount,
          textStyle: {
            fontSize: 14,
            color: "rgba(1,6,33,0.75)",
            fontWeight: 400,
            width: 95,
            overflow: "truncate",
          },
          subtextStyle: {
            fontSize: 14,
            color: "rgba(1,6,33,0.75)",
            fontWeight: 400,
            width: 90,
            overflow: "truncate",
          },
          textAlign: "center", //图例文字居中显示
          x: type == 1 ? "46%" : "47%", //距离左边的距离
          y: type == 1 ? "35%" : "125px", //距离上边的距离
        },
        tooltip: {
          trigger: "item",
        },
        color: type == 1 ? ["#409EE6", color] : ["#409EE6", "#FF9C6E", color],
        series: [
          {
            type: "pie",
            avoidLabelOverlap: false,
            center: type == 1 ? ["50%", "50%"] : ["center", "70px"],
            radius: type == 1 ? ["60%", "90%"] : ["60%"],
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: data,
          },
        ],
      };
    },
    initChart() {
      const self = this;
      businessPayments().then((res) => {
        this.formData = res.data;
        self.chartData1 = [
          { value: this.formData.overReceiveAmount, name: "已收" },
          { value: this.formData.accountsReceivable, name: "剩余应收" },
        ];
        self.createChart({
          dom: "mychart6",
          option: self.setOptions(
            1,
            "总应收",
            this.formData.sales,
            self.chartData1,
            "#49BAAB"
          ),
        });
        self.chartData2 = [
          { value: this.formData.overPayAmount, name: "已付" },
          { value: this.formData.dealWithRemaining, name: "剩余应付" },
        ];
        this.createChart({
          dom: "mychart7",
          option: self.setOptions(
            1,
            "总应付",
            this.formData.totalPayable,
            self.chartData2,
            "#EB7975"
          ),
        });

        self.chartData3 = [
          { value: this.formData.surplusOtherIncome, name: "剩余其他收入" },
          { value: this.formData.offsetCollection, name: "已抵用收款金额" },
          { value: this.formData.issuedOthers, name: "已付归还金额" },
        ];
        this.createChart({
          dom: "mychart8",
          option: self.setOptions(
            2,
            "其他收入",
            this.formData.otherIncome,
            self.chartData3,
            "#EB7975"
          ),
        });
        self.chartData4 = [
          { value: this.formData.surplusOtherExpenses, name: "剩余其他支出" },
          { value: this.formData.offsetPayment, name: "已抵用付款金额" },
          { value: this.formData.receivedOthers, name: "已收归还金额" },
        ];
        this.createChart({
          dom: "mychart9",
          option: self.setOptions(
            2,
            "其他支出",
            this.formData.otherExpenses,
            self.chartData4,
            "#49BAAB"
          ),
        });
      });
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>

<style lang="scss" scoped>
.content {
  padding: 16px 24px 24px;

  .balance {
    font-size: 16px;
    color: rgba(1, 6, 33, 0.9);

    span {
      color: #248b39;
    }
  }

  .panel-balance {
    font-size: 14px;
    color: #010621bf;
    display: flex;
    align-items: center;
    margin: 10px 0;

    i {
      margin: 0 5px;
      color: #00a499ff;
    }

    span {
      color: #248b39ff;
    }
  }

  .chart-main {
    padding: 0px 16px;
    height: 340px;
    border-radius: 2px;
    border: 1px solid #ebebeb;

    .item {
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:first-child {
        border-bottom: solid 1px #e6e6e6ff;
      }

      .legend {
        flex: 1;
        height: 100%;

        .child-item {
          padding: 16px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .name,
          .number {
            font-size: 16px;
            color: rgba(1, 6, 33, 0.75);
          }

          .name {
            display: flex;
            align-items: center;

            &::before {
              content: "";
              display: block;
              width: 12px;
              height: 12px;
              margin-right: 10px;
              background: #409ee6;
            }
          }

          &.color1 {
            .name::before {
              background: #49baab;
            }

            .number {
              color: #248b39;
            }
          }

          &.color2 {
            .name::before {
              background: #eb7975;
            }

            .number {
              color: #dd4c4d;
            }
          }

          &.color3 {
            .name::before {
              background: #ff9c6e;
            }
          }
        }
      }
    }
  }

  .left-panel {
    .item {
      .legend {
        .child-item {
          height: 50%;

          &:first-child {
            border-bottom: dashed 1px #e6e6e6;
          }
        }
      }

      .chart {
        width: 152px;
        height: 152px;
      }
    }
  }

  .right-panel {
    flex: 1;

    .legend {
      .space {
        height: 50%;
        display: flex;
        align-items: center;

        &:first-child {
          border-bottom: dashed 1px #e6e6e6;
        }

        .child-item {
          width: 50%;
        }
      }
    }

    .chart {
      width: 180px;
      height: 180px;
    }
  }
}
</style>
