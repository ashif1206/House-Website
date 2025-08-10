import React from "react";
import { Link } from "react-scroll";
import logo from "../../../Images/navLogo.png"

function WebMobileNavbar({setIsMenuOpen}) {
  return (
    <div className="w-screen fixed top-0 z-20">
      <div className="bg-[#F7FAFF] w-1/2 h-screen flex flex-col p-8">
        <img src={logo} alt="Logo" className="w-12 object-contain mb-2" />
        <ul className="">
          <li className="mb-5">
            <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
              Home
            </Link>
          </li>
          <li className="mb-5">
            <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
              Services
            </Link>
          </li>
          <li className="mb-5">
            <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
              Our Work
            </Link>
          </li>
          <li className="mb-5">
            <Link to="" className="nav-menu after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100 cursor-pointer">
              Testimonials
            </Link>
          </li>
        </ul>
        <button className="primary-btn h-10">Contact Us</button>
        <div
        onClick={()=>setIsMenuOpen(false)}
        className="w-screen h-screen fixed top-0 -z-10" />
      </div>
    </div>
  );
}

export default WebMobileNavbar;
