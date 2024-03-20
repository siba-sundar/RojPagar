import "../landingPage/landingContact.css"
import emailLogo from "../assets/icons/bxs-envelope.svg"
import phoneLogo from "../assets/icons/bxs-phone.svg"
import facebook from "../assets/icons/bxl-facebook-square.svg"
import linkedin from "../assets/icons/bxl-linkedin-square.svg"
import instagram from "../assets/icons/bxl-instagram-alt.svg"


function LandingContact(){
    return (
        <>
        <div className="mainContactContainer">
            <div className="subContactContainer">
                <div className="socialHandles">
                    <div className="socialContainer">
                        <div className="contactEmail">
                            <img src={emailLogo} alt="" />
                            <p>rojPagar@gmails.com</p>
                        </div>
                        <div className="contactPhone">
                            <img src={phoneLogo} alt="" />
                            <p>+91- 445356443</p>
                        </div>
                        <div className="socials">
                            <a href="#" target="_blank"><img src={facebook} alt="" /></a>
                            <a href="#" target="_blank"><img src={linkedin} alt="" /></a>
                            <a href="#" target="_blank"><img src={instagram} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="messageUs">
                    <h3>Get In Touch</h3>
                    <div className="messageInputs">
                        <input type="text" className="senderDetails" placeholder="Name" />
                        <input type="text" className="senderDetails" placeholder="Email" />
                        <input type="text" className="senderDetails" placeholder="Phone Number" />
                        <label htmlFor="messageText">Message</label>
                        <input type="text" className="messageText"/>
                    </div>
                    <button className="sendMessage">Send Message</button>
                </div>
                
            </div>
        </div>
        </>
    )
}

export default LandingContact