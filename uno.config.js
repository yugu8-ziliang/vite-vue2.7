import {
  defineConfig,
  presetUno,
  // presetAttributify,
  transformerDirectives,
} from "unocss";
// import presetRemToPx from "@unocss/preset-rem-to-px";

export default defineConfig({
  presets: [presetUno()],
  rules: [
    // m-20 margin:20px
    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
    // p-20 pading:20px
    [/^p-([\.\d]+)$/, ([_, num]) => ({ padding: `${num}px` })],
    // 多行省略
    [
      /^line-clamp-(\d+)$/,
      ([, num]) => ({
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": `${num}`,
      }),
    ],
  ],
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      pfm: '"PingFangSC-Medium", "PingFang SC"',
      pfr: '"PingFangSC-Regular", "PingFang SC"',
    },
  },
});
