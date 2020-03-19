import {classifyMeunAscynAction,classifyListAsyncAction} from "@actions/classify/classifyAction"
export const mapStateToProps = (state)=>({
    categorys:state.getIn(["classify","categorys"]),
    list:state.getIn(["classify","list"])
})

export const mapDispatchToProps = (dispatch)=>({
    handleClassifyMenu(){
        dispatch(classifyMeunAscynAction())
    },
    handleClassifyList(owner){
        dispatch(classifyListAsyncAction(owner))
    }
})