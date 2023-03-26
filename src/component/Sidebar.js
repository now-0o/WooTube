import React from 'react'
import './Sidebar.css'
import { MdHomeFilled, MdLock } from "react-icons/md";

const Sidebar = ({sideActive}) => {
  return (
    <div className={sideActive? 'sidebar-container active':'sidebar-container'}>
        <ul>
            <li className='active'><a href="#"><MdHomeFilled className='sidebar-home-icon'/><span>홈</span></a></li>
        </ul>
    </div>
  )
}

export default Sidebar