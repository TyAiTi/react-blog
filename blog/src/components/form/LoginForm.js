import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup.object() .shape({
    username: yup
    .string()
    .required("Vui lòng nhập username")
    .max(50, "Username tối đa 50 kí tự"),
    password: yup
    .string()
    .required("Vui lòng nhập mật khẩu")
    .max(20, "Mật khẩu tối đa 20 kí tự")
})
export default function LoginForm(){
    const {register, handleSubmit, watch, formState: {errors}} = useForm({resolver: 
            yupResolver(schema)});
    const onLoginSubmit = (data)=>{
        console.log(data)
    }
    

    return(
    <div>
        <h4>Đây là Form Login</h4>
        <form onSubmit={handleSubmit(onLoginSubmit)} >
            <div className="filed">
                <label>Username:</label>
                <input {...register('username')} />
                {errors.username &&
                    <p className="error">{errors.username.message}</p>
                }
            </div>

            <div className="filed">
                <label>Password:</label>
                <input {...register("password")} />
                {errors.password &&
                    <p className="error">{errors.password.message}</p>
                }
            </div>

            <div className="filed">
                <button type="submit">Đăng nhập</button>
            </div>
        </form>
    </div>
    )
}