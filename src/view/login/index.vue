<template>
  <div class="login-main">
    <h1>区块链海上风力发电运维决策系统</h1>
    <div class="login-body">
      <div class="title">区块链海上风力发电运维决策系统</div>
      <h2>用户登录</h2>
      <div class="input">
        <el-input v-model="name" placeholder="用户名"></el-input>
      </div>
      <div class="input">
        <el-input v-model="pwd" placeholder="密码"></el-input>
      </div>
      <div class="input yanzhengma">
        <el-input v-model="yanzhengma" placeholder="验证码"></el-input>
        <div id="captchaImage"></div>
      </div>
      <div class="input">
        <div class="login-btn" @click="login">
          登录
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref, reactive, onMounted } from 'vue'
import { Captcha } from '@/utils/chpt.js'
import { useRouter } from 'vue-router'

const name = ref()
const pwd = ref()
const yanzhengma = ref()
const captchaCode = ref()
const router = useRouter();

const login = () => {
  if (name.value === 'admin' && pwd.value == '123456') {
    if (captchaCode.value.validate(yanzhengma.value)) {
      localStorage.setItem('authToken', `authToken${new Date().getTime()}`)
      router.push('/home')
    } else {
      ElMessage.info({
        message: '验证码错误!'
      })
    }

  } else {
    ElMessage.info({
      message: '账号或密码错误!'
    })
  }
}

onMounted(() => {
  console.log(router, 'router')
  captchaCode.value = new Captcha("captchaImage");
})
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.login-main {
  width: 100%;
  height: 100%;
  background: url('@/assets/img/login-bg.jpg');
  background-size: cover;

  h1 {
    position: absolute;
    left: 2%;
    top: 2%;
    color: #ece8e8;
    font-size: vw(40);
  }

  .login-body {
    height: 100%;
    width: 25%;
    position: absolute;
    color: #fff;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    padding-top: vh(300);

    .title {
      position: absolute;
      top: 15%;
      color: #fff;
      font-size: vw(30);
      width: 100%;
    }

    ::v-deep(.input) {
      margin: vh(50) vw(20);

      .el-input {
        .el-input__wrapper {
          box-shadow: none;
          background: transparent !important;
          border-bottom: 1px solid rgb(175, 170, 170);

          .el-input__inner {
            color: #fff;
          }

          .el-input__inner::placeholder {
            color: #ede9e9;
          }
        }
      }
    }

    .yanzhengma {
      display: flex;

      .el-input {
        width: vw(110);
        margin-right: vw(90);
      }

      #captchaImage {
        width: vw(100);
        height: vh(40);
        /* 给图形验证码加了一个渐变色的边框线 */
        border: 2px solid transparent;
        margin-bottom: 10px;
        overflow: hidden;
        box-sizing: border-box;
        border-image: linear-gradient(to right, #94C5B0, #66BDC0) 1 10;
        margin: 0;
      }
    }

    .login-btn {
      background: linear-gradient(90deg, #00d0da 0%, #586fff 100%);
      height: vh(44);
      line-height: vh(44);
      font-size: vw(18);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>