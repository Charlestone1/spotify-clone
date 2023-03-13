import React from 'react'
import Home from './Home'
import SideBarNav from './SideBarNav'

const Main = () => {
  return (
    <div className='main_container'>
        <SideBarNav />
        <Home />
    </div>
  )
}

export default Main