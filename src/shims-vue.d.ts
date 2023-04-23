/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module "echarts" {
  const echarts: any;
  export default echarts;
}
declare module "*.js";

declare module "sm-crypto";
declare module "jsencrypt/bin/jsencrypt";
declare module "crypto-js";
declare module "vue-property-decorator";
declare module "element-plus";
declare module "element-plus/dist/locale/zh-cn.mjs";
declare module "sortablejs";
declare module "cesium-heatmap";
declare module "heatmapjs";
