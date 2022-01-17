import React from 'react'

const stylesCase = {display:'flex', justifyContent:'center', 
                    alignItems:'center', marginTop:'20px'}

function Profile({user, logout}) {
    return (
        <div style={stylesCase}>
            <h2>User login in</h2>
                {user?.email}
                <button onClick={logout}>Signout</button>
        </div>
    )
}

export default Profile
