import "../loginSignup/loginPage.css"
import logo from "../assets/logo.svg"

function LoginPage (){
    return (
    <>
        <div className='mainContainer'>
            <div className="navBar">
                <img src={logo} alt="logo" className="logo"/>
            </div>


            <div className="loginContainer">
                <div className='content'>
                    <h1>Log In</h1>

                    <div className="input">
                        <label for="username">Username</label>
                        <input type="text" className="username"/>
                    </div>

                    <div className="input">
                        <label for="password">Password</label>
                        <input type="password" className="password"/>
                    </div>
                    
                    <button className="blackButton">Login</button>

                    <div className="option">
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