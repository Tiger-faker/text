import { defineStore } from 'pinia'

export const uInStore = defineStore('uInfoStore', () => {
    return { 
      //全局可用变量
      uInfo: (localStorage.getItem("loginData")&&JSON.parse(localStorage.getItem("loginData")))||{},


    }
  })
