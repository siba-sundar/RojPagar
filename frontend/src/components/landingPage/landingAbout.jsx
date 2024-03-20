import "../landingPage/landingAbout.css"
import teammateProfile from "../assets/teammatesProfile.png"

import visionBanner from "../assets/visionBanner.svg"
import approachBanner from "../assets/approachBanner.svg"

function AboutUs(){
    return(
        <>
        <div class="aboutMain">
            <div className="aboutUs">
                <h1>About US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui non maxime illo excepturi eligendi enim? Ullam assumenda reiciendis hic in dolores, natus aperiam animi velit quisquam? Harum, voluptates. Vel, veritatis?</p>
            </div>

            <div className="ourVision">
                <div className="aboutContent">
                    <h2>Our Vision</h2>
                    <p>At Roj Pagar, we envision a future where every individual, regardless of education level or background, has access to dignified and fulfilling employment opportunities. In a nation where a significant portion of the workforce relies on daily wages, traditional job portals often overlook this demographic. Our mission is to bridge this gap between daily wage earners and recruiters, revolutionizing the way job seekers find work and businesses connect with talent.
                    </p>
                </div>
                <img src={visionBanner} alt="" />
            </div>

            <div className="ourApproach">
                <img src={approachBanner} alt="" />

                <div className="aboutContent">
                    <h2>Our Approach</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, id suscipit dolorem vitae laudantium ipsam? Quam aut, suscipit libero officia illo in, iure dolorem eum pariatur cum quisquam quod fuga.</p>
                    
                </div>
            </div>


            <div className="teamDetails">
                <h2>Meet The Team</h2>
                <div className="personDetails">
                    <div className="person">
                        <img src={teammateProfile} alt="" />
                        <div className="personAbout">
                            <p>Person Name</p>
                            <p><i>Designation</i></p>
                        </div>
                    </div>

                    <div className="person">
                        <img src={teammateProfile} alt="" />
                        <div className="personAbout">
                            <p>Person Name</p>
                            <p><i>Designation</i></p>
                        </div>
                    </div>

                    <div className="person">
                        <img src={teammateProfile} alt="" />
                        <div className="personAbout">
                            <p>Person Name</p>
                            <p><i>Designation</i></p>
                        </div>
                    </div>

                    <div className="person">
                        <img src={teammateProfile} alt="" />
                        <div className="personAbout">
                            <p>Person Name</p>
                            <p><i>Designation</i></p>
                        </div>
                    </div>

                    <div className="person">
                        <img src={teammateProfile} alt="" />
                        <div className="personAbout">
                            <p>Person Name</p>
                            <p><i>Designation</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


export default AboutUs