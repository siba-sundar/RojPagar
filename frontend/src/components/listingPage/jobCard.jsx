import "./jobCard.css"
import profileImg from "../assets/profileImage.svg"
import location from "../assets/icons/bx-loc.svg"
import card from "../assets/icons/bxs-credit-card.svg"
import time from "../assets/icons/bxs-time.svg"
import { Link } from "react-router-dom"

function JobCard({ detail }) {


    return (
        <>
            {detail.map((value, index) => (
                <div className="border rounded-xl mt-3 hover:shadow-xl transition duration-300" key={index}>
                    <div className="flex  px-3 pt-2  gap-3 items-center ">
                        <img src={value.img || profileImg} alt="" className="w-10 h-10 rounded-full" />
                        <div className="leading-[100%]">
                            <h3>{value.username}</h3>
                            <p><i>{value.address} | {value.district}</i></p>
                        </div>
                    </div>
                    <div className="px-5 leading-[100%] mt-5">
                        <h2 className="text-[1.5vw] font-medium">{value.job}</h2>
                        <p className="text-[1.2vw]" style={{ wordBreak: 'break-word' }}>{value.jobDescription}</p>

                        <div className="flex justify-between mt-5 mb-5 ">
                            <div className="flex gap-3 w-[40%] flex-wrap">
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
                            </div>
                            <Link to="/jobdetails"  className="bg-black text-center text-white content-center px-5 py-2 h-10 rounded-full">Apply Now</Link>

                        </div>
                    </div>

                </div>
            ))};
        </>
    )
}

export default JobCard

