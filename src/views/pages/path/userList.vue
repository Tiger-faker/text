<template>
 <div>
    <div class="button">
        <el-input
        style="max-width: 300px"
        placeholder="请输入姓名关键字"
        class="input-with-select"
        clearable="true"
        @clear="userList"
        v-model="data.searchParams.name"
         >
        </el-input>
        <el-button type="" @click="searchList">
            <el-icon><el-icon><Search /></el-icon></el-icon>
        </el-button>
        <el-button type="primary" @click="addUser">新建用户</el-button>
    </div>
    <div class="table-box">
        <el-table :data="data.userlist" stripe style="width: 100%">
    <el-table-column prop="id" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="age" label="age" width="180"/>
    <el-table-column prop="role" label="role" />
    <el-table-column  label="操作" width="200" >
        <template #default="scope">
            <el-button type="primary" @click="editRow(scope.row)">编辑</el-button>
            <el-button type="danger" @click="userDelete(scope.row)">删除</el-button>
        </template>
    </el-table-column>
  </el-table>
    </div>
    <!-- 弹出新建角色 -->
     <div >
            <el-dialog
                class="dialog-box"
                v-model="data.dialogVisible"
                title="新建角色"
            >
                <div class="">
                    <el-form 
                        :model="data.formData" 
                        label-width="auto" 
                        style="max-width: 500px"
                        ref="userForm"
                    >
                        <el-form-item 
                        label="角色名称"
                        prop="name"
                        :rules="[{
                            required: true,
                            message: '请输入角色名',
                            trigger: 'blur',
                        }]"
                        >
                        <el-input v-model="data.formData.name"/>
                        </el-form-item>
                        <el-form-item 
                            label="角色年龄"
                            prop="age"
                        >
                             <el-input v-model="data.formData.age"/>
                        </el-form-item>
                        <el-form-item 
                            label="角色权限"
                            prop="role"
                        >
                            <el-input v-model="data.formData.rloe"/>
                        </el-form-item>

                    </el-form>
                    <div class="button-div">
                        <el-button type="primary" class="login_button" @click="submitForm(userForm)">新建</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </div>
                </div>
                
            </el-dialog>
        </div>
        <!-- 弹出修改角色 -->
        <div >
            <el-dialog
                class="dialog-box"
                v-model="data.dialogVisible2"
                title="修改角色"
            >
                <div class="">
                    <el-form 
                        :model="data.formData2" 
                        label-width="auto" 
                        style="max-width: 500px"
                        ref="userForm2"
                    >
                        <el-form-item 
                        label="角色名称"
                        prop="name"
                        :rules="[{
                            required: true,
                            message: '请输入角色名',
                            trigger: 'blur',
                        }]"
                        >
                        <el-input v-model="data.formData2.name"/>
                        </el-form-item>
                        <el-form-item 
                            label="角色年龄"
                            prop="age"
                        >
                        <el-input v-model="data.formData2.age"/>
                        </el-form-item>
                        <el-form-item 
                            label="角色权限"
                            prop="role"
                        >
                        <el-input v-model="data.formData2.role"/>
                        </el-form-item>

                    </el-form>
                    <div class="button-div">
                        <el-button type="primary" class="login_button" @click="submitForm2(userForm2)">修改</el-button>
                        <el-button @click="resetForm">重置</el-button>
                    </div>
                </div>
                
            </el-dialog>
        </div>
 </div>
</template>

<script setup>
import { reactive ,ref} from "vue"
import {userListApi,userSelectApi,userSaveApi,userUpdateApi,userDeleteApi} from "@/util/api"
import { ElMessage } from 'element-plus'

    const data = reactive({
        userlist:[],
        //搜索
        searchParams:{
            name:""
        },
        //新建弹窗
        dialogVisible: false, 
        // 编辑弹窗
        dialogVisible2: false,       
        //新建角色
        formData:{
            name:"",
            age:"",
            role:""
        },
        //修改用户
        formData2:{
            id:"",
            name:"",
            age:"",
            role:""
        }

    });
    //新建用户的表格
    const userForm = ref()
     //编辑用户的表格
     const userForm2 = ref()


    //角色搜索
    const searchList=()=>{
        console.log(data.searchParams);
        userSelectApi(data.searchParams).then(res=>{
            data.userlist=res.data.data;
        })
    }
    
    //新建用户
    const submitForm = (formEL)=>{
        formEL.validate(res=>{
            if(!res){
                return
            }
            else{ 
                userSaveApi(data.formData).then(res=>{
                    if(res.data){
                        console.log(res.data)
                        data.dialogVisible=false;
                        data.formData={
                            name:"",
                            age:"",
                            role:""
                        }
                        userList()
                        ElMessage({
                            message: '新增成功',
                            type: 'success'
                        })
                    }
                })
            }
        })
    }

      //编辑按钮
      const editRow=(row)=>{
        console.log(row)
        data.dialogVisible2 = true
        data.formData2.id = row.id
        data.formData2.name = row.name
        data.formData2.age = row.age
        data.formData2.role = row.role
    }

    //修改用户
    const submitForm2 = (formEL)=>{
        formEL.validate(res=>{
            if(!res){
                return
            }
            else{ 
                console.log(22)
                userUpdateApi(data.formData2).then(res=>{
                    if(res.data){
                        console.log(res.data)
                        data.dialogVisible2=false;
                        data.formData2={
                            id:"",
                            name:"",
                            age:"",
                            role:""
                        }
                        userList()
                        ElMessage({
                            message: '修改成功',
                            type: 'success'
                        })
                    }
                })
            }
        })
    }

    //重置按钮
    const resetForm = ()=>{
        data.formData={
            name:"",
            age:"",
            role:""
        },
        data.formData2={
            name:"",
            age:"",
            role:""
        }
    }
    //获取角色列表
    const userList = ()=>{
        userListApi().then(res=>{
            // console.log(res.data);
            data.userlist = res.data;
            console.log("角色",data.userlist);
        })
    }
    //新建角色弹窗按钮
    const addUser=()=>{
        data.dialogVisible = true;
    }

    //删除用户
    const userDelete=(row)=>{
        data.formData.id = row.id
        userDeleteApi(data.formData).then(res=>{
            console.log(res.data);
            if(res.data){
            userList();
            ElMessage({
                message: '删除用户成功',
                type: 'success'
            }) 
        }
        }) 

    }

    userList();


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