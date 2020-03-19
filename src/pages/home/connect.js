import {homeIndexAsyncAction,homeListMoreAsyncAction} from "@actions/home/homeActions";
export const mapStateToProps = (state)=>({
    menus:state.getIn(["home","menus"]),
    banner:state.getIn(["home","banner"]),
    bannermenus:state.getIn(["home","bannermenus"]),
    goodsList:state.getIn(["home","goodsList"])
})

export const mapDispatchToProps = (dispatch)=>({
    handleGetHomeData(){
        dispatch(homeIndexAsyncAction())
    },
    handleGetListMore(tag,page){
        dispatch(homeListMoreAsyncAction(tag,page))
    }
})