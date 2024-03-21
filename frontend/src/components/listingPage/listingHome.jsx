import React from 'react'
import "./listingHome.css"
import ListingNavBar from "./listingNavBar.jsx"
import JobCard from "./jobCard.jsx"
import ProfileCard from "./profileCard.jsx"

function ListingHome() {
  const details = [
    {
      'username': "John Doe",
      'img': "",
      'address': "123 Main St",
      'district': "New York",
      'job': "Software Engineer",
      'jobDescription': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic maiores nisi consequuntur eum atque est, inventore veniam doloribus dolor, maxime optio non quo earum architecto dolorem velit sunt unde!.",
      'Location': "New York",
      'salary': "$100,000",
      'duration': "Full-time",
    },
    {
      'username': "John Doe",
      'img': "",
      'address': "123 Main St",
      'district': "New York",
      'job': "Software Engineer",
      'jobDescription': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic maiores nisi consequuntur eum atque est, inventore veniam doloribus dolor, maxime optio non quo earum architecto dolorem velit sunt unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore hic maiores nisi consequuntur eum atque est, inventore veniam doloribus dolor,",
      'Location': "New York",
      'salary': "$100,000",
      'duration': "Full-time",
    },
    {
      'username': "John Doe",
      'img': "",
      'address': "123 Main St",
      'district': "New York",
      'job': "Software Engineer",
      'jobDescription': "Developing web applications using modern technologies.",
      'Location': "New York",
      'salary': "$100,000",
      'duration': "Full-time",
    }
  ];

  const Details = [
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgdfdfffffffffffffffffffffffffffffffffffffffffffffffffffffsdfdfdfdfdrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
    {
      "img": "",
      'username':'sadfgdhj',
      'userarea':'sadfg',
      'userdistrict':'werth',
      'description':'gdfgrg',
    },
  ]

  return (
    <>
      <div className="listingNavBar"><ListingNavBar/></div>
      <div className="exploreJobsList">
        <h3>Explore jobs</h3>
        <div className="listingJobOptions">
          <div className="listingJobName"><a href="#">Job Name</a></div>
          <div className="listingJobName"><a href="#">Job Name</a></div>
          <div className="listingJobName"><a href="#">Job Name</a></div>
          <div className="listingJobName"><a href="#">Job Name</a></div>
        </div>
      </div>
      <div className="listingRecommendations">
        
        <div className="jobRecomendations">
          <h2>Job Recommendations</h2>
          <JobCard detail={details}/>
        </div>
        <div className="profileRecommendContainer">
          <h2 className='heading'>Profile Recommendations</h2>
            <div className="profileRecomendations">
          <ProfileCard details={Details}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ListingHome
