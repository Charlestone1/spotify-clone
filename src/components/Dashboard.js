import React from 'react'
import Home from './Home'
import SideBarNav from './SideBarNav'
// import useAuth from './useAuth'


const Dashboard = () => {
    // const accessToken = useAuth(code); 
  return (
    <> 
        <SideBarNav />
        <Home />
    </>
  )
}

export default Dashboard