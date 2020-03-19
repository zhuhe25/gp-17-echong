import {HomeIndexApi,HomeListMoreApi} from "@api/api"
import {HomeDataType,HomeListMoreType} from "./homeTypes"
export const homeIndexAsyncAction = ()=>{
    
    const homeIndexAction = (data)=>({
        type:HomeDataType,
        data
    })

    return async (dispatch)=>{
        let data = await HomeIndexApi();
        dispatch(homeIndexAction(data.data))
    }
}



export const homeListMoreAsyncAction = (tag,page)=>{
    const homeListMoreAction = (data)=>({
        type:HomeListMoreType,
        data
    })

    return async (dispatch)=>{
        let data = await HomeListMoreApi(tag,page);
     
        dispatch(homeListMoreAction(data.datas))
    }
}