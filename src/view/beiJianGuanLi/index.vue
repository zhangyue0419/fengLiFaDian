<template>
  <div class="bei-jian">
    <div class="search-box">
      <div class="input-box">
        <el-input v-model="searchKey" placeholder="请输入部件名称" clearable @clear="search">
          <template #prepend>部件名称</template>
        </el-input>
      </div>
      <div class="search-btn">
        <el-button @click="search" type="primary" :icon="Search" />
      </div>
    </div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 100%" :border="true">
        <el-table-column type="selection" width="55" />
        <el-table-column v-for="item in tableHead" :key="item.key" :prop="item.key" :label="item.label"
          :width="item.width">
          <template #default="scope">
            <span class="span-detail" v-if="item.key === 'option'">详情</span>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background v-model:current-page="currentPage2" v-model:page-size="pageSize2"
        :page-sizes="[5, 10, 15]" layout="total,sizes, prev, pager, next" :total="tableData.length"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Search } from '@element-plus/icons-vue'
const searchKey = ref()
const currentPage2 = ref(1)
const pageSize2 = ref(10)
const tableHead = [
  { label: '备件名称', key: 'name', width: '300' },
  { label: '库存', key: 'kucun', width: '180' },
  { label: '生产地', key: 'shengChanDi', width: '280' },
  { label: '生产商', key: 'shengChanShang', width: '280' },
  { label: '最近入库时间', key: 'time', width: '240' },
  { label: '最近出库时间', key: 'outTime', width: '240' },
  { label: '操作', key: 'option', width: '80' },
]
const tableData = ref([
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },

  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },

  {
    name: '齿轮',
    kucun: 20,
    shengChanDi: '广东',
    shengChanShang: 'xx机械公司',
    time: '2022-10-05 20:28:47',
    outTime: '2023-02-26 09:31:43',
    option: '2023-02-26 09:31:43',
  },
])
const initData = ref(tableData.value)

const search = () => {
  if (searchKey.value) {
    tableData.value = tableData.value.filter((el: any) => el.name.includes(searchKey.value))
  } else {
    tableData.value = initData.value
  }
}

const handleSizeChange = () => {
  //
}

const handleCurrentChange = () => {
  //
}

</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.bei-jian {
  width: 100%;
  height: 100%;
  background: #fff;

  .table-box {
    width: 100%;
    box-sizing: border-box;
    margin: vh(20) 0;

    .span-detail {
      color: #049585;
      cursor: pointer;
    }
  }
}
</style>