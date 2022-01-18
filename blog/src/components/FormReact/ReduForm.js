import Input from "./Input";
import {reduxForm, Field} from 'redux-form'
import { useSelector } from "react-redux";

const renderInput = ({input, meta}) =>(
    <Input {...input} type='text'  errorMessage={ meta.touched && meta.error} />   
)

const onSubmit = (values) =>{
    alert(JSON.stringify(values))
}

const required = v => {
    if(!v || v ===''){
        return 'Bắt buộc nhập'
    }
    return undefined
}

const allowedNames = (v) => {
    if (v === 'Ty'){
        return 'Ty là tên bị cấm'
    }
    return undefined
}

const allowedLengths = (v) => {
    if (v.length > 10){
        return 'Độ dài không được quá 10 kí tự'
    }
    return undefined
}

function ReduxForm  ({handleSubmit, valid}) {
    const form = useSelector(state => (state.form.myform))
    // const input = form.values ? JSON.stringify(form.values) : ''
    let input = ''
    if(form){
        input = JSON.stringify(form.values)
    }
    return(
        <div>
        <h2>Redux Form</h2>
        <h5> Ty : Tên bị cấm </h5>
        <h5> Bắt buộc nhập </h5>
        <h5> Độ dài không được quá 10 kí tự</h5>
        <form onSubmit={handleSubmit} >
            <Field 
                name='customer-id' 
                component={renderInput}
                validate = {[required, allowedNames, allowedLengths]}
            />
            
            <button disabled={!valid} type='submit' >Submit</button>
        </form>
        {input}
    </div>
    )
    
}

export default reduxForm({
    form: 'myform',
    onSubmit
}) (ReduxForm)