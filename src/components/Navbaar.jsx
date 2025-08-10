import React, { useState } from 'react'
import logo from '../Images/navLogo.png'
import { RiMenu4Line,RiCloseFill } from 'react-icons/ri'
import Mobile_Navbar from './Mobile_Navbar';

function Navbaar() {
    const [isOpenMenu,setIsOpenMenu] = useState(false);
    function toggleMenu(){
        setIsOpenMenu(!isOpenMenu);
    };
  return (
   <>
   {isOpenMenu && <Mobile_Navbar setIsOpenMenu={setIsOpenMenu}/>}
   <div className='bg-[#F7FAFF] sticky top-0 z-10'>
    <nav className='max-w-screen-xl mx-auto py-4 px-6'>
        <div className='flex items-center justify-between'>
            <img src={logo} alt="Logo" className='h-15 w-auto object-contain' />
            <ul className='hidden md:flex md:gap-14'>
                <li className='menu_item'>
                    <a href="">Home</a>
                </li>
                <li className='menu_item'>
                    <a href="">About</a>
                </li>
                <li className='menu_item'>
                    <a href="">Services</a>
                </li>
                <li className='menu_item'>
                    <a href="">Our Works</a>
                </li>
            </ul>
            <button className='hidden md:block h-10 bg-blue-600 text-white px-6 rounded hover:bg-blue-200 hover:text-blue-600'>Contact Us</button>

            <button
            onClick={()=>{setIsOpenMenu(true)}}
            className='w-11 h-11 bg-blue-100 text-2xl text-blue-600 flex items-center justify-center rounded md:hidden z-50'>
                {isOpenMenu ?  <RiCloseFill/> : <RiMenu4Line/>}
            </button>
        </div>
    </nav>
   </div>
   
   </>
  )
}

export default Navbaar