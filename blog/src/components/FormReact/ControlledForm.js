import React from "react";
import Input from "./Input";

class ControlledForm extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            customerId: ''
        }
        
    }
    handleSubmit = e =>{
        e.preventDefault()
        alert(`The customer id is ${this.state.customerId}`)
    }

    handleInputChange = e =>{
        this.setState({
            customerId: e.target.value
        })
    }
    isValid(){
        if(this.state.customerId === ''){
            return false 
        }
        return true
    }
    render() {
        return(
            <div>
                <h2>ControlledForm</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        label='Customer ID'
                        id='customer-id'
                        name='customer-id'
                        onChange={this.handleInputChange}
                        value={this.state.customerId}
                        errorMessage={ this.isValid() ? '' : 'This filed is required'}
                    />
                    <button disabled={!this.isValid()} type='submit'>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default ControlledForm