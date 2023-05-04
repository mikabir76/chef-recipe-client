import React from 'react';
import { Link } from 'react-router-dom';


const NavigationBar = () => {
  return (
    <div className="navbar flex justify-between bg-orange-400 lg:max-w-screen-2xl mx-auto rounded-lg text-primary-content">
      
        <div>
          <img className='h-8' src="/../src/assets/logo.png" alt="" />
          <h1 className='font-bold text-xl'>FOOD<span className='text-blue-800'>MOOD</span></h1>
        </div>
        <div className='space-x-9 text-xl'>
          <Link>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/login'>Login</Link>
        </div>
      <div className='space-x-5'>
        <p>Profile</p>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavigationBar;