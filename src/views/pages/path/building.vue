<!-- eslint-disable vue/multi-word-component-names -->
<template>
      <div class="button">
        <el-input
        style="max-width: 300px"
        placeholder="请输入姓名关键字"
        class="input-with-select"
        clearable="true"
        @clear="userList"
        
         >
        </el-input>
        <el-button type="" @click="searchList">
            <el-icon><el-icon><Search /></el-icon></el-icon>
        </el-button>
        <el-button type="primary" @click="addUser">新建用户</el-button>
    </div>
  <div class="table-box">
    <el-table :data="data.buildingList" stripe style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="name" label="名字" width="180" />
    <el-table-column prop="people" label="入住人数" />
    <el-table-column prop="suguan" label="宿管" />
    <el-table-column prop="num" label="宿舍数量" />
    <el-table-column  label="操作" width="200" >
        <template #default="scope">
            <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
            <el-button type="danger" @click="userDelete(scope.row)">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
 </div>
</template>

<script setup>
import { reactive } from "vue"
import {buildingListApi} from "@/util/api"

const data = reactive({
    buildingList:[]

});
const buildingList = ()=>{
  buildingListApi().then(res=>{
        // console.log(res.data);
        data.buildingList = res.data;
        console.log(data.buildingList);
    })
}

buildingList();

</script>
<style>
.button{
    margin: 20px;
}
.table-box{
    margin: 20px 0;
    border-top: solid 0.1cap #cccccc;
}
</style>