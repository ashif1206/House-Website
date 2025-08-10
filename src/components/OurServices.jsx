import React from 'react'
import { SERVICES } from '../utils/data'
import ServiceInfoCard from './Card/ServiceInfoCard'

function OurServices() {
  return (
    <section id='services' className=' max-w-[1200px] mx-auto py-16'>
        <h5 className='text-2xl font-semibold text-blue-900 text-center mb-10' >
            Our Services
        </h5>
        <div className='bg-white lg:shadow-xl lg:shadow-slate-200/50'>
        {SERVICES.map((item)=>(
            <ServiceInfoCard key={item.title} imgUrl={item.imgUrl} title={item.title} description={item.description}/>
        ))}
        </div>

    </section>
  )
}

export default OurServices