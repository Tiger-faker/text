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
    <el-table-column prop="sex" label="性别" />
    <el-table-column prop="num" label="学号" />
    <el-table-column prop="age" label="年龄" />
    <el-table-column prop="building" label="所属楼宇" />
    <el-table-column prop="collage" label="所在班级" />
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
import {studentListApi} from "@/util/api"

const data = reactive({
    buildingList:[]

});
const suguanList = ()=>{
    studentListApi().then(res=>{
        // console.log(res.data);
        data.buildingList = res.data;
        console.log(data.buildingList);
    })
}

suguanList();

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