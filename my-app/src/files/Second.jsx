import React from 'react'
import './Me.css'
import { FaBriefcase } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { LuStickyNote } from "react-icons/lu";
import { DiWindows } from "react-icons/di";

const Second = () => {
  return (
    <div className=''>
        <div className="container">
            <div><DiWindows  size={40} className='adjust'/><p>Get PIN</p></div>
            <div><FaBriefcase size={40} className='adjust'/><p>Balance Enquiry</p></div>
            <div> <LuStickyNote size={40} className='adjust'/><p>RSA Summary</p></div>
            <div><HiOutlineMail size={40} className='adjust'/><p>Update Email</p></div>
        </div>
        <button className='btn'>Login</button>
    </div>
  )
}

export default Second