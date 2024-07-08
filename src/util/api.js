import {get,post} from './service'

export const userListApi=(data)=>{
    return get({
        url:'/user/list',
        data
    })
}

export const buildingListApi=(data)=>{
    return get({
        url:'/building/list',
        data
    })
}

export const suguanListApi=(data)=>{
    return get({
        url:'/suguan/list',
        data
    })
}
export const studentListApi=(data)=>{
    return get({
        url:'/student/list',
        data
    })
}
export const waterListApi=(data)=>{
    return get({
        url:'/water/list',
        data
    })
}

//搜索
export const userSelectApi=(data)=>{
    return post({
        url:'/user/listP',
        data
    })
}

//新增
export const userSaveApi=(data)=>{
    return post({
        url:'/user/save',
        data
    })
}

//修改
export const userUpdateApi=(data)=>{
    return post({
        url:'/user/update',
        data
    })
}

//删除
export const userDeleteApi=(data)=>{
    return get({
        url:'/user/delete',
        data
    })
}
