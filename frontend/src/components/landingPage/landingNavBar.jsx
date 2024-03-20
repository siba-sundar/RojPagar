import "./landingNavBar.css"
import logo from "../assets/logo.svg"


function LandingBar (){
    return  (
        <>
        <div className="navBar">
            <img src={logo} alt="logo" class="logo"/>


            <div className="navOptions">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </div>

            <div className="navButton">
                <button className="loginButton">
                    LogIn
                </button>
            </div>

        </div>
        </>
    )
}

export default LandingBar