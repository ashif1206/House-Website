import React from 'react'
import { TESTIMONIALS } from '../../utils/data'

function Pagination({active}) {
  return (
    <div className='flex justify-center items-center gap-3'>
    {TESTIMONIALS.map((item,index)=>(
        <div key={index} 
        className={`w-8 h-1 ${active === index ? "bg-blue-900" : "bg-blue-100"} rounded-md transition-all duration-500`}
        />

    ))}

    </div>
  )
}

export default Pagination