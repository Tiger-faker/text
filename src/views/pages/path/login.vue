<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="background">
       <div class="frombox">
        <div class="fromtop">
          <div class="logo">
            <img class="foda" src="../../../img/foda.png" alt="">
          </div>
          <h1>学生宿舍管理系统</h1>
        </div>
          <el-form 
            :model="formData" 
            label-width="auto" 
            style="max-width: 600px"
            ref="ruleFormRef"
          >
            <el-form-item 
              label="用户名"
              prop="username"
              :rules="[
              {
                required: true,
                message: '请输入用户名',
                trigger: 'blur',
              }]"
            >
            <el-input v-model="formData.username"/>
          </el-form-item>
          <el-form-item 
            label="密码"
            prop="password"
            :rules="[
              {
                required: true,
                message: '请输入密码',
                trigger: 'blur',
              }]"
          >
            <el-input type="password" v-model="formData.password"/>
          </el-form-item>
          </el-form>
          <div class="button-div">
            <el-button type="primary" class="login_button" @click="logins">登录</el-button>
            <el-button @click="resetForm">重置</el-button>
          </div>
       </div>
    </div>
</template>

<script setup>
import{ reactive} from 'vue'
import { useRouter } from "vue-router"

      //用户名&密码
      const formData=reactive({
          username:'',
          password:''
 
      })

      //登录
      const router = useRouter()
      const logins = () => {
    // 默认用户：admin/123
        if(formData.username==="admin"&&formData.password==="123"){
            localStorage.setItem("loginData",JSON.stringify(formData));
            router.push({
              path: "/userList"
            })
        }else{
            alert("用户名或密码错误");
        }
    }
      
  
      //重置
      const resetForm = ()=>{
        formData.username = null
        formData.password = null
      }

</script>

<style>
.background{
    width: 100%;
    height: 100vh;
    position: relative;
}
.fromtop{
  width: 350px;
  margin-bottom: 50px;
  padding-left: 15px;
}

.frombox{
    position: fixed;
    top: 50%;
    left:50%;
    background-color: #fff;
    transform: translate(-50%,-50%);
    padding: 30px 50px;
    border-radius: 5px;
    box-shadow:  0 20px 50px 0 rgba(211, 211, 211, 0.342);
}
.fromtop{
  display: flex;
  align-items: center;
  width: 350px;
  margin-bottom: 50px;
  padding-left: 15px;
}
.logo{
  width: 100px;
  height: 25px;
  float: left;
  margin-right: 20px;

}
.foda{

  width: 100px;
}

.fromtop h1{
  font-size: 170%;
  font-weight: 600;
}
.button-div{
  margin-top: 30px;
}
.login_button{
  margin-left: 100px;
  margin-right: 30px;
}
</style>