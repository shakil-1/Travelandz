import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import a from "../../../assets/a.png";
import b from "../../../assets/b.png";
import c from "../../../assets/c.png";
import d from "../../../assets/d.png";
const Slider = () => {
    return (
        <div className="max-w-mxWidth mx-auto px-5">
            <div className="grid grid-cols-12 mb-[60px] ">
                <div className=" col-span-12 lg:col-span-8">
               <h3 className="text-[#1B1B1E] text-[25px] lg:text-[35px] font-bold ">Discover Unique Destinations with AI Trip Itinerary.</h3>
               <p className="text-[#3C3C43] text-lg font-normal mt-6">Explore our AI's handpicked selection of the top 10 unique cities and create lifelong vacation's memories using AI trip planner. Use Travelandz AI planner to experience local culture and nature in these breathtaking destinations.</p>
                </div>
                <div className="hidden lg:block lg:col-span-4  ">
            
                </div>
            </div>


        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
      
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className=' h-[350px] lg:h-[540px] rounded-20 '>
            <img className='relative  rounded-20 h-full ' src={a} alt="" />
            </div>
            <h3 className='text-3xl font-bold text-[#FFF] absolute bottom-[32px] left-[32px] text-center'>Dubai</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-[350px] lg:h-[540px] rounded-20 '>
            <img className='relative  rounded-20 h-full ' src={b} alt="" />
            </div>
            <h3 className='text-3xl font-bold text-[#FFF] absolute bottom-[32px] left-[32px] text-center'>Petra</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' h-[350px] lg:h-[540px] rounded-20 '>
            <img className='relative  rounded-20 h-full ' src={c} alt="" />
            </div>
            <h3 className='text-3xl font-bold text-[#FFF] absolute bottom-[32px] left-[32px] text-center'>Istanbul</h3>
        </SwiperSlide>
        <SwiperSlide>
            <div className='h-[350px] lg:h-[540px] rounded-20 '>
            <img className='relative  rounded-20 h-full ' src={d} alt="" />
            </div>
            <h3 className='text-3xl font-bold text-[#FFF] absolute bottom-[32px] left-[32px] text-center'>Dubai</h3>
        </SwiperSlide>
      </Swiper>


        </div>
    );
};

export default Slider;