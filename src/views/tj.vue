<template>
  <el-button @click="$router.push('/ykgl')">←返回</el-button>
  <el-button>新增月卡</el-button>
  <div>
    车辆信息
    <div>
        车主姓名：<el-input placeholder="请输入车主姓名" style="width: 350px;"></el-input>
        联系电话：<el-input placeholder="请输入联系电话" style="width: 350px;"></el-input>
        <br>
        车辆号码：<el-input placeholder="请输入车辆号码" style="width: 350px;"></el-input>
        车辆品牌：<el-input placeholder="请输入车辆品牌" style="width: 350px;"></el-input>
    </div>
    <div style="margin-top: 40px;">
        有效日期：
        <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="To"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        :size="size"
      />
        支付金额：<el-input placeholder="请输入支付金额" style="width: 350px;"></el-input>
        <br>
        支付方式：<el-input placeholder="请输入支付方式" style="width: 350px;"></el-input>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
const size = ref<'default' | 'large' | 'small'>('default')

const value1 = ref('')

</script>

<style lang="scss" scoped></style>