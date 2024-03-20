import React from 'react'
import logo from "../assets/logo.svg"

function SignUp() {
  return (
    <>
      <div className="mainSignupCOntainer">
        <img src={logo} alt="" className='logo'/>
        <div className="signupContent">
            <h1>Create Account</h1>
            <div className="signupDetails">
                <input type="text" placeholder='Full Name' />
                <input type="text" placeholder='' />
            </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
