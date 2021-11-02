import { useForm } from "react-hook-form";
import s from "./Form.module.css"

  
export default function Form(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(watch())
    }
    // console.log(watch("firstname")); //xem nguoi dung input
    return(
        <div>
            {/* <div>
                
            </div> */}
            {/* <h4>Đây là react form validation </h4> */}
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true })} />
                <input {...register("firstname", { required: true })} />
                <input type="submit" />
            </form> */}
            

            <div>
                <form className={s.top} onSubmit={handleSubmit(onSubmit)}>
                    <input className={s.shareInput} {...register("content", { required: true })} />
                    <input className={s.shareMoney} {...register("benefit", { required: true })} />
                    <input className={s.button_default} type="submit" />
                </form>
            </div>
            {errors.name && <span>This field is name</span>}
            {errors.firstname && <span>This field is firstname</span>}
        </div>
    )
}