import "./squareJobCard.css"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"


function SquareCard({details}){
    return (
        <>
        {details.map((value,index)=>(
        <div className="jobCard" key={index}>
            <div className="jobContent">
                <h1>{value.job || "Type of job"}</h1>
                <p>{value.detai}</p>
                <div className="jobDetails">
                    <div className="container">
                        <img src={location} alt="" />
                        <p>{value.location}</p>
                    </div>
                    <div className="container">
                        <img src={time} alt="" />
                        <p>{value.duration}</p>
                    </div>
                        
                    <div className="container">
                        <img src={card} alt="" />
                        <p>{value.salary}</p>
                    </div>
                </div>

                <button className="squareCardButton">
                    Apply Now
                </button>
            </div>
        </div>
        ))}
        </>
    )
}


export default SquareCard