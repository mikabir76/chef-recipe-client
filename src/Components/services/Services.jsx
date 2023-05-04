import React from 'react';
import Lottie from "lottie-react";
import food from './../../assets/food.json'
import chef from './../../assets/chef.json'
import restaurent from './../../assets/restaurent.json'
import fast from './../../assets/fast.json'

const Services = () => {
    return (
        <div className='lg:max-w-screen-2xl mx-auto mb-40'>
          <div>
            <h1 className='text-4xl font-bold text-center mb-8 mt-8'>-Our Services-</h1>
          </div>
            <div className='grid grid-cols-4'>
           <div className="card h-72 w-80 text-center bg-gray-100 shadow">
 <Lottie className='h-36' animationData={fast}></Lottie>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">Fast Delevery</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div> 
           <div className="card h-72 w-80 text-center bg-gray-100 shadow">
 <Lottie className='h-36' animationData={chef}></Lottie>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">Experience Chef</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div> 
           <div className="card h-72 w-80 text-center bg-gray-100 shadow">
 <Lottie className='h-36' animationData={food}></Lottie>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">Healty Food</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div> 
           <div className="card h-72 w-80 text-center bg-gray-100 shadow">
 <Lottie className='h-36' animationData={restaurent}></Lottie>
  <div className="card-body">
    <h2 className="text-2xl font-semibold">Best Restaurent</h2>
    <p>Lorem ipsum dolor sit amet.</p>
  </div>
</div> 
        </div>
        </div>
    );
};

export default Services;