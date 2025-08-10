import React from 'react'
import galleryImg1 from '../Images/galleryImg1.png'
import galleryImg2 from '../Images/galleryImg2.png'
import galleryImg3 from '../Images/galleryImg3.png'
import galleryImg4 from '../Images/galleryImg4.png'
import galleryImg5 from '../Images/galleryImg5.png'
import galleryImg6 from '../Images/galleryImg6.png'

function OurWork() {
  return (
    <section id='our-work' className='max-w-[1200px] mx-auto pt-8'>
        <h5 className='text-2xl font-semibold text-center text-blue-900 mb-16'>Our Work</h5>
        <div className='grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2'>
            <div className=''>
                <img src={galleryImg1} alt="" className='gallery-img' />
            </div>
            <div className=''>
                <img src={galleryImg2} alt="" className='gallery-img' />
            </div>
            <div className=''>
                <img src={galleryImg3} alt="" className='gallery-img' />
            </div>
            <div className=''>
                <img src={galleryImg4} alt="" className='gallery-img' />
            </div>
            <div className=''>
                <img src={galleryImg5} alt="" className='gallery-img' />
            </div>
            <div className='md:col-span-3'>
                <img src={galleryImg6} alt="" className='gallery-img' />
            </div>
        </div>
    </section>
  )
}

export default OurWork