
const Input = ({type,errorMessage, ...props}) =>(
    <div>
        <div>
            {props.label &&
                <span style={{color:'red'}} >{props.label} </span>
            }
        </div>


        <input {...props} type={type}/>
        <div>
            { errorMessage &&
                <span style={{color:'red'}} >{errorMessage} </span>
            }
        </div>

    </div>
)

export default Input
