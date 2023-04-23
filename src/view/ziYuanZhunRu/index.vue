<template>
  <div class="zhun-ru">
    <div class="form-box">
      <el-form ref="formRef" :model="formData" label-width="120px" :rules="rules">
        <el-form-item v-for="item in formList" :label="item.label" :prop="item.key">
          <div class="input-box">
            <el-input v-if="item.key !== 'remark'" :placeholder="`请输入${item.label}`" v-model="formData[item.key]" />
            <el-input type="textarea" v-if="item.key === 'remark'" :placeholder="`请输入${item.label}`"
              v-model="formData[item.key]" />
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="btn-box">
      <div class="submit" @click="submit">
        确认提交
      </div>
      <div class="close">关闭</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus';
import { ref, reactive } from 'vue'
const formRef = ref()
const formList = [
  { label: '企业信息', key: 'info' },
  { label: '社会信用码', key: 'code' },
  { label: '法定代表人', key: 'man' },
  { label: '企业地址', key: 'address' },
  { label: '电话号码', key: 'tel' },
  { label: '邮箱', key: 'email' },
  { label: '备注', key: 'remark' },
]
const formData: any = reactive({
})
const rules = reactive({
  info: [{ required: true, message: '请输入企业信息' }],
  code: [{ required: true, message: '请输入社会信用码' }],
  man: [{ required: true, message: '请输入法定代表人' }],
  address: [{ required: true, message: '请输入企业地址' }],
  tel: [{ required: true, message: '请输入电话号码' }],
})

const submit = () => {
  formRef.value.validate().then((res: any) => {
    ElMessage.success({ message: '准入成功！' })
  })
}

</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.zhun-ru {
  width: 100%;
  height: 100%;
  background: #fff;

  .form-box {
    height: vh(450);
  }

  .btn-box {
    display: flex;
    margin-left: vw(50);

    .submit {
      width: vw(100);
      height: vh(40);
      line-height: vh(40);
      text-align: center;
      background: $color;
      border-radius: vw(5);
      color: #fff;
      margin-right: vw(15);
      cursor: pointer;
    }

    .close {
      cursor: pointer;
      width: vw(70);
      height: vh(40);
      line-height: vh(40);
      text-align: center;
      color: #fff;
      background: #737c85;
      border-radius: vw(5);
    }
  }
}
</style>