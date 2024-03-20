import "./jobCard.css"
import profileImg from "../assets/profileImage.svg"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"

function JobCard(){
    return(
        <>
        <div className="jobCard">
            <div className="recruiterInfo">
                <img src={profileImg} alt="" className="profileImg" />
                <div className="details">
                    <h3>Recruiter Name</h3>
                    <p><i>address | name</i></p>
                </div>
            </div>
            <div className="jobDetails">
                <h2>Job Name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores mollitia numquam eius magni ad sit doloremque, amet nulla, eveniet quo aspernatur minus? Dicta placeat perspiciatis maxime illo vel harum facere.
                Sed aspernatur sit enim, hic ratione voluptas amet dolorem aperiam laudantium tenetur porro recusandae consequuntur unde accusantium veritatis. </p>

                <div className="info">
                    <div className="infoCard">
                        <img src={location} alt="" className="icon" />
                        <p>Location</p>
                    </div>
                    <div className="infoCard">
                        <img src={card} alt="" className="icon" />
                        <p>Rs 100000</p>
                    </div>
                    <div className="infoCard">
                        <img src={time} alt="" className="icon" />
                        <p>Duration</p>
                    </div>

                    <button>Apply Now</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default JobCard