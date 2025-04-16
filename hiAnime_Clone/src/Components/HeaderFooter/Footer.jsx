import React from 'react'
import Logo from './Logo'
import list from './List'

const Footer = () => {
  return (
    <div className='ml-3'>
      <div className=' flex flex-row justify-between h-[20vh] w-[30%] '>
        <div className='mt-9'>
        <Logo/>
        </div>
        <div className='flex flex-col justify-evenly'>
          <div className='text-center text-base text-gray-500 leading-none'>Join <br />Now</div>
          <div className='flex flex-row justify-between w-[130px] ' >
          <i className="fa-brands fa-discord text-[#6987d6] text-2xl"></i>
          <i className="fa-brands fa-telegram text-[#0386cf] text-2xl"></i>
          <i className="fa-brands fa-reddit text-[#fa3e21] text-2xl"></i>
          <i className="fa-brands fa-square-twitter text-[#22588d] text-2xl"></i>
          </div>
        </div>
      </div>
      <hr className='mt-4'/>
      <div className='flex flex-row justify-between w-[40%] mt-4'>
        <div className='text-white font-bold text-2xl'>A-Z LIST</div>
        <div className='text-white text-base'>Searching anime order by alphabet name A to Z</div>
      </div>
      <div className='flex flex-row'>
      {list.map((items, index)=>(
        <div className='text-white bg-[#373646] ml-2 w-8 text-center font-bold rounded-md' key={index}>
              {items}
        </div>
      ))}
      </div>
      <div className='flex flex-row text-white justify-between w-[30%] mt-4'>
        <p>Terms of service</p>
        <p>DCMA</p>
        <p>Contact</p>
        <p>HiAnimeApp</p>
      </div>
      <div className='text-[#858593] mt-5'>
      HiAnime does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
      </div>
      <div className='text-[#858593]'>
      © HiAnime.to. All rights reserved
      </div>
    </div>
  )
}

export default Footer