import {fetch as fetchPro} from "whatwg-fetch";
import qs from "qs";

const get = (url,data)=>{

    var str = "";
    for(var key in data){
        str += "&"+key+"="+data[key];
    }
    url = url+"?"+str.slice(1);

    var result = fetchPro(url, {
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
        },    
   })
   .then(res=>res.json());
   
   return result
}


const post = (url,data)=>{
    var result = fetchPro(url, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // 注意 post 时候参数的形式
        body: qs.stringify(data)
    })
    .then(res=>res.json())
    
    return result;
}


export default {
    get,
    post
}