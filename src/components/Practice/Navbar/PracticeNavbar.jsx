import React, { useState } from 'react'
import Logo from "../../../Images/navLogo.png"
import { RiCloseFill, RiMenu4Line } from 'react-icons/ri'
import PracticeMobileNavbar from './PracticeMobileNavbar';
import { Link } from 'react-scroll';

function PracticeNavbar() {
    const[isMenuOpen,setIsMenuOpen]=useState(false);
    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <>
    {isMenuOpen && <PracticeMobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>}
    <div className='bg-[#F7FAFF] sticky top-0 z-10'>
        <nav className='max-w-screen-xl mx-auto py-4 px-6'>
            <div className='flex items-center justify-between'>
                <img src={Logo} alt="Logo" className='w-12 object-contain' />
                <ul className='hidden md:flex md:gap-14'>
                    <li>
                        <Link to='hero' smooth spy offset={-80} className="relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Home</Link>
                    </li>
                    <li>
                        <Link to='services' smooth spy offset={-80} className='relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer'>Servces</Link>
                    </li>
                    <li>
                        <Link to='our-work' smooth spy offset={-80} className='relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer'>Our Work</Link>
                    </li>
                    <li>
                        <Link to='testimonials' smooth spy offset={-80} className='relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer'>Testimonials</Link>
                    </li>
                </ul>
                <button
                className='hidden md:block h-10 bg-blue-600 text-white px-4 rounded hover:bg-blue-200 hover:text-blue-600 cursor-pointer '>Contact Us</button>


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

export default PracticeNavbar