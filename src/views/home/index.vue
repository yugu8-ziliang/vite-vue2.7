<template>
  <Page background="none" >
    <el-row :gutter="24">
      <draggable
        v-model="panelList"
        chosenClass="chosen"
        filter=".unmover"
        ghostClass="ghost"
        forceFallback="true"
        animation="200"
        handle=".header"
        @start="start"
        @end="end"
      >
        <transition-group>
          <el-col
            :class="{ darg: isDrag }"
            :xl="item.xl"
            :lg="item.lg"
            :md="item.md"
            :sm="item.sm"
            :xs="item.xs"
            v-for="item in panelList"
            :key="item.key"
          >
            <component :is="item.key" />
          </el-col>
        </transition-group>
      </draggable>
    </el-row>
  </Page>
</template>

<script>
import draggable from "vuedraggable";
import todays_data from "./components/todays_data.vue";
import revenue_trend from "./components/revenue_trend.vue";
import commodity_ranking from "./components/commodity_ranking.vue";
import sales_accounting_ranking from "./components/sales_accounting_ranking.vue";
import distribution_ranking from "./components/distribution_ranking.vue";
import supplier_analysis from "./components/supplier_analysis.vue";
import current_account from "./components/current_account.vue"; // 往来款
import more_services from "./components/more_services.vue";
import notice from "./components/notice.vue";
import backlog from "./components/backlog.vue"; // 待办
import dishes_ranking from "./components/dishes_ranking.vue"; // 菜品排名
export default {
  name: "Index",
  components: {
    draggable,
    todays_data,
    revenue_trend,
    commodity_ranking,
    sales_accounting_ranking,
    dishes_ranking,
    distribution_ranking,
    supplier_analysis,
    current_account,
    more_services,
    notice,
    backlog,
  },
  data() {
    return {
      panelList: [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "销售记账排名",
          key: "sales_accounting_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "配送排名",
          key: "distribution_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "菜品排名",
          key: "dishes_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "供货商排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ],
      isDrag: false,
    };
  },
  methods: {
    start() {
      // this.isDrag = true;
    },
    end() {
      this.isDrag = false;
      let homeLayout = JSON.stringify(this.panelList);
      window.localStorage.setItem("homeLayout", homeLayout);
    },
  },
  created() {
    let param = "";
    param = JSON.parse(localStorage.getItem("userInfo"));

    // 经营户 1
    if (param.usertype == 6 || param.usertype == 7) {
      this.panelList = [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        // {
        //   name: "销售记账排名",
        //   key: "sales_accounting_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "配送排名",
        //   key: "distribution_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "菜品排名",
        //   key: "dishes_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        {
          name: "客户排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ];
    }
    // 供货商 2
    if (param.usertype == 10 || param.usertype == 11) {
      this.panelList = [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        // {
        //   name: "销售记账排名",
        //   key: "sales_accounting_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "配送排名",
        //   key: "distribution_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "菜品排名",
        //   key: "dishes_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        {
          name: "客户排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ];
    }
    // 采购商
    if (param.usertype == 3 || param.usertype == 4) {
      // 生鲜超市 3
      if (param.purchaseType == 2) {
        this.panelList = [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "销售记账排名",
          key: "sales_accounting_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "配送排名",
          key: "distribution_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        // {
        //   name: "菜品排名",
        //   key: "dishes_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        {
          name: "供货商排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ];
      }
      // 农贸市场 4
      if (param.purchaseType == 3) {
        this.panelList = [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "销售记账排名",
          key: "sales_accounting_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        // {
        //   name: "配送排名",
        //   key: "distribution_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "菜品排名",
        //   key: "dishes_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        {
          name: "供货商排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ];
      }
      // 食堂饭店 5
      if (param.purchaseType == 1) {
        this.panelList = [
        {
          name: "今日数据",
          key: "todays_data",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "营收趋势",
          key: "revenue_trend",
          xl: 24,
          lg: 24,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "商品排名",
          key: "commodity_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        // {
        //   name: "销售记账排名",
        //   key: "sales_accounting_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        // {
        //   name: "配送排名",
        //   key: "distribution_ranking",
        //   xl: 8,
        //   lg: 8,
        //   md: 12,
        //   sm: 12,
        //   xs: 24,
        // },
        {
          name: "菜品排名",
          key: "dishes_ranking",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "供货商排名",
          key: "supplier_analysis",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        {
          name: "往来款",
          key: "current_account",
          xl: 16,
          lg: 16,
          md: 24,
          sm: 24,
          xs: 24,
        },
        {
          name: "更多服务",
          key: "more_services",
          xl: 8,
          lg: 8,
          md: 12,
          sm: 12,
          xs: 24,
        },
        { name: "通知", key: "notice", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
        { name: "待办", key: "backlog", xl: 8, lg: 8, md: 12, sm: 12, xs: 24 },
      ];
      }
    }

    let homeLayout = JSON.parse(window.localStorage.getItem("homeLayout"));
    if (homeLayout) {
      this.panelList = homeLayout;
    }
  },
};
</script>

<style lang="scss" scoped>
::v-deep .chosen {
  .home-item {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    // .content {
    //     display: none;
    //     height: 0;
    // }
  }
}

::v-deep .ghost {
  .home-item .header {
    background-color: #f5f5f5;
  }
}

::v-deep .home-item {
  margin-bottom: 24px;
  background-color: #fff;

  .header {
    height: 56px;
    border-bottom: solid 1px #e9e9e9;
    padding: 0 24px;
    display: flex;
    align-items: center;

    &:hover {
      cursor: move;
    }

    .title {
      display: flex;
      height: 100%;
      align-items: center;
      font-size: 16px;
      color: #010621;
      margin-right: 24px;
    }
  }
}

::v-deep .darg {
  .home-item {
    .content {
      display: none;
      height: 0;
    }
  }
}
</style>
