import { createRouter, createWebHistory } from 'vue-router'
import { uInStore } from "../stores/counter.js"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component:()=>import("../views/pages/path/login.vue")
    },
    {
      path: '/',
      name: 'home',
      component:()=>import("../views/pages/home.vue"),
      redirect: "/userList",
      children:[
        {
          path: "/userList",
          name: "userList",
          component:()=>import("../views/pages/path/userList.vue")
        },
        {
          path: "/dormitory",
          name: "dormitory",
          component:()=>import("../views/pages/path/dormitory.vue")
        },
        {
          path: "/building",
          name: "building",
          component:()=>import("../views/pages/path/building.vue")
        },
        {
          path: "/student",
          name: "student",
          component:()=>import("../views/pages/path/student.vue")
        },
        {
          path: "/water",
          name: "water",
          component:()=>import("../views/pages/path/water.vue")
        }
      ]
    }
  ]
})
//登录跳转
router.beforeEach((to,from,next)=>{

  const uInStoreData = uInStore()
  const uInfo = uInStoreData.uInfo
  
  console.log("路由",uInfo)

  if(!(uInfo)){
    if(to.path==="/login"){
      next()
      return
    }
    next("/login")
  }
  else{
    next()
  }

})

export default router
