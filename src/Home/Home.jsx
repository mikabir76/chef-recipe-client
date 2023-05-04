import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import Services from '../Components/services/Services';

const HeroArea = () => {
  return (
    <div className='lg:max-w-screen-2xl mx-auto'>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
      >
        <SwiperSlide>
          <div className='relative'>
            <img className='h-2/3' src="https://wallpaperaccess.com/full/7066809.jpg" alt="" />
          </div>
          <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
            <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias soluta, quis accusamus cum dicta odit et laborum doloremque autem libero unde totam, <br /> aperiam nulla consequatur adipisci saepe, deleniti mollitia minus necessitatibus distinctio perspiciatis maiores nesciunt aliquam? Sapiente doloribus, distinctio officiis sequi beatae quo vitae porro dolore, animi veniam itaque!</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>learn more</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>

            <img className='h-2/3' src="https://wallpaperaccess.com/full/4117465.jpg" alt="" />
          </div>
          <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
            <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias soluta, quis accusamus cum dicta odit et laborum doloremque autem libero unde totam, <br /> aperiam nulla consequatur adipisci saepe, deleniti mollitia minus necessitatibus distinctio perspiciatis maiores nesciunt aliquam? Sapiente doloribus, distinctio officiis sequi beatae quo vitae porro dolore, animi veniam itaque!</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>learn more</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://wallpaperaccess.com/full/7066809.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://wallpaperaccess.com/full/7066809.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
     <Services></Services>
    </div>
  );
};

export default HeroArea;