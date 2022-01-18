import React, {useState} from 'react'
// import firebase from './firebase2'

export default function Form() {
    const [title, setTitle] = useState('')

    const handleOnChange = (e) =>{
        setTitle(e.target.value)
    }

    const createTodo = () =>{

    }
    return (
        <div>
            <input type='text' onChange={handleOnChange} value={title} />
            <button onClick={createTodo} > Add todo</button>
        </div>
    )
}
