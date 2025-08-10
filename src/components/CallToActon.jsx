import React from 'react'
import HouseImg from "../Images/heroImg2.jpg"

function CallToActon() {
  return (
    <div className='bg-[#F7FAFF]'>
      <div className='max-w-[1200px] mx-auto h-auto flex flex-col items-start md:h-[400px] md:flex-row min-[1090px]:h-[320px]'>
        <img src={HouseImg} alt="House" className='w-[80%] h-full mx-auto md:mx-0 md:w-1/2 md:h-full object-cover' />
        <div className='p-10'>
          <h5 className='text-lg font-medium text-blue-900 mb-2 lg:mb-4'>Find Out What its Cost</h5>
          <p className='text-sm  text-blue-900 leading-6 mb-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo dignissimos ex praesentium unde corporis at deserunt debitis. Possimus, vel libero? Voluptate doloremque doloribus accusamus maiores ratione tenetur repellat consequuntur.
          Aspernatur nemo natus quibusdam? Ea labore, nobis aspernatur, sit, vero dicta eaque explicabo ipsam nostrum quibusdam doloremque corrupti laboriosam! Maiores iusto, fugiat officiis magnam suscipit quae possimus dolores eius eaque?</p>
          <button className='primary-btn'>GET ESTIMATION</button>
        </div>
      </div>
    </div>
  )
}

export default CallToActon