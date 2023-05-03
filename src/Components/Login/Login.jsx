import React, { useState } from 'react';
import Lottie from "lottie-react";
import { BiError } from "react-icons/bi";
import { Link } from 'react-router-dom';
import login from './../../assets/login.json'

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('');
       
    }
    return (
        <div className=' mx-auto w-[50%] grid lg:grid-cols-2 sm:grid-cols-1 items-center mt-24 shadow-xl'>
            
            <div className="hero w-[25%]">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                       <h1 className='text-2xl font-bold'>Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                          
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered w-96" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered w-96" required />
                                <p className=''>Don't Have an Account? <Link to='/register' className='link text-blue-500'>Register</Link></p>
                            </div>
                            <div className="form-control">
                                <button className="p-3 rounded-md text-xl w-96 font-semibold text-white bg-orange-400">Register</button>
                            </div>
                            <div>
                               {error && <p className='text-black flex items-center'><BiError className='text-yellow-600 text-2xl'></BiError>{error}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className='w-[25%] '>
                <Lottie className='h-96 w-96 mr-96' animationData={login}></Lottie>
            </div>
        </div>
    );
};

export default Login;