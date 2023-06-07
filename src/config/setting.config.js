/**
 * @description 导出通用配置
 */

module.exports = {
  //标题
  title: "堉古农批管家",
  // 标题分隔符
  titleSeparator: " - ",
  // 路由模式，是否为hash模式
  isHashRouterMode: true,
  // token失效回退到登录页时是否记录本次的路由（是否记录当前tab页）
  recordRoute: true,
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，请使用query传参，配置时只配置path即可
  routesWhiteList: ["/login", "/register", "/callback", "/404", "/403"],
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: "yugu-brm-token",
  // token存储位置localStorage sessionStorage cookie
  storage: "localStorage",
  // 是否只保持一个子菜单的展开
  uniqueSubMenuOpened: false,
  // 是否默认收起左侧菜单
  foldSidebar: false,
  // 消息框消失时间
  messageDuration: 3000,
  // 加载时显示文字
  loadingText: "正在加载中...",
};
