import './profileCard.css'
import React from 'react'
import profilePicture from "../assets/profileImage.svg"



function ProfileCardrofileCard({detail}) {
  return (
    <>
    {detail.map((value,index)=>(
    <div className='profileCard' key={index}>
            <img src={value.img} alt="img" />
            <h2>{value.username}</h2>
            <p><i>{value.userarea} | {value.userdistrict}</i></p>
            <p>{value.description}</p>
    </div>
    ))};
    </>
  )
}

export default ProfileCardrofileCard