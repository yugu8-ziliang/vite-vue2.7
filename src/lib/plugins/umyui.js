import  Vue from 'vue'

// //表格组件
import "umy-ui/lib/theme-chalk/index.css"; // 引入样式
import { UTable, UTableColumn } from "umy-ui";

Vue.component(UTable.name, UTable);
Vue.component(UTableColumn.name, UTableColumn);
