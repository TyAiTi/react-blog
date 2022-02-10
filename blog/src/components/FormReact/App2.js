import React from 'react'
import HTMLForm from './HTMLRorm'
import ControlledForm from './ControlledForm'
import ReduxForm from './ReduForm'
import ReduxForm2 from './ReduxForm2'
import {Provider} from 'react-redux'
import { createStore, combineReducers } from "redux"
import {reducer as formReducer} from 'redux-form'
import FormSign from './FormSign'

const reducers = combineReducers({form: formReducer})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App2() {
    return (
        <Provider store={store} >
        <div style={{display:'flex', justifyContent:'center'}}>
            {/* <HTMLForm/>
            <ControlledForm/> */}
            <ReduxForm/>
            
        </div>
        <div>
            <FormSign/>
        </div>
        </Provider>
    )
}

export default App2
