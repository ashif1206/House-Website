import React, { useRef, useState } from 'react'
import { TESTIMONIALS } from '../utils/data'
import TestimonialCard from './Card/TestimonialCard'
import Slider from 'react-slick'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Pagination from './Pagination/Pagination'


function Testimonials() {
  const slderRef = useRef()
  const [currentSlide,setCrruentSlide] = useState(0);
    const settings = {
      dots:false,
      infinite:true,
      speed:500,
      slidesToShow:2,
      slidesToScroll:1,
      arrows:false,
      autoplay:true,
      speed:800,
      autoplaySpeed:4000,
      responsive:[
        {
          breakpoint:769,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          }
        }
      ],
      beforeChange:(index)=>{
        setCrruentSlide(index)
      },
    };

    function slideRight(){
      slderRef.current.slickNext()
    };

    function slideLeft(){
      slderRef.current.slickPrev();
    };

  return (
    <section id='testimonials' className='max-w-[1200px] mx-auto py-16'>
        <h5 className='text-2xl text-center font-semibold text-blue-900 mb-10'>
            Testimonials
        </h5>
        <div className='relative mb-7 px-5 md:px-10'>
           <Slider ref={slderRef} {...settings}>
             {TESTIMONIALS.map((item,ind)=>(
                <TestimonialCard
                key={ind}
                name={item.name}
                imgUrl={item.imgUrl}
                review={item.review}
                description={item.description}
                 />
            ))}
           </Slider>
           <button className='absolute arrow-btn left-1 md:left-5 lg:left-2 top-[50%]' onClick={slideLeft}>
            <RiArrowLeftSLine size={24}/>
           </button>
           <button className='absolute arrow-btn right-1 md:right-5 lg:right-2 top-[50%]' onClick={slideRight}>
            <RiArrowRightSLine size={24} />
           </button>
        </div>
        <Pagination active={currentSlide}/>
    </section>
  )
}

export default Testimonials