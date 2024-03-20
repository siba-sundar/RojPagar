import "./landingHome.css"
import JobCard from  "../landingPage/squareJobCard.jsx"

import banner from "../assets/banner.svg"
import members from "../assets/members.svg"
import hireBanner from "../assets/hireBanner.svg"


function Home() {
    const detail = [
        {
          'job' :'Factory Worker',
          'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
          'location':" nagpur",
          'duration':'8 hr',
          'salary':'Rs.4000',
        },
        {
          'job' :'Carpenter',
          'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?m",
          'location':"Chandigarh",
          'duration':'9 hr',
          'salary':'Rs.10000',
        },
        {
          'job' :'Plumber',
          'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
          'location':" tohana",
          'duration':'7 hr',
          'salary':'Rs.2000',
        },
        {
          'job' :'Painter',
          'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
          'location':" hisar",
          'duration':'8 hr',
          'salary':'Rs.1000',
        },
        {
            'job' :'Labourer',
            'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
            'location':" hisar",
            'duration':'8 hr',
            'salary':'Rs.13000',
        },
        {
            'job' :'Carpenter',
            'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
            'location':" nagpur",
            'duration':'8 hr',
            'salary':'Rs.7000',
          },
          {
            'job' :'Paint',
            'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?m",
            'location':"Chandigarh",
            'duration':'9 hr',
            'salary':'Rs.10000',
          },
          {
            'job' :'Electrician',
            'detai' :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
            'location':" tohana",
            'duration':'7 hr',
            'salary':'Rs.12000',
          },
        
     ]

    return (
        <>
        <div className="mainContainer">
            <div className="main">
                <div className="content">
                    <h1>Find The Job For You</h1>
                    <p>Connecting Daily Labor with Daily Work: Your Path to Opportunity Starts Here</p>
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
                    <p>Meet Our Friendly Team: Your Partners in Daily Work Success!

                    At RojPagar, we're more than just a platform – we're a team dedicated to your success. Need assistance finding the perfect daily labor opportunity? Our knowledgeable and approachable team is here to help!

                    Whether you have questions, need guidance, or simply want to chat, don't hesitate to reach out. Your satisfaction is our priority, and we're committed to ensuring your experience with us is seamless and rewarding.

                    Contact us today for personalized support on your journey to finding daily work!
                    </p>
                    <button className="theButton">Contact Us</button>
                </div>
            </div>



            <div className="jobs">
                <h1>Choose The <span className="highlighted">Job You Want</span></h1>
                <div className="jobList">
                    <div className="jobName">Painter</div>
                    <div className="jobName">Labourer</div>
                    <div className="jobName">Carpenter</div>
                    <div className="jobName">Electrician</div>
                </div>
            </div>

            {/*job openeings*/}
            <div className="jobOpenings">
                <h1>Explore Our <span className="highlighted">Current Job Openings</span></h1>
                <div className="jobCardsf">
                    <JobCard details={detail}/>
                </div>
            </div>


            <div className="hire">
                <h1><span className="highlighted">Hire Workers</span> For Your Job</h1>
                <div className="hireContent">
                    <div className="hireDetails">
                        <p>Discover skilled daily laborers swiftly and efficiently through our platform at RojPagar. Streamline your hiring process and connect with reliable workers ready to tackle any task. Find the right fit for your job needs today!</p>
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