import http from "@utils/request.js"
import api from "./index"
//首屏接口

export const HomeIndexApi = ()=>{
    return http.get(api.home.index)
}

export const HomeListMoreApi = (tag,page)=>{
    return http.get(api.home.listMore,{tag,page})
}

export const classifyMenuApi = ()=>{
    return http.get(api.classify.classifyMenu)
}

export const clasifyListApi = (owner)=>{
    return http.get(api.classify.clasifyList,{owner})
}