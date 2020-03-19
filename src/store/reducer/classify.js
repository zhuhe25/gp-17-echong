import immutable from "immutable";
import { handleActions } from "redux-actions";
import {classifyMenuType,classifyListType} from "@actions/classify/classifyTypes"
let defaultState = immutable.fromJS({
    categorys:[],
    list:[]
})


export default handleActions({
    [classifyMenuType]:(state,actions)=>{
        return state.updateIn(["categorys"],_=>actions.data)
    },
    [classifyListType]:(state,actions)=>{
        return state.updateIn(["list"],_=>actions.data)
    }
}, defaultState)