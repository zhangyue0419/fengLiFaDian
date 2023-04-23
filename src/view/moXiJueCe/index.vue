<template>
  <div class="jue-ce">
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
      <el-table :data="tableData" style="width: 76%" :border="true" row-key="id" :cell-class-name="cellClassName">
        <el-table-column type="selection" width="55" />
        <el-table-column v-for="item in tableHead" :key="item.key" :prop="item.key" :label="item.label"
          :width="item.width">
          <template #default="scope" v-if="item.key === 'option'">
            <span class="span-detail">详细</span>
            <span class="span-detail">确认已读</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination background v-model:current-page="currentPage2" v-model:page-size="pageSize2" :page-sizes="[5, 10, 15]"
      layout="total,sizes, prev, pager, next" :total="tableData.length" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
const searchKey = ref()
const statusValue = ref('正常')
const currentPage2 = ref(1)
const pageSize2 = ref(10)

const options = [
  { label: '正常', value: '正常' },
  { label: '异常', value: '异常' },
]
const tableHead = [
  { label: '部件名称', key: 'name', width: '130' },
  { label: '生产企业', key: 'qiYe', width: '220' },
  { label: '所属系统', key: 'system', width: '300' },
  { label: '状态', key: 'status', width: '80' },
  { label: '反馈时间', key: 'time', width: '280' },
  { label: '反馈结果', key: 'option', width: '180' },
]
const tableData = ref([
  {
    name: '齿轮',
    qiYe: '新强联',
    system: '齿轮箱系统',
    status: '良好',
    id: 1,
    time: '2024-01-17 23-32-15',
  },
  {
    name: '齿轮',
    qiYe: '新强联',
    system: '齿轮箱系统',
    status: '良好',
    id: 1,
    time: '2024-01-17 23-32-15',
  },
  {
    name: '齿轮',
    qiYe: '新强联',
    system: '齿轮箱系统',
    status: '良好',
    id: 1,
    time: '2024-01-17 23-32-15',
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

const handleSizeChange = () => {
  //
}

const handleCurrentChange = () => {
  //
}
</script>

<style lang="scss" scoped>
@import '@/assets/common.scss';

.jue-ce {
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