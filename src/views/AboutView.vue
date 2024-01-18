<template>
   <el-container>
      <el-aside width="200px">
        <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        text-color="#fff"
      router
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>工作台</span>
          </template>
            <el-menu-item index="/gzt">工作台</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><location /></el-icon>
            <span>园区管理</span>
          </template>
            <el-menu-item index="1-1">楼宇管理</el-menu-item>
            <el-menu-item index="/qygl">企业管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>行车管理</span>
          </template>
            <el-menu-item index="1-1">区域管理</el-menu-item>
            <el-menu-item index="/ykgl">月卡管理</el-menu-item>
            <el-menu-item index="1-1">停车缴费管理</el-menu-item>
            <el-menu-item index="1-1">计费规则管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>一体杆管理</span>
          </template>
            <el-menu-item index="1-1">一体杆管理</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            <span>系统杆管理</span>
          </template>
            <el-menu-item index="1-1">系统管理</el-menu-item>
        </el-sub-menu>

      </el-menu>

      </el-aside>
      <el-container>
        <el-header>
          <el-button style="float: right;" @click="outgo">退出</el-button>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
const router = useRouter()
const outgo = () => {
  localStorage.removeItem("token");
  router.push("/");

}
</script>

<style lang="scss" scoped></style>