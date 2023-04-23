<template>
  <div class="layout-main">
    {{ token }}
    <div class="home-box" v-if="router.currentRoute.value.path !== '/login'">
      <div class="layout-main-top">
        <layoutHeader></layoutHeader>
      </div>
      <div class="layout-main-bottom">
        <layoutBody></layoutBody>
      </div>
    </div>
    <div class="login-box" v-if="router.currentRoute.value.path === '/login'">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import layoutHeader from './layoutHeader.vue'
import layoutBody from './layoutBody.vue'
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter()
const token = ref(localStorage.getItem('authToken'))

onMounted(() => {
  token.value = localStorage.getItem('authToken')
})
</script>

<style lang="scss" scoped>
.layout-main {
  width: 100%;
  height: 100%;

  .home-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .layout-main-top {
      height: vh(60);
      width: 100%;
    }

    .layout-main-bottom {
      flex: 1;
      width: 100%;
    }
  }

  .login-box {
    width: 100%;
    height: 100%;
  }
}
</style>