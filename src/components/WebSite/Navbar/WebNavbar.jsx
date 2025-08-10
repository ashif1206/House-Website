import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from "../../../Images/navLogo.png"
import { RiCloseFill, RiMenu4Line } from 'react-icons/ri'
import WebMobileNavbar from './WebMobileNavbar'

function WebNavbar() {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    }
  return (
   <>
   {isMenuOpen && <WebMobileNavbar setIsMenuOpen={setIsMenuOpen} />}
    <div className='bg-[#F7FAFF] sticky top-0 z-10'>
        <nav className='max-w-screen-xl mx-auto py-4 px-6'>
            <div className='flex items-center justify-between'>
                <img src={logo} alt="Logo" className='w-12 object-contain' />
                <ul className='md:flex md:gap-14 hidden'>
                    <li>
                        <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Services</Link>
                    </li>
                    <li>
                        <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Our Work</Link>
                    </li>
                    <li>
                        <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Testimonials</Link>
                    </li>
                </ul>
                <button className='primary-btn hidden md:block'>Contact Us</button>
                <button
                onClick={toggleMenu}
                className='w-11 h-11 bg-blue-100 text-2xl text-blue-600 flex items-center justify-center rounded z-50 md:hidden'>
                    {isMenuOpen ? <RiCloseFill/> : <RiMenu4Line/>}
                </button>
            </div>
        </nav>
    </div>
   
   </>
  )
}

export default WebNavbar