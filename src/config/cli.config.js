/**
 * @description 导出vite配置
 */
module.exports = {
  //开发或生产环境服务的公共基础路径
  base: "/",
  //设为 true 时若端口已被占用则会直接退出，而不是尝试下一个可用端口
  strictPort: true,
  // server 端口号
  devPort: 9527,
  //server 开发服务器启动时，自动在浏览器中打开应用程序
  devAutoOpen: true,
  //指定输出路径
  outDir: "dist",
  //指定生成静态资源的存放路径
  assetsDir: "assets",
};
