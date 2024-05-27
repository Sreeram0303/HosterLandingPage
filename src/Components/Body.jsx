import React from 'react'

const Body = () => {
  return (
    <div className=' space-y-4 lg:flex'>
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./assets/Blue-Shape.svg" alt="" className=' -rotate-45 h-64 md:h-72 lg:h-96 ' />
        <img src="./assets/Pink-Shape.svg" alt="" className=' absolute -rotate-[30deg] h-64 md:h-72 lg:h-96' />
        <img src="./assets/Purple-Shape.svg" alt="" className=' absolute -rotate-[15deg] h-64 md:h-72 lg:h-96' />
        <img src="./assets/Hero-Model.png" alt="" className=' absolute h-64 md:h-72 lg:h-96'  />
      </div>
      <div className='flex flex-col gap-3 lg:flex-1 lg:order-1'>
        <h1 className=' text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes </h1>
        <p className=' font-Lato text-gray-400  '>With hoster get your website up and running in less than 5 minutes with the most competitive pricing packages available online </p>
        <form action="" className='flex flex-col gap-4 md:flex-row  '>
          <input className="rounded-md px-4 py-3 placeholder:text-gray-400" type="text" placeholder='Enter e-mail address' />
          <button className=' text-white rounded-md bg-blue-400 hover:bg-blue-600 px-2 py-2'>join Waitlist</button>
        </form>
        <div className='flex gap-2'>
          <img src="./assets/Checkmark.svg" alt="" />
          <p className='font-Lato text-gray-400'>No Spam,ever. Unsubscribe anytime.</p> 
        </div>
      </div>
    </div>
  )
}

export default Body