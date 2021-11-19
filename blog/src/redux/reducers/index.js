import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import {combineReducers} from 'redux'

//day chinh la State(pin) va value
const allReducer = combineReducers({
    isLogged: loggedReducer,
    counter: counterReducer
})

export default allReducer