import { useForm } from "react-hook-form";
    
  
export default function Form(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        console.log(watch())
    }
    // console.log(watch("firstname")); //xem nguoi dung input
    return(
        <div>
            <h4>Đây là react form validation </h4>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("name", { required: true })} />
                <input {...register("firstname", { required: true })} />
                <input type="submit" />
            </form>
            {errors.name && <span>This field is name</span>}
            {errors.firstname && <span>This field is firstname</span>}
        </div>
    )
}