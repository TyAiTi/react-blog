import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword, 
        onAuthStateChanged, 
        signOut,
        signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from './firebase-config'
import Profile from './Profile'
const stylesCase = {display:'flex', justifyContent:'center', 
                    alignItems:'center', marginTop:'20px'}

function FireBase() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPass, setRegisterPass] = useState('')

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPass, setLoginPass] = useState('')

    const [user, setUser] = useState({})
    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })

    const register = async () =>{
        try {
           const user = await  createUserWithEmailAndPassword(
               auth, registerEmail, registerPass
            )
           console.log(user)
        } catch (error){
            console.log(error.message)
        }
    }
    const login = async () =>{
        try {
            const user = await  signInWithEmailAndPassword(
                auth, loginEmail, loginPass
             )
            console.log(user)
         } catch (error){
             console.log(error.message)
         }
    }
    const logout = async () =>{
        setLoginPass('')
        setLoginPass('')
        await signOut(auth)
    }
    return (
        <div >
            
            
            {/* <div style={stylesCase}>
                <h4>Đăng kí</h4>
                <input type='text' placeholder='email' onChange={(e)=> setRegisterEmail(e.target.value)} />
                <input type='text' placeholder='pass' onChange={(e)=> setRegisterPass(e.target.value)} />
                <button onClick={register} >Thực hiện</button>
            </div> */}
            { !user? 
            <>
                {/* <h2>FireBase</h2> */}
                <div style={stylesCase}>
                    <h4>Đăng nhập</h4>
                    <input type='text' placeholder='email' onChange={(e)=> setLoginEmail(e.target.value)}/>
                    <input type='text' placeholder='pass' onChange={(e)=> setLoginPass(e.target.value)}/>
                    <button onClick={login} >Thực hiện</button>
                </div>
            </> 
            : 
            <>
                <Profile user={user} logout={logout}/>
            </>

            }

        </div>
    )
}

export default FireBase
