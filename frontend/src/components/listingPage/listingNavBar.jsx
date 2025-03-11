import { useState } from 'react'
import "./listingNavBar.css"
import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg"
import notification from "../assets/icons/bx-bell.svg"
import bookmark from "../assets/icons/bx-bookmark.svg"
import jobs from "../assets/icons/bx-briefcase.svg"
import settings from "../assets/icons/bx-cog.svg"
import search from "../assets/icons/bx-search.svg"
import profileImg from "../assets/Ellipse 17.svg"

function NavBar (){
    return (
        <>
            <div className="listingContainer fixed">
                <img src={logo} alt="logo" className="listingLogo"/>

                <div className="listingSearchBar">
                    <input type="text" placeholder="search text..."className='listingSearch'/>
                    <img src={search} alt="" />
                </div>

                <div className="listingOptions">
                    <div className="listingOptionsLogo">
                        <img src={notification} alt="" />
                        <img src={bookmark} alt="" />
                        <img src={jobs} alt="" />
                        <img src={settings} alt="" />
                    </div>
                    <div className="listingProfileImg">
                        <img src={profileImg} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar