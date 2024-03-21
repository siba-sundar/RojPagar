import React from 'react'
import "./signup.css"
import logo from "../assets/logo.svg"
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className="mainSignupCOntainer">
        <img src={logo} alt="" className='logo'/>

        <div className="signupContent">
            <div className="subSignupContent">
              <h1>Create Account</h1>
              <div className="signupUserInputs">
                <div className="signupDetails">
                    <input type="text" placeholder='Full Name' />
                    <input type="text" placeholder='Aadhar Card' />
                    <input type="text" placeholder='Phone Number' />
                    <input type="password" placeholder='password' />
                    <input type="password"  placeholder='Confirm Password'/>
                    <input type="text" placeholder='Location' />
                </div>

                <div className="signupPreferrences">
                  <div className="userType">
                    <h2>SignIn As</h2>
                    <div>
                      <label> <input type="radio" name="userType" value="Applicant"/>
                        Applicant
                      </label>
                    </div>
                    <div>
                      <label>
                        <input type="radio" name="userType" value="Recruiter" />
                        Recruiter
                      </label>
                    </div>
                  </div>


                  <div className="preferredJobs">
                    <h2>Preffered Jobs</h2>
                    <div>
                        <label>
                          <input type="checkbox" name="preferredJobs" value="Plumber" />
                          Painter
                        </label>
                        <label>
                          <input type="checkbox" name="preferredJobs" value="Plumber"/>
                          Plumber
                        </label>
                        <label> <input type="checkbox"  name="preferredJobs" value="Labourer"/>
                        Labourer
                        </label>
                        <label>
                        <input type="checkbox" name="preferredJobs" value="Electrician" />
                        Electrician
                        </label>
                        </div>
                  </div>
                </div>
              </div>
              <button className="signup">
                <Link to="/login">Sign Up</Link>
                </button>
              <div className="haveAccount">
                <p>Have an Account?</p>
                <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Log In</Link>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Signup
