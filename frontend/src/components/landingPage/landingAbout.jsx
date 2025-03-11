import teammateProfile from "../assets/teammatesProfile.png"
import visionBanner from "../assets/visionBanner.svg"
import approachBanner from "../assets/approachBanner.svg"
import pfp1 from "../assets/Ellipse 5.png"
import pfp2 from "../assets/Ellipse 6.svg"
import pfp3 from "../assets/Ellipse 7.svg"
import pfp4 from "../assets/Ellipse 8.svg"
import pfp5 from "../assets/Ellipse 9.svg"

function AboutUs(){
    return(
        <>
        <div className="bg-[#F4F2EC]">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-[5vw]">About US</h1>
                <p className="mt-8 mx-[17vw]">
                    At RojPagar, we are dedicated to revolutionizing the way daily laborers find employment opportunities. With our innovative platform, we aim to bridge the gap between employers and workers, ensuring a seamless and efficient process for both parties.
                </p>
            </div>

            <div className="flex pt-10">
                <div className="flex flex-col justify-center pl-[3vw] pr-[6vw]">
                    <h2 className="text-[3.5vw]">Our Vision</h2>
                    <p>
                        At Roj Pagar, we envision a future where every individual, regardless of education level or background, has access to dignified and fulfilling employment opportunities. In a nation where a significant portion of the workforce relies on daily wages, traditional job portals often overlook this demographic. Our mission is to bridge this gap between daily wage earners and recruiters, revolutionizing the way job seekers find work and businesses connect with talent.
                    </p>
                </div>
                <img src={visionBanner} alt="" className="p-[3vw] w-[40vw]" />
            </div>

            <div className="flex pt-10">
                <img src={approachBanner} alt="" className="p-[3vw] w-[40vw]" />
                <div className="flex flex-col justify-center pl-[3vw] pr-[6vw]">
                    <h2 className="text-[3.5vw]">Our Approach</h2>
                    <p>
                        Roj Pagar seeks to change this narrative by providing a platform specifically designed to meet the requirements of daily wage workers. Through our innovative application, individuals can seamlessly navigate job listings posted by recruiters, selecting opportunities based on their availability, skills, and desired pay. Leveraging AI technology, our recommendation system analyses past preferences and company choices to offer tailored job suggestions, streamlining the job search process and enhancing user experience.
                        <br /><br />
                        By empowering daily wage earners with access to a diverse range of job opportunities and facilitating seamless connections between them and recruiters, Roj Pagar aims to uplift communities, drive economic growth, and foster a more inclusive society.
                    </p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <h2 className="text-[3.5vw]">Meet The Team</h2>
                <div className="flex gap-[5vw] justify-center mt-10">
                    <div className="flex flex-col items-center mt-10 pb-10">
                        <img src={pfp1} alt="" className="w-[10vw]" />
                        <div className="flex flex-col items-center">
                            <p>Sahil Sharma</p>
                            <p><i>Team Lead</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 pb-10">
                        <img src={pfp2} alt="" className="w-[10vw]" />
                        <div className="flex flex-col items-center">
                            <p>Saksham Shrey</p>
                            <p><i>Backend Developer</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 pb-10">
                        <img src={pfp3} alt="" className="w-[10vw]" />
                        <div className="flex flex-col items-center">
                            <p>Siba Sundar</p>
                            <p><i>UI/UX and Frontend Developer</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 pb-10">
                        <img src={pfp4} alt="" className="w-[10vw]" />
                        <div className="flex flex-col items-center">
                            <p>Aryan Sheregar</p>
                            <p><i>Ai and Backend Developer</i></p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10 pb-10">
                        <img src={pfp5} alt="" className="w-[10vw]" />
                        <div className="flex flex-col items-center">
                            <p>Harsh Singla</p>
                            <p><i>Frontend Developer</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutUs
