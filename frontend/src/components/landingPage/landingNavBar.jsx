import "./landingNavBar.css"
import logo from "../assets/logo.svg"
import {Link,NavLink} from 'react-router-dom'

function LandingBar (){
    return  (
        <>
        <div className="navBar">
            <img src={logo} alt="logo" class="logo"/>


            <div className="navOptions">
                <ul>
                    <li><NavLink to="/" class>Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>

            <div className="navButton">
                <button className="loginButton" >
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login
                    </Link>
                   
                </button>
            </div>

        </div>
        </>
    )
}

export default LandingBar