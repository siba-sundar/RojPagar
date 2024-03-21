import './profileCard.css'
import React from 'react'
import profilePicture from "../assets/profileImage.svg"



function ProfileCardrofileCard({details}) {
  return (
    <>
    {details.map((value,index)=>(
    <div className='profileCardcycle' key={index}>
            <img src={value.img || profilePicture} alt="img" className='profileCardImg' />
            <h2>{value.username}</h2>
            <p><i>{value.userarea} | {value.userdistrict}</i></p>
            <p className='profileDescription' style={{wordBreak: 'break-word'}}>{value.description}</p>
    </div>
    ))};
    </>
  )
}

export default ProfileCardrofileCard