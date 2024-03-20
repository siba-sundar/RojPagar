import "../loginSignup/loginPage.css"
import logo from "../assets/logo.svg"

function LoginPage (){
    return (
    <>
        <div className='loginMainContainer'>
            <div className="loginnavBar">
                <img src={logo} alt="logo" className="logo"/>
            </div>


            <div className="loginContainer">
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
                    
                    <button className="loginBlackButton">Login</button>

                    <div className="loginOption">
                        <p>Don't have an Account?</p>
                        <a href="#">Sign In</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default LoginPage