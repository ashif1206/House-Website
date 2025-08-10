import React from 'react'

function StatsCard({iconUrl,label,count}) {
  return (
    <div className='min-w-48 flex flex-col items-center justify-center py-6 sm:py-14'>

        <div className='w-14 h-14 flex justify-center rounded-full bg-blue-200'>
        <img src={iconUrl} alt={label} className='w-6' />

        </div>
        <p className='text-xl md:text-2xl text-blue-900 font-medium mt-4'>{count}</p>
        <span className='text-sm md:text-xl pt-1 text-blue-900 '>{label}</span>
    </div>
  )
}

export default StatsCard