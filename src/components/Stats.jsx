import React from 'react'
import { StatsData } from '../utils/data'
import StatsCard from './Card/StatsCard'

function Stats() {
  return (
    <section className='bg-[#F7FAFF]'>
        <div className='max-w-screen-xl flex justify-around flex-wrap mx-auto'>
        {StatsData.map((item)=>(
            <StatsCard key={item.count} label={item.label} iconUrl={item.iconUrl} count={item.count} />
        ))}
    </div>
    </section>
  )
}

export default Stats