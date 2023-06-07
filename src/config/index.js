/**
 * @description vite配置|通用配置|网络配置导出
 *
 */

const cliConfig = require("./cli.config");

const settingConfig = require("./setting.config");

const netConfig = require("./net.config");

module.exports = {
  ...cliConfig,
  ...settingConfig,
  ...netConfig,
};
