import { useForm } from "react-hook-form"

import s from "./Login.module.css"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object().shape({
  username: yup
  .string()
  .required("Vui lòng điền username")
  .max(30, "Username của bạn tối đa 30 kí tự")
})

export default function Login({setToken}){
  const {register, handleSubmit, watch, formState:{errors} } =useForm({ resolver: yupResolver(schema)})
  const onLoginSubmit = (data)=>{
    console.log(data)
    setToken({token: data.username})
  }
 
  return(
    <div>
      <div className={s.top}>
        <h1>Đây là trang Login</h1>

        <form onSubmit={handleSubmit(onLoginSubmit)} >
          <div className={s.field}>
            <input {...register("username")} placeholder="Nhập username"/>
            {errors.username ?
              <p className={s.error}>{errors.username?.message}</p>
              :
              null
            }
          </div>
          <div className={s.field}>
            <button typpe="submit">Login</button>
          </div>
        </form>

      </div>
      
    </div>
  )
}