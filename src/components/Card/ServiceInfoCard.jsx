import React from 'react'

function ServiceInfoCard({imgUrl,title,description}) {
  return (
    <div className='bg-[#F7FAFF] flex flex-col md:even:flex-row-reverse md:odd:flex-row'>
        <div className='flex-1'>
            <img src={imgUrl} alt={title} className='w-[80%] md:w-full h-80 md:h-full object-contain mx-auto md:mx-0' />
        </div>
        <div className='flex-1'>
            <div className='p-10'>
                <h6 className='text-md md:text-xl text-blue-900 font-medium mb-3'>{title}</h6>
                <p className='text-sm md:text-sm leading-6 text-blue-900 whitespace-pre-line'>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default ServiceInfoCard