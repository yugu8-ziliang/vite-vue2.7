import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue2";
import vueJsx from "@vitejs/plugin-vue2-jsx";

/* plugins */
import VueMacros from "unplugin-vue-macros/vite";

import Components from "unplugin-vue-components/vite";
import {
  ElementUiResolver,
  VueUseComponentsResolver,
} from "unplugin-vue-components/resolvers";

import VueDevTools from "vite-plugin-vue-devtools";
import Progress from "vite-plugin-progress";
import PrintUrls from "vite-plugin-print-urls";
import Commonjs from "vite-plugin-commonjs";
import Modules from "vite-plugin-use-modules";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import RequireTransform from "vite-plugin-require-transform";

import Unocss from "unocss/vite";

import path from "path";

/* configs */
const {
  /* cli */
  base,
  strictPort,
  devPort,
  devAutoOpen,
  outDir,
  assetsDir,
} = require("./src/config");

export default defineConfig({
  base,
  server: {
    port: devPort,
    strictPort,
    open: devAutoOpen,
  },
  build: {
    outDir,
    assetsDir,
    commonjsOptions: {
      // transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // global scss
        additionalData: `@import "@/lib/styles/mixin.scss";@import "@/lib/styles/variables/variables.module.scss";`,
      },
    },
  },

  plugins: [
    // ## https://vue-macros.sxzz.moe/zh-CN/guide/getting-started.html
    VueMacros({
      plugins: {
        // ## https://github.com/vuejs/vue/blob/main/CHANGELOG.md#vite
        vue: vue(),
      },
    }),
    vueJsx(),
    // ## https://unocss.dev/
    Unocss(),
    // ## https://github.com/jeddygong/vite-plugin-progress
    Progress(),
    // ## https://github.com/yzydeveloper/vite-plugin-print-urls 导致无法触发热更新
    // PrintUrls(),
    // ## https://github.com/vite-plugin/vite-plugin-commonjs/tree/main
    Commonjs(),
    // ## https://github.com/antfu/unplugin-vue-components
    Components({
      dirs: ["src/components", "src/views"],
      resolvers: [ElementUiResolver(), VueUseComponentsResolver()],
      version: 2.7,
    }),
    // ## https://github.com/vbenjs/vite-plugin-svg-icons
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/icons")],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
    Modules({
      // 加载 src/plugins 下的模块，默认为 src/modules
      target: "src/lib/plugins",
    }),
    // ## https://github.com/webfansplz/vite-plugin-vue-devtools
    // FIXME: 报错
    // VueDevTools(),
    RequireTransform({
      fileRegex: /.js$|.jsx$|.vue$/,
    }),
  ],
});
