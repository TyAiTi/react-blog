
const Input = ({errorMessage, ...props}) =>(
    <div>
        <input {...props} />
        { errorMessage &&
            <span style={{color:'red'}} >{errorMessage} </span>
        }
    </div>
)

export default Input