import immutable from "immutable";
import { handleActions } from "redux-actions";
import { HomeDataType,HomeListMoreType} from "@actions/home/homeTypes"
let defaultState = immutable.fromJS({
    menus: [],
    banner: [],
    bannermenus: [],
    goodsList: {},
})


export default handleActions({
    [HomeDataType]: (state, actions) => {
        return state.updateIn(["menus"],_=>actions.data.menus)
        .updateIn(["banner"],_=>actions.data.banner)  
        .updateIn(["bannermenus"],_=>actions.data.bannermenus)
        .updateIn(["goodsList"],_=>actions.data.goodsList)
    },
    [HomeListMoreType]:(state,actions)=>{
        // console.log(actions.data)
        return state.updateIn(["goodsList","list"],_=>actions.data);
    }
}, defaultState)