import "./jobCard.css"
import profileImg from "../assets/profileImage.svg"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"
import { Link } from "react-router-dom"

function JobCard({detail}){

    
    return(
        <>
        {detail.map((value,index)=>(
        <div className="jobCardcar" key={index}>
            <div className="recruiterInfocar">
                <img src={value.img || profileImg} alt="" className="profileImgcar" />
                <div className="detailscar">
                    <h3>{value.username}</h3>
                    <p><i>{value.address} | {value.district}</i></p>
                </div>
            </div>
            <div className="jobDetailscar">
                <h2>{value.job}</h2>
                <p className="jobDescriptioncar" style={{wordBreak: 'break-word'}}>{value.jobDescription}</p>

                <div className="infocar">
                    <div className="infoCardcar">
                        <img src={location} alt="" className="icon" />
                        <p>{value.Location}</p>
                    </div>
                    <div className="infoCardcar">
                        <img src={card} alt="" className="icon" />
                        <p>{value.salary}</p>
                    </div>
                    <div className="infoCardcar">
                        <img src={time} alt="" className="icon" />
                        <p>{value.duration}</p>
                    </div>

                    <button>
                        <Link to="/jobdetails" style={{ textDecoration: 'none', color: 'inherit' }}>Apply Now</Link>
                    </button>
                </div>
            </div>

        </div>
        ))};
        </>
    )
}

export default JobCard

