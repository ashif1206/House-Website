import React from 'react'
import logo from "../../../Images/navLogo.png"

function PracticeMobileNavbar({isOpen,setIsMenuOpen}) {
  function handleScroll(sectionId){
    if(isOpen){
      setIsMenuOpen(false)
    };

    document.getElementById(sectionId).scrollIntoView({behavior:"smooth"});

  }
  return (
   <>
   <div className='w-screen fixed top-0 z-20 '>
    <div className='bg-[#F7FAFF] w-1/2 h-screen flex flex-col p-8'>
      <img src={logo} alt="logo" className='w-12 object-contain mb-2' />
      <ul>
        <li className='mb-5'>
          <a onClick={()=>handleScroll("hero")} className="relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Home</a>
        </li>
        <li className='mb-5'>
          <a onClick={()=>handleScroll("services")} className="relative text-blue-600 font-medium text-sm after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Services</a>
        </li>
        <li className='mb-5'>
          <a onClick={()=>handleScroll("our-work")} className="relative text-blue-600 text-sm font-medium after:absolute after:scale-x-0 after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Our Work</a>
        </li>
        <li className='mb-5'>
          <a onClick={()=>handleScroll("testimonials")} className="relative text-blue-600 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">Testimonials</a>
        </li>
      </ul>
      <button className='h-10 bg-blue-600 text-white rounded  px-6 text-sm hover:bg-blue-200 hover:text-blue-600'>Contact Us</button>
    </div>
    <div onClick={()=>setIsMenuOpen(false)} className='h-screen w-screen fixed top-0 -z-10'/>
   </div>
   
   </>
  )
}

export default PracticeMobileNavbar