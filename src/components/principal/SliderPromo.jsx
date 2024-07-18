import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

// img
import canasta from './img/canasta.png'

export default function SliderPromo() {
  return (
    <>
      <Swiper
        className="mySwiper swiper-h"
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className='overflow-hidden'>
          <div className='relative flex justify-between '>
            <div id='circle ' 
            className='bg-[#FFE082] w-[300px] h-[300px] rounded-[50%]  absolute z-[-10] top-[-45%] left-[65%]'></div>
              <div
              className='relative text-white flex flex-col justify-center items-center w-[80%]'>
                  <p className='text-[30px] font-extrabold text-shadow'>Discount</p>
                  <p  className='text-[50px] font-extrabold text-shadow'>25%</p>
                  <p className='text-[10px]'>All Vegetables & Fruits</p>
                  <button
                   className='bg-[#FFE082] text-black text-[15px] rounded-[20px] py-[2px] px-[20px]'
                   >See Detail</button>
              </div>
            <img 
            className='w-[10%] relative right-[-10%]' 
            src={canasta} alt="" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='overflow-hidden'>
          <div className='relative flex justify-between '>
            <div id='circle ' 
            className='bg-[#FFE082] w-[300px] h-[300px] rounded-[50%]  absolute z-[-10] top-[-45%] left-[65%]'></div>
              <div
              className='relative text-white flex flex-col justify-center items-center w-[80%]'>
                  <p className='text-[30px] font-extrabold text-shadow'>Discount</p>
                  <p  className='text-[50px] font-extrabold text-shadow'>25%</p>
                  <p className='text-[10px]'>All Vegetables & Fruits</p>
                  <button
                   className='bg-[#FFE082] text-black text-[15px] rounded-[20px] py-[2px] px-[20px]'
                   >See Detail</button>
              </div>
            <img 
            className='w-[10%] relative right-[-10%]' 
            src={canasta} alt="" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='overflow-hidden'>
          <div className='relative flex justify-between '>
            <div id='circle ' 
            className='bg-[#FFE082] w-[300px] h-[300px] rounded-[50%]  absolute z-[-10] top-[-45%] left-[65%]'></div>
              <div
              className='relative text-white flex flex-col justify-center items-center w-[80%]'>
                  <p className='text-[30px] font-extrabold text-shadow'>Discount</p>
                  <p  className='text-[50px] font-extrabold text-shadow'>25%</p>
                  <p className='text-[10px]'>All Vegetables & Fruits</p>
                  <button
                   className='bg-[#FFE082] text-black text-[15px] rounded-[20px] py-[2px] px-[20px]'
                   >See Detail</button>
              </div>
            <img 
            className='w-[10%] relative right-[-10%]' 
            src={canasta} alt="" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='overflow-hidden'>
          <div className='relative flex justify-between '>
            <div id='circle ' 
            className='bg-[#FFE082] w-[300px] h-[300px] rounded-[50%]  absolute z-[-10] top-[-45%] left-[65%]'></div>
              <div
              className='relative text-white flex flex-col justify-center items-center w-[80%]'>
                  <p className='text-[30px] font-extrabold text-shadow'>Discount</p>
                  <p  className='text-[50px] font-extrabold text-shadow'>25%</p>
                  <p className='text-[10px]'>All Vegetables & Fruits</p>
                  <button
                   className='bg-[#FFE082] text-black text-[15px] rounded-[20px] py-[2px] px-[20px]'
                   >See Detail</button>
              </div>
            <img 
            className='w-[10%] relative right-[-10%]' 
            src={canasta} alt="" />
          </div>
        </SwiperSlide>
        
      </Swiper>
    </>
  );
}
