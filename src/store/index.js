import {createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {combineReducers} from "redux-immutable";
import home from "./reducer/home"
import classify from "./reducer/classify"
const reducer = combineReducers({
    home,
    classify
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;