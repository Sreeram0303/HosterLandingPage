import React from 'react'
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex gap-2 justify-center items-center'>
        <img src="./assets/Logo.svg " alt="" />
        <button className='h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-2xl px-2.5 py-1.5 text-white'>Hoster is hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between gap-6 font-Lato items-center   '>
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2'>
          <a href="#">Plan</a>
        </li >
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2'>
          <a href="#">Plan Domain</a>
        </li>
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2'>
          <a href="#">Why Hoster</a>
        </li>
      </ul>
      <div className=' hidden lg:flex gap-6 font-Lato   justify-center items-center'>
        <a href=""className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2 '>Sign In</a>
        <button className=' text-white rounded-md bg-blue-400 hover:bg-blue-600 px-2 py-2'>join Waitlist</button>
      </div>
      <div className='lg:hidden'>
        <FaBars />
      </div>

    </div>
  )
}

export default Header