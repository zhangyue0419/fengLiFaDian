<template>
  <div class="zi-yuan">
    <div class="filter-box">
      <div class="status-box">
        <div class="status-left">状态</div>
        <div class="status-right">
          <el-select v-model="statusValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
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
    </div>
    <div class="table-box">
      <el-table :data="tableData" style="width: 70%" :border="true" row-key="id" :cell-class-name="cellClassName">
        <el-table-column type="selection" width="55" />
        <el-table-column v-for="item in tableHead" :key="item.key" :prop="item.key" :label="item.label"
          :width="item.width">
          <template #default="scope" v-if="item.key === 'option'">
            <span class="span-detail">加入</span>
            <span class="span-detail">详细</span>
            <span class="span-detail">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const searchKey = ref()
const statusValue = ref('正常')
const options = [
  { label: '正常', value: '正常' },
  { label: '异常', value: '异常' },
]
const tableHead = [
  { label: '名称', key: 'name', width: '230' },
  { label: '设备零件地址', key: 'address', width: '300' },
  { label: '权限标识', key: 'quanXian', width: '300' },
  { label: '状态', key: 'status', width: '80' },
  { label: '操作', key: 'option', width: '182' },
]
const tableData = ref([
  {
    name: '风轮系统',
    address: 'asdfasdfasd',
    quanXian: 'asdfasd',
    status: '正常',
    id: 1,
    type: 'first',
    children: [
      {
        name: '叶片',
        address: 'asdfasdfasd',
        quanXian: 'asdfasd',
        status: '正常',
        type: 'leaf',
        id: 3
      }
    ]
  },
  {
    name: '主轴系统',
    address: 'asdfasdfasd',
    quanXian: 'asdfasd',
    status: '正常',
    type: 'first',
    id: 2,
    children: [
      {
        name: '叶片',
        address: 'asdfasdfasd',
        quanXian: 'asdfasd',
        status: '正常',
        type: 'leaf',
        id: 4
      }
    ]
  },
  {
    name: '风轮系统',
    address: 'asdfasdfasd',
    quanXian: 'asdfasd',
    status: '正常',
    type: 'first',
    id: 5,
    children: [
      {
        name: '叶片',
        address: 'asdfasdfasd',
        quanXian: 'asdfasd',
        status: '正常',
        type: 'leaf',
        id: 6
      }
    ]
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

const cellClassName = (e: { rowIndex: number, row: any }) => {
  console.log(e.row.type, '======')
  return e.row.type !== 'first' ? 'leaf-td' : '33eeeeee'
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.zi-yuan {
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  .filter-box {
    width: 100%;
    display: flex;

    .status-box {
      margin-right: vw(10);
      display: flex;
      border: vw(1) solid $color;
      border-radius: vw(5);
      // height: vh(40);
      // line-height: vh(40);

      .status-left {
        border: none;
        border-right: vw(1) solid $color;
        font-size: vw(14);
        padding: 0 vw(5);
        line-height: vh(35);
        color: $color;
      }

      .status-right {
        width: vw(90);
      }
    }
  }

  .table-box {
    box-sizing: border-box;
    margin-top: vh(20);

    .span-detail {
      color: $color;
      margin: 0 vw(10);
      cursor: pointer;
    }
  }
}
</style>