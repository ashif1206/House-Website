import React from 'react'
import logo from "../Images/navLogo.png"

function Footer() {
  return (
    <>
    <div className='max-w-[1200px] mx-auto'>
    <div className="flex items-center justify-between mt-5 mb-5 p-5 md:p-10 gap-1 md:gap-3 text-sm">
        <div className='flex flex-col gap-2 '>
        <img src={logo} alt="" className='w-10 ' />
        <p className='text-blue-900 hover:font-medium'>Mr.Ashif</p>
        <p className='text-blue-900 hover:font-medium'>Ph: 87780</p>
        <p className='text-blue-900 hover:font-medium'>Address: Delhi</p>
        </div>
        <div className=''>
    <ul className='flex flex-col  gap-1 md:gap-3'>
        <li className=''>
            <a href="" className='text-sm text-blue-900 hover:font-medium'>About Us</a>
        </li>
        <li className=''>
            <a href="" className='text-sm text-blue-900 hover:font-medium'>Conatct Us</a>
        </li>
        <li className=''>
            <a href="" className='text-sm text-blue-900 hover:font-medium'>Services</a>
        </li>
        <li className=''>
            <a href="" className='text-sm text-blue-900 hover:font-medium'>Term & Conditions</a>
        </li>
        <li className=''>
            <a href="" className='text-sm text-blue-900 hover:font-medium'>Get Quotes</a>
        </li>
    </ul>
        </div>
        <div className=''>
            <img src={logo} alt="" className='h-12' />
        </div>
    </div>
    </div>


    <div className='bg-blue-900 text-white text-sm p-2 text-center font-semibold'>
        © 2025. All Right Reserved
    </div>

    </>
  )
}

export default Footer