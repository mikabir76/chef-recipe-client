import React from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import Services from '../Components/services/Services';
import ChefRecipe from '../Components/ChefRecipe/ChefRecipe';
import { useLoaderData } from 'react-router-dom';
import CustomersReviews from '../Components/CustomersReviews/CustomersReviews';

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
            <CustomersReviews></CustomersReviews>
            <div>
                <h1 className='text-center text-4xl font-bold'>Customer order form</h1>
            <div className="w-full ">
                <form className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-96" />
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered w-96" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold">Date of Birth</span>
                            </label>
                            <input type="date" placeholder="Date of Birth" name='date' className="input input-bordered w-96" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Current Address</span>
                        </label>
                        <input type="text" placeholder="Address" name='password' className="input input-bordered w-96" />
                        <label for="gender" className='text-xl font-semibold'>Select Gender</label>
                        <select name="gender">
                            <option value="">Please select</option>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <button className="p-3 rounded-md text-xl w-96 font-semibold text-white bg-orange-400">Register</button>
                    </div>

                </form>
            </div>
            </div>
        </div>
    );
};

export default Home;