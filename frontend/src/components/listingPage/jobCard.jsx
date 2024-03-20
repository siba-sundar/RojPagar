import "./jobCard.css"
import profileImg from "../assets/profileImage.svg"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"



function JobCard({details}){
    return(
        <>
        {details.map((value,index)=>(
        <div className="jobCard" key={index}>
            <div className="recruiterInfo">
                <img src={value.img || profileImg} alt="" className="profileImg" />
                <div className="details">
                    <h3>{value.username}</h3>
                    <p><i>{value.address} | {value.district}</i></p>
                </div>
            </div>
            <div className="jobDetails">
                <h2>{value.job}</h2>
                <p>{value.jobDescription}</p>

                <div className="info">
                    <div className="infoCard">
                        <img src={location} alt="" className="icon" />
                        <p>{value.Location}</p>
                    </div>
                    <div className="infoCard">
                        <img src={card} alt="" className="icon" />
                        <p>{value.salary}</p>
                    </div>
                    <div className="infoCard">
                        <img src={time} alt="" className="icon" />
                        <p>{value.duraton}</p>
                    </div>

                    <button>Apply Now</button>
                </div>
            </div>

        </div>
        ))};
        </>
    )
}

export default JobCard