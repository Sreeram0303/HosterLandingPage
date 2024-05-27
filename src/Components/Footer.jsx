import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className=' flex gap-6 font-Lato text-gray-400 items-center'>
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2 '>
          <a href="#" > Facebook</a>
        </li>
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2 '>
          <a href="#"> Intagram</a>
        </li>
        <li className=' hover:bg-gradient-to-r from-orange-400 to-red-500 hover:text-white hover:rounded-md hover:px-2 py-2 '>
          <a href="#"> Twitter</a>
        </li>
      </ul>

      <div className='flex gap-2'>
        <div>
          <img src="./assets/Help-Avatar.svg" alt="" />
        </div>
        <div>
          <p className=' font-playfair font-thin'>Have any Questions?</p>
          <a href="#" className=' font-Lato font-medium'> Talk to specialist</a>
        </div>
      </div>

    </div>
  )
}

export default Footer