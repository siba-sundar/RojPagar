import "./landingHome.css"
//import JobCard from  "../landingPage/squareJobCard.jsx"

import banner from "../assets/banner.svg"
import members from "../assets/members.svg"
import hireBanner from "../assets/hireBanner.svg"


function Home() {
    return (
        <>
        <div className="mainContainer">
            <div className="main">
                <div className="content">
                    <h1>Find The Job For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. In orci pellentesque maecenas sed at massa consequat.</p>
                    <div>
                        <button className="theButton">Find Job</button>
                        <button className="theButton">Hire Someone</button>
                    </div>
                </div>

                <div className="banner">
                    <img src={banner} alt="Banner"/>
                </div>
            </div>



            <div className="contact">
                <div className="images">
                    <img src={members} alt="members"/>
                </div>
                <div className="content">
                    <p>Lorem ipsum dolor sit amet consectetur. In orci pellentesque maecenas sed at massa consequat.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nesciunt minus, quasi maxime aspernatur cumque dolor nobis, amet repellendus facilis et incidunt culpa! Accusamus sapiente est quod assumenda totam fuga!
                        Deleniti sequi harum earum voluptatem, ea voluptatum fuga fugit impedit reiciendis necessitatibus minima dicta rem commodi suscipit veniam, non in? Amet at vitae, a repudiandae maxime quidem libero possimus modi!
                        Iusto corrupti fugiat enim assumenda quo temporibus rem sunt nemo, unde ad eos repellendus? Dignissimos ullam inventore temporibus nulla ipsam soluta sit eaque aperiam vero! Harum maiores distinctio accusantium eveniet!
                    </p>
                    <button className="theButton">Contact Us</button>
                </div>
            </div>



            <div className="jobs">
                <h1>Choose The <span className="highlighted">Job You Want</span></h1>
                <div className="jobList">
                    <div className="jobName">Job Name 1</div>
                    <div className="jobName">Job Name 2</div>
                    <div className="jobName">Job Name 3</div>
                    <div className="jobName">Job Name 4</div>
                </div>
            </div>

            {/*job openeings*/}
            <div className="jobOpenings">
                <h1>Explore Our <span className="highlighted">Current Job Openings</span></h1>
                {/*<div className="jobCardsf">
                    <JobCard
                    title="Happy"/>
                    <JobCard
                    
                    />
                </div>*/}
            </div>


            <div className="hire">
                <h1><span className="highlighted">Hire Workers</span> For Your Job</h1>
                <div className="hireContent">
                    <div className="hireDetails">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo assumenda totam quisquam non. Ducimus iure eum quos, itaque pariatur quae provident qui hic quis corporis velit libero ex ea quo.</p>
                        <button className="hireButton">Post Jobs Now</button>
                    </div>
                    <img src={hireBanner} alt="Hire Banner" className="hireBanner" />  
                </div>        
            </div>
        </div>
        </>
    )
}


export default Home