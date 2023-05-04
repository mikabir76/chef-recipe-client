import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import Services from '../Components/services/Services';
import ChefRecipe from '../Components/ChefRecipe/ChefRecipe';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
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
            <img className='w-100%' src="https://wallpaperaccess.com/full/4117465.jpg" alt="" />
          </div>
          <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
            <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>No Matter How you cook FOODMOOD has many the recipes</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>Explore Recipes</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>

            <img className='h-2/3' src="https://wallpaperaccess.com/full/3014596.jpg" alt="" />
          </div>
          <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
          <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>No Matter How you cook FOODMOOD has many the recipes</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>Explore Recipes</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
          <img src="https://media.thebicestercollection.com/3z73vs69pqez/2FGurCWIcuGyUsavCJLhKm/b7e53b7e3f274ef87864d5df3b0cd1bb/BV_Landscape_1920x1080_-farmshop_Winter_Hero.jpg?w=1920&h=1080&fl=progressive&q=80&fm=jpg" alt="" />
          </div>
          <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
          <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>No Matter How you cook FOODMOOD has many the recipes</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>Explore Recipes</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
         <div className='relative'>
         <img src="https://magazine.zenith.me/sites/default/files/pool/medias/images/articles/1920%201080%20leckerschmecker%20%281%29.jpg" alt="" />
         </div>
         <div className='absolute top-1/4 space-y-5 text-white w-2/4 text-center left-1/4'>
          <h1 className='text-4xl font-bold'>Best Trending Food</h1>
            <p className=''>No Matter How you cook FOODMOOD has many the recipes</p>
            <button className='bg-orange-400 px-6 py-2 rounded-lg'>Explore Recipes</button>
          </div>
        </SwiperSlide>
      </Swiper>
     <Services></Services>
     {/* Chef Recipe Data added===================== */}
     <ChefRecipe></ChefRecipe>
    </div>
  );
};

export default Home;