import React from 'react'
import { Outlet } from 'react-router-dom'


import WorkerNavBar from '../components/listingPage/listingNavBar.jsx'
import DesktopFooter from '../components/landingPage/landingFooter'


const WorkerLayout = () => {
  return (
    <>
    <WorkerNavBar/>
    <Outlet/>
    <DesktopFooter/>
    </>
  )
}

export default WorkerLayout