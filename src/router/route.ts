import { RouteRecordRaw } from "vue-router";

// 完整静态路由
export const permissionRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登录",
      disabled: false,
    },
    component: () => import("../view/login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
      disabled: false,
    },
    component: () => import("../view/home/index.vue"),
  },
  {
    path: "/mxjc",
    name: "mxjc",
    meta: {
      title: "模型决策",
      disabled: false,
    },
    component: () => import("../view/moXiJueCe/index.vue"),
  },
  {
    path: "/bjgl",
    name: "bjgl",
    meta: {
      title: "备件管理",
      disabled: false,
    },
    component: () => import("../view/beiJianGuanLi/index.vue"),
  },
  {
    path: "/xqgl",
    name: "xqgl",
    meta: {
      title: "需求管理",
      disabled: false,
    },
    component: () => import("../view/xuQiuGuanLi/index.vue"),
  },
  {
    path: "/zygl",
    name: "zygl",
    meta: {
      title: "资源管理",
      disabled: false,
    },
    component: () => import("../view/ziYuanGuanLi/index.vue"),
  },
  {
    path: "/zyzr",
    name: "zyzr",
    meta: {
      title: "资源准入",
      disabled: false,
    },
    component: () => import("../view/ziYuanZhunRu/index.vue"),
  },
  {
    path: "/gdgl",
    name: "gdgl",
    meta: {
      title: "工单管理",
      disabled: false,
    },
    component: () => import("../view/gongDanGuanLLi/index.vue"),
  },
  {
    path: "/xwrz",
    name: "xwrz",
    meta: {
      title: "行为日志",
      disabled: false,
    },
    component: () => import("../view/xingWeiRiZi/index.vue"),
  },
];

export default permissionRoutes;
