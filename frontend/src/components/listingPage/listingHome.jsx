import React from 'react'
import "./listingHome.css"
import ListingNavBar from "./listingNavBar.jsx"
import JobCard from "./jobCard.jsx"
import ProfileCard from "./profileCard.jsx"
import img1 from "../assets/Ellipse 10.svg"
import img2 from "../assets/Ellipse 11.svg"
import img3 from "../assets/Ellipse 12.svg"
import img4 from "../assets/Ellipse 14.svg"
import img5 from "../assets/Ellipse 15.svg"
import img6 from "../assets/Ellipse 16.svg"
import img8 from "../assets/Ellipse 18.svg"
import img9 from "../assets/Ellipse 19.png"

function ListingHome() {
  const details = [
    {
      'username': "Ram",
      'img': img8,
      'address': "Panchkula",
      'district': "Panchkula",
      'job': "Painter",
      'jobDescription': "Are you good with colors and love to paint? We need someone to help us make things look beautiful! As a painter, your job is to use brushes, rollers, and paint to add color to walls, buildings, or other surfaces.",
      'Location': "Panchkula",
      'salary': "Rs. 3500",
      'duration': "Daily",
    },
    {
      'username': "Mohan",
      'img': img9,
      'address': "Vijaywada",
      'district': "Vijaywada",
      'job': "Labour",
      'jobDescription': "Are you someone who's ready to get their hands dirty and work hard? We need laborers to help us with various tasks around the worksite! As a laborer, you'll be responsible for doing a lot of different jobs, like moving materials, digging.",
      'Location': "Vijaywada",
      'salary': "Rs. 1000",
      'duration': "Daily",
    },
    {
      'username': "Shayam",
      'img': img3,
      'address': "Jind",
      'district': "Jind",
      'job': "Plumber",
      'jobDescription': "Do you like fixing things and working with pipes? We need plumbers to help us solve plumbing problems! As a plumber, your job is to install, repair, and maintain pipes, fixtures, and other plumbing systems. You'll work in homes, businesses, or construction sites.",
      'Location': "Jind",
      'salary': "Rs. 2000",
      'duration': "Monthly",
    },
    {
      'username': "Shivam",
      'img': img4,
      'address': "Uchana",
      'district': "Jind",
      'job': "Carpenter",
      'jobDescription': "Do you enjoy working with wood and building things? We need carpenters to help us create and repair wooden structures! As a carpenter, your job is to cut, shape, and assemble wood to make furniture, cabinets, door frames, and more. ",
      'Location': "Uchana",
      'salary': "Rs. 3000",
      'duration': "Weekly",
    }
  ];

  const Details = [
    {
      "img": img1,
      "username": "priyanshu_gupta88",
      "userarea": "Chennai West",
      "userdistrict": "Anna Nagar",
      "description": "Talented carpenter skilled in designing and building custom wooden cabinets and storage solutions."
    },
    {
      "img": img2,
      "username": "vishali_singh19",
      "userarea": "Kolkata East",
      "userdistrict": "Salt Lake City",
      "description": "Proficient carpenter specializing in intricate wood carving and joinery. "
    },
    {
      "img": img5,
      "username": "nehal_patil05",
      "userarea": "Bengaluru North",
      "userdistrict": "Hebbal",
      "description": "Skilled carpenter adept at creating modern and minimalist furniture designs. "
    },
    {
      "img": img6,
      "username": "sandeep_sharma72",
      "userarea": "Mumbai Central",
      "userdistrict": "Dadar",
      "description": "Experienced carpenter with expertise in traditional Indian furniture crafting techniques."
    },
  ]

  return (
    <>
      <div className='pt-10'>
        <div className="exploreJobsList">
          <h3 className='font-semibold'>Explore jobs</h3>
          <div className="flex gap-10 ">
            <div className="listingJobName"><a href="#">Painter</a></div>
            <div className="listingJobName"><a href="#">Plumber</a></div>
            <div className="listingJobName"><a href="#">Labour</a></div>
            <div className="listingJobName"><a href="#">Carpenter</a></div>
          </div>
        </div>
        <div className="listingRecommendations">

          <div className="pl-14 pr-5">
            <h2 className='font-semibold'>Job Recommendations</h2>
            <JobCard detail={details} />
          </div>
          <div className="profileRecommendContainer">
            <h2 className='heading'>Profile Recommendations</h2>
            <div className="profileRecomendations">
              <ProfileCard details={Details} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingHome
