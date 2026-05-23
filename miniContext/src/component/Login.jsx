import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'


function Login() {

    let {setUser} = useContext(UserContext);

    let [userName, setUserName] = useState("")
    let [userPassword, setUserPassword] = useState("")

    const handleSubmit = ()=>{
        setUser({userName,userPassword});
    }   

    return (
        <>
        <div>
            <br /> <br /> 
            <h2>Login</h2>
            <input
            type="text"
            placeholder='userName'
            value={userName}
            onChange={(e)=> setUserName(e.target.value)}
            />
            <br /> <br />
            <input
            type="text"
            placeholder='password'
            value={userPassword}
            onChange={(e)=> setUserPassword(e.target.value)}
            />
            <br /> <br />

            <button
            onClick={handleSubmit}
            >
                Submit
            </button>
            <br /> <br />
        </div>
        </>
    )
}

export default Login
