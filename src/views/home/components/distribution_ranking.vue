<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> 配送排名<i class="el-icon-arrow-right" /> </span>
      <el-radio-group class="unmover" v-model="radio1" @input="init()">
        <el-radio-button label="本月"></el-radio-button>
        <el-radio-button label="今年"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="content">
      <div class="screen">
        <el-radio-group v-model="radio2" size="mini" @input="init()">
          <el-radio-button label="配送商品"></el-radio-button>
          <el-radio-button label="商品利润"></el-radio-button>
          <el-radio-button label="配送点"></el-radio-button>
        </el-radio-group>
      </div>
      <div id="mychart4"></div>
    </div>
  </div>
</template>

<script>
import ChartMixin from "../mixin/index";
import { deliveryRankings } from "@/api/homePage/index";

export default {
  mixins: [ChartMixin],
  data() {
    return {
      radio1: "本月",
      radio2: "配送商品",
      formData: [],
      chartData: [
      ],
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
      let type;
      if (this.radio1 == "本月") {
        startTime = parseInt(new Date(this.getstartDay()).getTime() / 1000);
        endTime = parseInt(new Date(this.getLastDay()).getTime() / 1000);
      } else {
        startTime = parseInt(new Date(this.getstartMonth()).getTime() / 1000);
        endTime = parseInt(new Date(this.getLastMNonth()).getTime() / 1000);
      }

      if (this.radio2 == "配送商品") {
        type = 1;
      } else if (this.radio2 == "商品利润") {
        type = 2;
      } else {
        type = 3;
      }

      let param = {
        startTime: startTime,
        endTime: endTime,
        type: type, // 1.配送商品、2.商品利润、3.配送点
      };
      deliveryRankings(param).then((res) => {
        this.formData = res.data;
        let money = 0;
        if (this.formData.length == 0) {
          this.chartData = [];
          this.initChart(money);
        } else {
          for (let i = 0; i < this.formData.length; i++) {
            const el = this.formData[i];
            if (type == 1) {
              this.chartData.push({
                value: el.productPrice,
                name: el.vageName,
              });
              money += parseFloat(el.productPrice);
            } else if (type == 2) {
              this.chartData.push({
                value: el.profits,
                name: el.vageName,
              });
              money += parseFloat(el.profits);
            }else{
                this.chartData.push({
                value: el.productPrice,
                name: el.companyName,
              });
              money += parseFloat(el.productPrice);
            }

            this.initChart(money);
          }
        }
      });
    },
    initChart(money) {
      const self = this;
      self.createChart({
        dom: "mychart4",
        data: self.chartData,
        name:"配送额",
        money:money
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.header {
  justify-content: space-between;
}

#mychart4 {
  width: 100%;
  height: 385px;
}

.screen {
  display: flex;
  justify-content: flex-end;
  padding: 16px 24px;
}
</style>
