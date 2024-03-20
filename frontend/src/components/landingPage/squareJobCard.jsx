import "./squareJobCard.css"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"

function SquareCard(props){
    return (
        <>
        <div className="jobCard">
            <div className="jobContent">
                <h1>{props.title || "Type of job"}</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Cursus dui className et posuere consectetur commodo quis magna dignissim. Cursus neque feugiat diam at. Lorem cursus lacus varius className pellentesque enim urna netus congue. Vitae arcu dictumst sit rutrum aliquam adipiscing adipiscing.</p>
                <div className="jobDetails">
                    <div className="container">
                        <img src={location} alt="" />
                        <p>Location</p>
                    </div>
                    <div className="container">
                        <img src={time} alt="" />
                        <p>Duration</p>
                    </div>
                        
                    <div className="container">
                        <img src={card} alt="" />
                        <p>Rs 10000</p>
                    </div>
                </div>

                <button className="squareCardButton">
                    Apply Now
                </button>
            </div>
        </div>
        </>
    )
}


export default SquareCard