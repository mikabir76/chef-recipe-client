import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import { BiError } from "react-icons/bi";
import { Link } from 'react-router-dom';
import login from './../../assets/login.json'
import { FaGithub } from 'react-icons/fa';
import { AiFillGoogleCircle } from "react-icons/ai";
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {signIn, googleSignIn, githubSignIn} = useContext(AuthContext);
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        setError('');
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset('');
            toast('Login has been successfully')
        })
        .catch(err =>{
            console.log(err.message)
        })
       
    }
    const hangleGoogle = ()=>{
        googleSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const hangleGithub = ()=>{
        githubSignIn()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className=' mx-auto border-2 mb-24  w-[50%] grid lg:grid-cols-2 sm:grid-cols-1 items-center mt-24 shadow-xl'>
            
            <div className="hero w-[25%]">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                       <h1 className='text-2xl font-bold'>Please Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleLogin} className="card-body">
                          <ToastContainer></ToastContainer>
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
                                <button className="p-3 rounded-md text-xl w-96 font-semibold text-white bg-orange-400">Login</button>
                               <div className='flex items-center justify-center w-96'>
                               <hr className='w-2/4 ' />
                               <p>Or</p>
                               <hr className='w-2/4' />
                               </div>
                               <div className='space-y-4 mt-2'>
                                <button onClick={hangleGoogle} className=' w-96  border-2 font-bold hover:bg-green-600 p-3 rounded-md flex justify-center items-center'><AiFillGoogleCircle className='text-3xl '></AiFillGoogleCircle> Sign in with Google</button>
                                <button onClick={hangleGithub} className='w-96 border-2 font-bold hover:bg-gray-500 p-3 rounded-md flex justify-center items-center'><FaGithub className='text-3xl'></FaGithub> Sign in with Github</button>
                               </div>
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