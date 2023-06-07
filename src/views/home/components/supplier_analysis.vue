<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> {{ name }}<i class="el-icon-arrow-right" /> </span>
      <el-radio-group class="unmover" v-model="radio1" @input="init()">
        <el-radio-button label="本月"></el-radio-button>
        <el-radio-button label="今年"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="content">
      <div class="screen">
        <el-radio-group v-model="radio2" size="mini" @input="init()">
          <el-radio-button label="销售"></el-radio-button>
          <el-radio-button label="利润"></el-radio-button>
          <el-radio-button label="采购"></el-radio-button>
        </el-radio-group>
      </div>
      <div id="mychart5"></div>
    </div>
  </div>
</template>

<script>
import ChartMixin from "../mixin/index";
import { customerRankings } from "@/api/homePage/index";

export default {
  mixins: [ChartMixin],
  data() {
    return {
      radio1: "本月",
      radio2: "销售",
      name:"客户排名",
      formData: [],
    };
  },
  methods: {
    getstartDay() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = "01";
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, m, d].join("-") + " 00:00:00";
    },
    getLastDay() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date(y, m, 0).getDate(); //获取当月最后一日
      m = m < 10 ? "0" + m : m; //月份补 0
      d = d < 10 ? "0" + d : d; //日数补 0
      return [y, m, d].join("-") + " 23:59:59";
    },
    getstartMonth() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = "01";
      m = m < 10 ? "0" + m : m; //月份补 0
      return [y, "01", "01"].join("-") + " 00:00:00";
    },
    getLastMNonth() {
      var y = new Date().getFullYear(); //获取年份
      var m = new Date().getMonth() + 1; //获取月份
      var d = new Date(y, m, 0).getDate(); //获取当月最后一日
      m = m < 10 ? "0" + m : m; //月份补 0
      d = d < 10 ? "0" + d : d; //日数补 0
      return [y, "12", "31"].join("-") + " 23:59:59";
    },
    init() {
      let startTime, endTime;
      if (this.radio1 == "本月") {
        startTime = parseInt(new Date(this.getstartDay()).getTime() / 1000);
        endTime = parseInt(new Date(this.getLastDay()).getTime() / 1000);
      } else {
        startTime = parseInt(new Date(this.getstartMonth()).getTime() / 1000);
        endTime = parseInt(new Date(this.getLastMNonth()).getTime() / 1000);
      }
      let type;
      if (this.radio2 == "销售") {
        type = 1;
      } else if (this.radio2 == "利润") {
        type = 2;
      } else {
        type = 3;
      }

      let param = {
        startTime: startTime,
        endTime: endTime,
        type: type, // 1.商品销售、2.商品利润、3.商品采购（供货商排名）
      };
      customerRankings(param).then((res) => {
        this.formData = res.data;
        if (this.formData.length == 0) {
          this.initChart([], "", []);
        } else {
          let fromUserName = [];
          let datas = [];
          let dataname = "";
          for (let i = 0; i < this.formData.length; i++) {
            const el = this.formData[i];
            fromUserName.push(el.fromUserName);
            if (type == 1) {
              dataname = "销售";
              datas.push(el.sellproductPrice);
            } else if (type == 2) {
              dataname = "利润";
              datas.push(el.profits);
            } else {
              dataname = "采购";
              datas.push(el.productPrice);
            }

            this.initChart(fromUserName, datas, dataname);
          }
        }
      });
    },
    initChart(fromUserName, datas, dataname) {
      this.createChart({
        dom: "mychart5",
        option: {
          grid: {
            left: "20px",
            right: "20px",
            bottom: "10px",
            top: "16px",
            containLabel: true,
          },
          tooltip: {
            trigger: "axis",
            valueFormatter: (value) => dataname + value + "k",
          },
          xAxis: {
            type: "category",
            data: fromUserName,
            axisLine: {
              lineStyle: {
                color: "#E9E9E9",
              },
            },
            axisLabel: {
              color: "#0106218C",
              align: "center",
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
          series: [
            {
              data: datas,
              type: "bar",
              itemStyle: {
                color: "#6DC7B8",
              },
            },
          ],
        },
      });
    },
  },
  mounted() {
    this.init();
    let param = "";
    param = JSON.parse(localStorage.getItem("userInfo"));
    // 经营户 1
    if (param.usertype == 6 || param.usertype == 7) {
      this.name="客户排名"
    }
    // 供货商 2
    if (param.usertype == 10 || param.usertype == 11) {
      this.name="客户排名"
    }
    // 采购商
    if (param.usertype == 3 || param.usertype == 4) {
      // 生鲜超市 3
      if (param.purchaseType == 2) {
        this.name="供货商排名"
      } // 农贸市场 4
      if (param.purchaseType == 3) {
        this.name="供货商排名"
      } // 食堂饭店 5
      if (param.purchaseType == 1) {
        this.name="供货商排名"
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  justify-content: space-between;
}

#mychart5 {
  width: 100%;
  height: 385px;
}

.screen {
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
}
</style>
