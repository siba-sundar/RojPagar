import JobCard from "../landingPage/squareJobCard.jsx";
import banner from "../assets/banner.svg";
import members from "../assets/members.svg";
import hireBanner from "../assets/hireBanner.svg";
import { Link } from "react-router-dom";

function Home() {
  const detail = [
    {
      'job': 'Factory Worker',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " nagpur",
      'duration': '8 hr',
      'salary': 'Rs.4000',
    },
    {
      'job': 'Carpenter',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?m",
      'location': "Chandigarh",
      'duration': '9 hr',
      'salary': 'Rs.10000',
    },
    {
      'job': 'Plumber',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " tohana",
      'duration': '7 hr',
      'salary': 'Rs.2000',
    },
    {
      'job': 'Painter',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " hisar",
      'duration': '8 hr',
      'salary': 'Rs.1000',
    },
    {
      'job': 'Labourer',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " hisar",
      'duration': '8 hr',
      'salary': 'Rs.13000',
    },
    {
      'job': 'Carpenter',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " nagpur",
      'duration': '8 hr',
      'salary': 'Rs.7000',
    },
    {
      'job': 'Paint',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?m",
      'location': "Chandigarh",
      'duration': '9 hr',
      'salary': 'Rs.10000',
    },
    {
      'job': 'Electrician',
      'detai': "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure esse sapiente perspiciatis possimus reiciendis asperiores enim explicabo dolore ad odit sunt, voluptatum minus natus ipsa. Odio amet magni nesciunt placeat?",
      'location': " tohana",
      'duration': '7 hr',
      'salary': 'Rs.12000',
    },
  ]

  return (
    <>
      <div className="pt-10 bg-[#F4F2EC]">
        {/* Hero Section */}
        <div className="flex w-full h-[500px] pt-5">
          <div className="flex flex-col justify-center h-full w-[40vw] pl-[3vw]">
            <h1 className="text-[6vw] font-semibold">Find The Job For You</h1>
            <p className="mt-[5px] text-[1.5vw]">Connecting Daily Labor with Daily Work: Your Path to Opportunity Starts Here</p>
            <div className="flex gap-5 mt-4">
              <Link to="/signup" className="no-underline">
                <button className="px-[4vw] py-[1vw] bg-black text-white font-bold rounded-[20px]">Find Job</button>
              </Link>
              <button className="px-[4vw] py-[1vw] bg-black text-white font-bold rounded-[20px]">Hire Someone</button>
            </div>
          </div>

          <div className="flex items-center justify-center h-full w-[60vw]">
            <img src={banner} alt="Banner" className="h-[110%] w-full pl-[3vw]" />
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex w-full h-[300px] pt-[90px]">
          <div className="h-full w-[40%]">
            <img src={members} alt="members" className="w-[30vw] pl-[5vw] h-[91%] pr-[8vw]" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-[1.5vw]">
              Meet Our Friendly Team: Your Partners in Daily Work Success!

              At RojPagar, we're more than just a platform – we're a team dedicated to your success. Need assistance finding the perfect daily labor opportunity? Our knowledgeable and approachable team is here to help!

              Whether you have questions, need guidance, or simply want to chat, don't hesitate to reach out. Your satisfaction is our priority, and we're committed to ensuring your experience with us is seamless and rewarding.

              Contact us today for personalized support on your journey to finding daily work!
            </p>
            <Link to="/contacts" className="no-underline">
              <button className="w-[18vw] mt-6 px-[4vw] py-[1vw] bg-black text-white font-bold rounded-[20px]">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* Job Categories Section */}
        <div className="flex flex-col items-center justify-center h-[167px]">
          <h1>Choose The <span className="text-blue-600">Job You Want</span></h1>
          <div className="flex mt-5 gap-[45px]">
            <div className="border-2 border-black bg-transparent rounded-[27px] px-[2vw] py-[0.5vw]">Painter</div>
            <div className="border-2 border-black bg-transparent rounded-[27px] px-[2vw] py-[0.5vw]">Labourer</div>
            <div className="border-2 border-black bg-transparent rounded-[27px] px-[2vw] py-[0.5vw]">Carpenter</div>
            <div className="border-2 border-black bg-transparent rounded-[27px] px-[2vw] py-[0.5vw]">Electrician</div>
          </div>
        </div>

        {/* Job Openings Section */}
        <div className="flex items-center justify-center flex-col">
          <h1>Explore Our <span className="text-blue-600">Current Job Openings</span></h1>
          <div className="flex items-center justify-center flex-wrap">
            <JobCard details={detail} />
          </div>
        </div>

        {/* Hire Section */}
        <div className="flex flex-col items-center">
          <h1><span className="text-blue-600">Hire Workers</span> For Your Job</h1>
          <div className="flex">
            <div className="flex flex-col justify-center px-[5vw] pr-[15vw]">
              <p className="text-[1.5vw]">Discover skilled daily laborers swiftly and efficiently through our platform at RojPagar. Streamline your hiring process and connect with reliable workers ready to tackle any task. Find the right fit for your job needs today!</p>
              <button className="w-[13vw] p-[1.5vw] ml-[2vw] mt-5 bg-black text-white font-bold">Post Jobs Now</button>
            </div>
            <img src={hireBanner} alt="Hire Banner" className="w-[35vw] pr-[2vw]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home