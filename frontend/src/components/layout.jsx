import React from 'react'
import LandingBar from './landingPage/landingNavBar.jsx'
import Newsletter from './landingPage/landingFooter.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <LandingBar/>
        <Outlet/>
        <Newsletter/>
    </>
  )
}

export default Layout