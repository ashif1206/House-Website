import React from 'react'
import heroImg1 from "../../../Images/heroImg1.jpg"
import heroImg2 from "../../../Images/heroImg2.jpg"
import heroImg3 from "../../../Images/heroImg3.jpg"

function Hero() {
  return (
    <section id='hero' className='max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row'>
        <div className='flex-1 text-center md:text-left'>
            <h2 className='text-xl font-bold  text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]'>Bulding Dreams,Creafting Homes</h2>
            <p  className='text-sm font-semibold leading-6 text-blue-950 mb-6 md:w-4/5 md:font-medium'>Turining Dreams into Homes. Explore our Wesite and Most of you Choises.</p>
            <button className='primary-btn'>Explore More</button>
        </div>
        <div className='flex gap-2 flex-col-reverse md:flex-row-reverse items-center justify-center md:gap-3 lg:gap-5'>
            <img className='hero-img' src={heroImg1} alt="HeroImage1" />
        </div>
    </section>
  )
}

export default Hero