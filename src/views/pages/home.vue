<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-home">
    <el-container class="el-container">
      <el-header class="head">
        <div class="flex">
          <img alt="Vue logo" class="logo" src="https://www.cadex-cycling.com.cn/static/index/res/img/cadex_logo.png" width="125" height="125" />
          <h1>学生宿舍管理系统</h1>
        </div>
        <div title="admin" class="flex-float head-left">
              <el-avatar 
                class="avatar" 
                :size="35"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"> 
              </el-avatar>
            <ScreenFull/>
          <el-button class="button-out" @click="loginOut">退出登录</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside class="aside">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#757c8f"
            class="el-menu-vertical-demo"
            default-active="2"
            text-color="#fff"
            :router="true"
          >
          <el-menu-item index="userList">
            <el-icon><icon-menu /></el-icon>
            <span>管理员列表</span>
        </el-menu-item>
        <el-menu-item index="building">
          <el-icon><icon-menu /></el-icon>
          <span>楼宇管理</span>
        </el-menu-item>
        <el-menu-item index="dormitory">
          <el-icon><icon-menu /></el-icon>
          <span>宿舍管理</span>
        </el-menu-item>
        <el-menu-item index="student">
          <el-icon><icon-menu /></el-icon>
          <span>学生管理</span>
        </el-menu-item>
        <el-menu-item index="water">
          <el-icon><icon-menu /></el-icon>
          <span>水费管理</span>
        </el-menu-item>
        </el-menu>
        </el-aside>
        <el-main class="main">
            <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { uInStore } from '@/stores/counter'

      //退出登录按钮
      const store = uInStore()
      const router = useRouter()
      const loginOut=()=>{
        localStorage.removeItem("loginData")
        store.uInfo={}
        router.push({
          path: "/login"
        })
      }

</script>

<style lang="scss" scoped>
.el-container{
  width: 1280px;
  height: 100vh;
  overflow: hidden;
}
.head{
  background-color:#3c4d63;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.head h1{
  font-size: 170%;
  margin-left: 10px;
  color: rgb(241, 241, 241);
}
.logo{
  width: 150px;
  /* margin-top: 5px; */
  height: auto;
}

.head-left{
  width: 200px;
}

.aside{
  background-color:#757c8f;
}
.aside span{
  font-size: 150%;
  font-weight: 800;
}
.aside p{
  font-size: 110%;
  font-weight: 600;
}

.main{
  padding: 0;
  margin:0;
}
</style>