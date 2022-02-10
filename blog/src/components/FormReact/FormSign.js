import React, {useEffect} from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import RenderTextField from './RenderTextField';

const required = v => {
    if(!v || v ===''){
        return 'Bắt buộc nhập'
    }
    return undefined
}


const allowedLengths = (v) => {
    if (v.length > 10){
        return 'Độ dài không được quá 10 kí tự'
    }
    return undefined
}
const tooOld = value =>
  value && value > 50 ? 'Qúa lớn tuổi để tham gia' : undefined

const isNumber = value => value && isNaN(Number(value)) ? 'Phải là số' : undefined

function FormSign({initialize   }) {
    useEffect(() => {
        initialize({
            username : "",
            phone : "",
            age: ""
        })
	}, [])
  return (
  <div>
      <h2>Redux Form đăng kí</h2>
      <Field
        name="username"
        component={RenderTextField}
        validate = {[required, allowedLengths]}
        label={"Nhập tài khoản"}
      />
      <Field
        name="phone"
        component={RenderTextField}
        validate = {[isNumber]}
        label={"Nhập số điện thoại"}
      />
      <form>
        <Field name="age" type="number"
            component={RenderTextField} 
            label={"Nhập tuổi"}
            validate={[ required, isNumber,tooOld]}
        />
      </form>
       
  </div>
  )
}

export default reduxForm({
    form: "SignIn"
}) (FormSign)


