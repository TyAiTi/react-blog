import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";


//gop 2 reducer lai va state lan luot la counter, isLogged
const allReducer = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})

export default allReducer