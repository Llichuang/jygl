<template>
  <div class="h1">
    车牌号码：<el-input v-model="query.carNumber" placeholder="请输入车牌号" style="width: 120px;"></el-input>
    车主姓名：<el-input v-model="query.personName" placeholder="请输入车主姓名" style="width: 120px;"></el-input>
    状态：
    <el-select placeholder="请选择" style="width: 120px;">
      <el-option label="全部" value="shanghai"></el-option>

    </el-select>
    <el-button type="primary" @click="getlist">查询</el-button>
  </div>
  <el-button type="primary" @click="$router.push('/tj')">添加月卡</el-button>
  <el-button type="primary">批量删除</el-button>

  <el-table :data="list" style="width: 100%">
    <el-table-column type="index" label="序号" />
    <el-table-column prop="personName" label="车主名称" />
    <el-table-column prop="phoneNumber" label="联系方式" />
    <el-table-column prop="carNumber" label="车牌号码" />
    <el-table-column prop="carBrand" label="车牌品牌" />
    <el-table-column prop="cardStatus" label="状态" />
    <el-table-column label="操作" width="280">
      <template #default="scope">
        <el-button type="primary" size="small">续费</el-button>
        <el-button type="danger" size="small">查看</el-button>
        <el-button type="danger" size="small">编辑</el-button>
        <el-button type="danger" size="small">删除</el-button>

      </template>
    </el-table-column>
  </el-table>

  <el-pagination v-model:current-page="query.page" v-model:page-size="query.pageSize" :page-sizes="[1, 3, 5, 7]"
    layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="getlist" @current-change="getlist" />
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { listApi } from '../api/index'

const query = reactive({
  page: 1,
  pageSize: 10,
  carNumber: '',
  personName: '',
  cardStatus: ''
})
const list = ref([])
const total = ref(0)
const getlist = () => {
  listApi(query).then((res: any) => {
    console.log(res);
    list.value = res.data.rows
    total.value = res.data.total
  })
}

getlist()
</script>

<style lang="scss" scoped></style>