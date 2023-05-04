import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <div className="navbar flex justify-between h-24 lg:max-w-screen-2xl mx-auto rounded-lg ">
      
        <div>
          <img className='h-8' src="/../src/assets/logo.png" alt="" />
          <h1 className='font-bold text-2xl'>FOOD<span className='text-orange-400'>MOOD</span></h1>
        </div>
        <div className='space-x-9 font-bold text-xl'>
          <Link>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link>Recipe</Link>
        </div>
      <div className='space-x-5 font-bold text-xl'>
        <p>Profile</p>
        <button className='bg-orange-400 px-6 py-2  rounded-md'>Login</button>
      </div>
    </div>
  );
};

export default NavigationBar;