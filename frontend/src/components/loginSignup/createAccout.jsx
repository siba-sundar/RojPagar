import React from 'react'

function createAccount() {
  return (
    <>
        <div className='createAccount w-[80vw] color'>
            <h1>Create Account</h1>
            <div className='userDetails'>
                <div className='input'>
                    <label for="firstName">First Name</label>
                    <input type="text" className='firstName' />
                </div>
                <div className='input'>
                    <label for="lastName">Last Name</label>
                    <input type="text" className='lastName' />
                </div>
                <div className='input'>
                    <label for="aadhaarNumber">Aadhaar Number</label>
                    <input type="text" className='aadhaarNumber' />
                </div>
                <div className='input'>
                    <label for="phoneNumber">Phone Number</label>
                    <input type="Number" className='phoneNumber' />
                </div>
                <div className='input'>
                    <label for="password">Password</label>
                    <input type="Password" className='password' />
                </div>
                <div className='input'>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" className='confirmPassword' />
                </div>
                <div className='input'>
                    <label for="location">Location</label>
                    <input type="text" className='location' />
                </div>
            </div>
            <div className='preference'>
                <div className='preferredJobs'>
                        <h3>Preferred Jobs</h3>
                        <p>Select atleast one</p>
                        <div>
                            
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default createAccount
