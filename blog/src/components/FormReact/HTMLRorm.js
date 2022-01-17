import Input from "./Input";
import React from "react";

const handleSubmit = e =>{
    e.preventDefault()
    alert(e.target['customer-id'].value)
}

const HTMLLForm = () =>(
    <div>
        <h2>Native Form</h2>
        <form onSubmit={(e)=> handleSubmit(e)} >
            <Input 
                type='text'
                label="Customer ID"
                id='customer-id'
                name='customer-id'
            />
            <button type="submit" >Submit</button>
        </form>
    </div>
)

export default HTMLLForm