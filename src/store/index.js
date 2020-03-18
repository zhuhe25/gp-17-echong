import {createStore,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {combineReducers} from "redux-immutable";
import home from "./reducer/home"
const reducer = combineReducers({
    home
})
const store = createStore(reducer,composeWithDevTools(applyMiddleware(reduxThunk)));
export default store;