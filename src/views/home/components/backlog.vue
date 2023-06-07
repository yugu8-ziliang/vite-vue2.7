<template>
  <div class="home-item">
    <div class="header">
      <span class="title"> 待办<i class="el-icon-arrow-right" /> </span>
    </div>
    <div class="content">
      <el-scrollbar style="height: 100%">
        <div class="item" v-for="(item, index) in formData" :key="index">
          <div class="item-header">
            <span class="name">{{ item.name }}</span>
            <span class="tel">{{ item.phone }}</span>
            <span
              class="state"
              style="cursor: pointer"
              @click="handleJump(item)"
              >{{ item.status == 1 ? "待确认" : "待收款"
              }}<i class="el-icon-arrow-right"
            /></span>
          </div>
          <div class="detail">
            <span
              >{{ fltype(item.type) }}：<i>{{ item.orderId }}</i></span
            >
          </div>
          <div class="detail">
            <span
              >订单金额：<i>{{ item.price }}元</i></span
            >
            <span>{{ item.timestamp | parseTime() }}</span>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script>
import { backlog } from "@/api/homePage/index";

export default {
  data() {
    return {
      formData: [],
    };
  },
  methods: {
    init() {
      backlog().then((res) => {
        this.formData = res.data;
      });
    },
    fltype(val) {
      // 1.采购单、2.销售单、3.我处理的退款单、4.我发出的退款单、5.我处理的退货退款单、6.我发出的退货退款单、
      // # 7.购入单、8.售出单、9.我处理的退筐退款单、10.我发出的退筐退款单、11.记账、12.转账
      let param = "";
      if (val == 1) {
        param = "采购单编号";
      } else if (val == 2) {
        param = "销售单编号";
      } else if (val == 3) {
        param = "我处理的退款单编号";
      } else if (val == 4) {
        param = "我发出的退款单编号";
      } else if (val == 5) {
        param = "我处理的退货退款单编号";
      } else if (val == 6) {
        param = "我发出的退货退款单编号";
      } else if (val == 7) {
        param = "购入单编号";
      } else if (val == 8) {
        param = "售出单编号";
      } else if (val == 9) {
        param = "我处理的退筐退款单编号";
      } else if (val == 10) {
        param = "我发出的退筐退款单编号";
      } else if (val == 11) {
        param = "记账编号";
      } else if (val == 12) {
        param = "转账编号";
      }
      return param;
    },
    handleJump(val) {
      console.log(val);
      // # 1.采购单、2.销售单、3.我处理的退款单、4.我发出的退款单、5.我处理的退货退款单、6.我发出的退货退款单、
      //       # 7.购入单、8.售出单、9.我处理的退筐退款单、10.我发出的退筐退款单、11.记账、12.转账
      if(val.type==1){
        this.$router.push({
          path: "/orderManagement/purchaseOrdersDetail",
          query: {
            id: val.id,
            type:0
          },
        });
    }
    if(val.type==2){
        this.$router.push({
          path: "/orderManagement/commoditySalesOrderDetail",
          query: {
            id: val.id,
          },
        });
    }
    if(val.type==3){
        this.$router.push({
          path: "/refundManagement/iReceiveRARDetailsOR",
          query: {
            id: val.id,
          },
        });
    }
    if(val.type==4){
        this.$router.push({
          path: "/refundManagement/iSubmitRARDetailsOR",
          query: {
            id: val.id,
          },
        });
    }
    if(val.type==5){
        this.$router.push({
          path: "/refundManagement/iReceiveRARDetails",
          query: {
            id: val.id,
          },
        });
    }
    if(val.type==6){
        this.$router.push({
          path: "/refundManagement/iSubmitRARDetails",
          query: {
            id: val.id,
          },
        });
    }
    if(val.type==7){
        this.$router.push({
          path: "/frameManage/purchaseOrder",
          query: {
            orderId: val.id,
            basketInOutTypeView:0
          },
        });
    }
    if(val.type==8){
        this.$router.push({
          path: "/frameManage/saleOrder",
          query: {
            orderId: val.id,
            basketInOutTypeView:0
          },
        });
    }
    if(val.type==9){
        this.$router.push({
          path: "/frameManage/baskrefundOrder",
          query: {
            orderId: val.id,
          },
        });
    }
    if(val.type==10){
        this.$router.push({
          path: "/frameManage/backintorefundOrder",
          query: {
            orderId: val.id,
          },
        });
    }
    if(val.type==11){
        this.$router.push({
          path: "/financialManage/accountingDetail",
          query: {
            id: val.id,
          },
        });
    }
      if (val.type == 12) {
        this.$router.push({
          path: "/financialManage/transferDetail",
          query: {
            id: val.orderId,
          },
        });
      }
    },
  },
  created() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
:deep(.el-scrollbar) {
  .el-scrollbar__wrap .el-scrollbar__view {
    padding: 0 24px !important;
  }
}
.content {
  height: 445px;

  .item {
    border-bottom: solid 1px rgba(0, 0, 0, 0.06);
    padding: 16px 0 24px;
    &:last-child {
      border: none;
    }

    .item-header {
      display: flex;
      align-items: center;

      .state {
        margin-left: auto;
        color: #df971a;
        font-size: 14px;
      }

      .name,
      .tel {
        font-size: 14px;
        color: rgba(0, 0, 0, 0.85);
      }

      .tel {
        margin-left: 10px;
      }
    }

    .detail {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 12px;
      font-size: 14px;

      span {
        color: rgba(1, 6, 33, 0.55);

        i {
          font-style: normal;
          color: rgba(1, 6, 33, 0.9);
        }
      }
    }
  }
}
</style>
