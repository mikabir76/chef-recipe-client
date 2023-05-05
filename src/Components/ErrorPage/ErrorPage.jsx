import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='lg:max-w-screen-2xl text-center mb-16'>
            <div className='w-full flex justify-center'>
            <img className='w-2/4 ms-28' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?size=626&ext=jpg&ga=GA1.2.1654759242.1680368383&semt=ais" alt="" />
            </div>
            <p className='text-xl mb-2'>Sorry, page is not found please go back</p>
            <div className='w-full flex justify-center'>
            <Link to='/'><button className='bg-orange-400 p-3 rounded-lg flex items-center text-xl font-bold text-white px-4'><FaArrowCircleLeft></FaArrowCircleLeft> Go back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;