import React from 'react'
import { Outlet } from 'react-router-dom'


import WorkerNavBar from '../components/listingPage/listingNavBar.jsx'
import DesktopFooter from '../components/landingPage/landingFooter'


const WorkerLayout = () => {
  return (
    <>
    <WorkerNavBar/>
    <div className='pt-10'>
    <Outlet/>
    </div>
    <DesktopFooter/>
    </>
  )
}

export default WorkerLayout