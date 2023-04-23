<template>
  <div class="layout-head">
    <div class="head-left">
      区块链风电运维决策系统
    </div>
    <div class="head-right">
      <div class="name-box">
        <el-popover placement="bottom" :teleported="true" :width="100" trigger="hover">
          <template #reference>
            <span>admin</span>
          </template>
          <div class="pop-box">
            <div class="logout" @click="logout">
              退出登录
            </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const logout = () => {
  localStorage.removeItem('authToken')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.layout-head {
  width: 100%;
  height: 100%;
  display: flex;
  line-height: vh(60);

  .head-left {
    width: vw(220);
    height: 100%;
    color: #fff;
    background: #007d71;
  }

  .head-right {
    flex: 1;
    padding-right: vw(50);
    text-align: right;
    height: 100%;
    color: #fff;
    background: #009688;
  }
}
</style>