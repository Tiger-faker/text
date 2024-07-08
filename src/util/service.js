import  axios  from "axios"

const Service = axios.create({
    timeout: 5000,
    baseURL:"http://localhost:8080",
    headers:{
        "content-type":"application/json;charset=UTF-8"
    }
})

//post
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data: config.data
    })
}

//get
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}

//put
export const put=config=>{
    return Service({
        ...config,
        method:"put",
        data: config.data
    })
}

//delete
export const deletes=config=>{
    return Service({
        ...config,
        method:"delete",
        data: config.data
    })
}



