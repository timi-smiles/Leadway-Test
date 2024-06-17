import React from 'react'
import Image from  '../images/images.jpeg'
import { IoNotificationsOutline } from "react-icons/io5";
// import background from '../images/background.jpeg';
import './Me.css'



const First = () => {
  return (
    <div className='center'>
    
        <img src={Image} alt="" />
        <IoNotificationsOutline size={30} className='icon'/>
    </div>
  )
}

// style={{ backgroundImage: `url(${background})` }}

export default First