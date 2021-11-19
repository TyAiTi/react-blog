export const increment = (nr)=>{
    return{
        type: 'INCREMENT',
        data: nr
    }
}

export const login = ()=>{
    return{
        type: 'SIGN_IN'
    }
}

export const decrement = ()=>{
    return {
        type: 'DECREMENT'
    }
}
