/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {MdMenuOpen} from "react-icons/md"
import {HiHome} from "react-icons/hi"
import {AiOutlineCompass} from "react-icons/ai"
import {BsGraphUpArrow, BsGrid, BsCalendar4Event} from "react-icons/bs"
import {VscCalendar} from "react-icons/vsc"
import {MdFavoriteBorder} from "react-icons/md"
import {FiUsers} from "react-icons/fi"
import {CiStar} from "react-icons/ci"
import Logo from './sub-components/Logo'

const SideBarNav = () => {
  return (
    <div className='sidebar_container'>
        <div className='sidebar_top'>
            <div className='side_menu_close'>
                <span className='react_icon'>
                    <MdMenuOpen />
                </span>
            </div>
            <div className='logo_container'>
                <Logo />
            </div>
        </div>
        <nav className='sidebar_mid'>
            <ul className='menu_ul'>
                <li className='menu_list'><a href='#'><span className='react_icon_house'><HiHome /></span>Home</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><BsGraphUpArrow /></span>Trends</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><AiOutlineCompass /></span>Feed</a></li>
            </ul>
            <p>Discover</p>
            <ul className='menu_ul'>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><BsGrid/></span>New and Notable</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><VscCalendar /></span>Release Calendar</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><BsCalendar4Event/></span>Events</a></li>
            </ul>
            <p>Your Collection</p>
            <ul className='menu_ul'>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><MdFavoriteBorder /></span>Favourite Songs</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><FiUsers /></span>Artist</a></li>
                <li className='menu_list'><a href="#"><span className='react_icon_house'><CiStar /></span>Albums</a></li>
            </ul>
        </nav>
        <div className='sidebar_bottom'></div>
    </div>
  )
}

export default SideBarNav;