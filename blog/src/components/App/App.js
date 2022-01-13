import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from '../../components/redux2/actions/'
export default function App(){
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    console.log(counter)
    return(
        <div>
            Đây là App
            <h1>counter {counter} </h1>
            <button onClick={()=> dispatch(increment(5))}>+</button>
            <button onClick={()=> dispatch(decrement())}>-</button>
        </div>
    )
}