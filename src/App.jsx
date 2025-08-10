import React from 'react'
import Navbaar from './components/Navbaar'
import PracticeNavbar from './components/Practice/Navbar/PracticeNavbar'
import Hero from './components/Practice/HeroSection/Hero'
import Stats from './components/Stats'
import OurServices from './components/OurServices'
import OurWork from './components/OurWork'
import Testimonials from './components/Testimonials'
import CallToActon from './components/CallToActon'
import Footer from './components/Footer'


function App() {
  return (
    <>
    <div className='bg-[#F7FAFF]'>
     {/* <Navbaar/> */}
     <PracticeNavbar/>
     <Hero/>
     <Stats/>
     <OurServices/>
     <OurWork/>
     <Testimonials/>
     <CallToActon/>
     <Footer/>
    </div>
    </>
  )
}

export default App