import React from 'react'
import logo from '../Images/navLogo.png'

function Mobile_Navbar({setIsOpenMenu}) {
  return (
    <>
    <div className='w-screen fixed top-0 z-20 md:hidden'>
      <div className='bg-[#F7FAFF] w-1/2 h-screen flex flex-col p-8'>
        <img src={logo} alt="logo" className='w-16 object-contain mb-8' />
        <ul className=''>
          <li className="mb-5">
            <a className='menu_item'>Home</a>
          </li>
          <li className="mb-5">
            <a className='menu_item'>About</a>
          </li>
          <li className="mb-5">
            <a className='menu_item'>Services</a>
          </li>
          <li className="mb-5">
            <a className='menu_item'>Our Work</a>
          </li>
        </ul>
        <button className='h-10 bg-blue-600 text-white rounded text-sm px-6 hover:bg-blue-200 hover:text-blue-600 md:block'>Contact Us</button>
      </div>

      <div
      onClick={()=>{setIsOpenMenu(false)}}
      className='w-screen h-screen bg-[rgba(0,0,0,0.3)] fixed top-0 -z-10'/>

    </div>
    
    </>
  )
}

export default Mobile_Navbar