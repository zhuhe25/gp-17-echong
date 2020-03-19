import {classifyMenuType,classifyListType} from "./classifyTypes"
import {classifyMenuApi,clasifyListApi} from "@api/api"
export const classifyMeunAscynAction = ()=>{
    const classifyMenuAction = (data)=>({
        type:classifyMenuType,
        data
    })

    return async (dispatch)=>{
        let data = await classifyMenuApi();
        //console.log(data.categorys);
        dispatch(classifyMenuAction(data.categorys))
    }
}


export const classifyListAsyncAction = (owner)=>{

    const classifyListAction = (data)=>({
        type:classifyListType,
        data
    })

    return async (dispatch)=>{
        let data = await clasifyListApi(owner);
        console.log(data);
        dispatch(classifyListAction(data.cate_list[0].list))
    }
}