import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';




const HeroArea = () => {
    return (
        <div className='lg:max-w-screen-2xl mx-auto grid grid-cols-2  items-center justify-center mt-48'>
          <div className='p-10'>
            <h1 className='text-4xl font-bold'>What about you? <br /> Customers</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores molestias soluta, quis accusamus cum dicta odit et laborum doloremque autem libero unde totam, <br /> aperiam nulla consequatur adipisci saepe, deleniti mollitia minus necessitatibus distinctio perspiciatis maiores nesciunt aliquam? Sapiente doloribus, distinctio officiis sequi beatae quo vitae porro dolore, animi veniam itaque!</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>learn more</button>
          </div>
          <div>
                <img className='w-96' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-WX8TrKfYD6R8-ssAyQWM0H47P4RCfS0MXA&usqp=CAU" alt="" />
          </div>
        </div>
    );
};

export default HeroArea;