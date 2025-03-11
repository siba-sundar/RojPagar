import "../loginSignup/loginPage.css"
import logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router-dom"

function LoginPage (){
    return (
    <>
        <div className='loginMainContainer overflow-hidden'>
            <div className="loginnavBar">
                <img src={logo} alt="loginLogo" className="logo"/>
            </div>


            <div className="loginContainer ">
                <div className='loginContent'>
                    <h1>Log In</h1>

                    <div className="loginInput">
                        <label for="username">Username</label>
                        <input type="text" className="username"/>
                    </div>

                    <div className="loginInput">
                        <label for="loginPassword">Password</label>
                        <input type="password" className="loginPassword"/>
                    </div>
                    
                    <button className="loginBlackButton">
                        <Link to="/listinghome" style={{ textDecoration: 'none', color: 'inherit' }}>Login</Link>
                        </button>

                    <div className="loginOption">
                        <p>Don't have an Account?</p>
                        <NavLink to="/signup" >Sign Up</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default LoginPage