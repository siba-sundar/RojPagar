import "./landingNavBar.css"
import logo from "../assets/logo.svg"
import {Link,NavLink} from 'react-router-dom'

function LandingBar (){
    return  (
        <>
        <div className="navBarbike">
            <img src={logo} alt="logo" class="logobike"/>


            <div className="navOptionsbike">
                <ul>
                    <li><NavLink to="/" class>Home</NavLink></li>
                    <li><NavLink to="/aboutUs">About Us</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                </ul>
            </div>

            <div className="navButtonbike">
                <button className="loginButtonbike" >
                    <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>Login
                    </Link>
                   
                </button>
            </div>

        </div>
        </>
    )
}

export default LandingBar