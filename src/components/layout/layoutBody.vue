<template>
  <div class="layout-body">
    <div class="body-left">
      <el-menu active-text-color="#ffd04b" background-color="#181f23" class="el-menu-vertical-demo"
        :default-active="tabActive.path" text-color="#fff">
        <template v-for="(item, idx) in menuList" :key="idx">
          <el-sub-menu v-if="item.children" :index="idx">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span @click="changPath({ path: item.path, name: item.name })">{{ item.name }}</span>
            </template>
            <el-menu-item v-for="(val, index) in item.children" :key="index + idx" :index="val.path"
              @click="changPath(val)">{{ val.name
              }}</el-menu-item>
          </el-sub-menu>
          <el-menu-item v-if="!item.children" :index="item.path" @click="changPath(item)">
            <el-icon>
              <location />
            </el-icon>
            <template #title>{{ item.name }}</template>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div class="body-right">
      <div class="tabs-box">
        <div :class="['tabs-item', tabActive.path === item.path ? 'active' : '']" @click="changeTab(item)"
          v-for="(item, idx) in tabList" :key="`${item.path}-${idx}`">
          {{ item.name }}
          <span @click="closeTab(item, $event)">X</span>
        </div>
      </div>
      <div class="body-main">
        <div class="main-top">
          <div>{{ tabActive.name }}</div>
          <span>
            <el-icon>
              <Refresh />
            </el-icon>
          </span>
        </div>
        <div class="router-box">
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const tabActive = ref({ path: '/home', name: '主页' })
const menuList = [
  {
    name: '主页',
    children: null,
    icon: 'home',
    path: '/home'
  },
  {
    name: '企业管理',
    path: '',
    children: [
      { name: '资格准入', path: 'zyzr' },
      { name: '资源管理', path: 'zygl' },
      { name: '需求管理', path: 'xqgl' },
      { name: '模型决策', path: 'mxjc' },
      { name: '备件管理', path: 'bjgl' },
      { name: '工单管理', path: 'gdgl' },
      { name: '行为日志', path: 'xwrz' }]
  }
]
const tabList: any = ref([{ name: '主页', path: '/home' }])

// 点击左侧menu 添加tabs 跳转路由
const changPath = (data: { name: string, path: string }) => {
  router.push(data.path)
  if (tabList.value.find((el: any) => el.path === data.path)) {
    tabActive.value = data
  } else {
    tabList.value.push(data)
    tabActive.value = data
  }
}

// 点击路由tab
const changeTab = (data: { name: string, path: string }) => {
  tabActive.value = data
  router.push(data.path)
}

// 关闭tabs
const closeTab = (data: { name: string, path: string, children: any, icon: string }, e: any) => {
  e.stopPropagation()
  tabList.value = tabList.value.filter((el: any) => el.path !== data.path)
  const len = tabList.value.length
  if (len > 0) {
    tabActive.value = tabList.value[len - 1]
    router.push(tabList.value[len - 1].path)
  } else {
    tabActive.value = { path: '/home', name: '主页' }
    router.push('/home')
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.layout-body {
  display: flex;
  width: 100%;
  height: 100%;

  .body-left {
    width: vw(220);
    background: #222d32;
  }

  .body-right {
    flex: 1;
    background: #eeeeee;
    display: flex;
    flex-direction: column;

    .tabs-box {
      width: 100%;
      height: vh(50);
      line-height: vh(50);
      display: flex;
      background: #fff;

      .tabs-item {
        padding: 0 vw(15);
        line-height: vh(50);
        box-sizing: border-box;
        border-right: 1px solid rgba(153, 150, 150, .2);
        cursor: pointer;
      }

      .active {
        background: #f8f8f8;
        color: #009688;
        border-bottom: vw(2) solid #009688;
      }

      span {
        margin-left: vw(10);
        display: inline-block;
        font-size: vw(14);
        cursor: pointer;
      }
    }

    .body-main {
      border-top: vw(4) solid #d2d2d2;
      margin: vh(20);
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      flex: 1;

      .main-top {
        height: vh(40);
        background: #fff;
        display: flex;
        justify-content: space-between;
        padding: 0 vw(10);
        line-height: vh(40);
        border-bottom: vw(1) solid #d2d2d2;

        span {
          display: inline-block;
          font-size: vw(18);
          position: relative;
          top: vh(5);
          cursor: pointer;
        }
      }

      .router-box {
        background: #fff;
        flex: 1;
        padding: vh(15);
        box-sizing: border-box;
      }
    }
  }
}
</style>