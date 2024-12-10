import React, { useState } from 'react'
import './Login_SignUp.css'

function Login_SignUp() {

    const [action,setAction] = useState("Sign Up");


  return (
    <div className='Container'>
        <div className='heading'>
            <h3 className='text'>{action}</h3>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Log In" ? <div></div> : <div className='input'>
                <img src='images/icons8-username-30.png'/>
                <input type='text' placeholder='User Name'/>
            </div>}     
            <div className='input'>
                <img src='images/icons8-email-48.png'/>
                <input type='email' placeholder='Email'/>
            </div>
            <div className='input'>
                <img src='images/icons8-password-30.png'/>
                <input type='password' placeholder='Password'/>
            </div>
        </div>
        <div className='submit-container'>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Log In" ? "submit gray" : "submit"} onClick={() => {setAction("Log In")}}>Log In</div>
        </div>
    </div>
  )
}

export default Login_SignUp