import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import ProducCategory from './ProducCategory';

// img
import v1 from './img/v1.png'
import v2 from './img/v2.png'
import v3 from './img/v3.png'
import v4 from './img/v4.png'
import v5 from './img/v5.png'


export default function SlideCategory() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide><ProducCategory nombre='vegetables' img={v1}/></SwiperSlide>
        <SwiperSlide><ProducCategory nombre='Fruits'  img={v2}/></SwiperSlide>
        <SwiperSlide><ProducCategory nombre='Meat & Eggs'  img={v3}/></SwiperSlide>
        <SwiperSlide><ProducCategory nombre='Drinks'  img={v4}/></SwiperSlide>
        <SwiperSlide><ProducCategory nombre='Bakery'  img={v5}/></SwiperSlide>
        
        
      </Swiper>
    </>
  );
}
