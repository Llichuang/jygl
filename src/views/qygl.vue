<template>
  企业名称：<el-input v-model="query.name" placeholder="请输入内容" style="width: 120px;"></el-input>
  <el-button @click="getlist">查询</el-button>
  <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
     
    >
      <el-table-column type="index" label="序号" sortable />
      <el-table-column prop="name" label="企业名称" sortable />
      <el-table-column prop="contact" label="联系人" sortable />
      <el-table-column prop="contactNumber" label="联系电话" sortable />
      <el-table-column  label="操作" sortable >
        <template #default="scope">
          <el-button type="primary"  size="small">添加合同</el-button>
          <el-button type="primary"  size="small">查看</el-button>
          <el-button type="primary"  size="small">编辑</el-button>
          <el-button type="primary"  size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination v-model:current-page="query.page" v-model:page-size="query.pageSize" :page-sizes="[1, 3, 5, 7]"
    layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="getlist" @current-change="getlist" />


</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { buildingApi } from '../api/index'
const query = reactive({
  name:'',
  page:1,
  pageSize:10
})
const list = ref([])
const total= ref(0)
const getlist = ()=>{
  buildingApi(query).then((res:any)=>{
    console.log(res);
    list.value=res.data.rows
    total.value=res.data.total
  })
}
getlist()
</script>

<style lang="scss" scoped></style>