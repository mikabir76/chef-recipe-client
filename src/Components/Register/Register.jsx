import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import register from '../../assets/register.json'
import { Link } from 'react-router-dom';
import { BiError } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';
import { FaBeer, FaCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const {createUser, profileUpdate} = useContext(AuthContext);
    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        setError('');
        if(!/(?=.*[A-Z])/.test(password)){
            setError('Please add at least one uppercase')
            return
        }
        else if(!/(?=.*[!@#$&*])/.test(password)){
            setError('Please add a special character')
            return
        }
        else if(password.length < 6){
            setError('Please must be a six character text')
            return
        }
        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            profileUserUpdate(loggedUser, name, photo)
            toast('Register has been successfully')
        })
        .catch(err => {
            console.log(err.message)
        })
        
    }
    const profileUserUpdate= (user, name, url)=>{
        profileUpdate(user, {
            displayName: name,
            photoURL: url
           
        })
        .then(()=>{

        })
        .catch(err => console.log(err.message))
    }
    return (
        <div className=' mx-auto w-[50%] border-2 mb-24 grid lg:grid-cols-2 sm:grid-cols-1 items-center mt-24 shadow-xl'>
            
            <div className="hero w-[25%]">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                       <h1 className='text-2xl font-bold'>Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                        <form onSubmit={handleRegister} className="card-body">
                          
                          <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Name</span>
                                </label>
                                <input type="text" placeholder="Name"  name='name' className="input input-bordered w-96" />
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name='photo' className="input input-bordered w-96" />
                            </div>
                          </div>
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
                                <p className=''>Already Have an Account? <Link to='/login' className='link text-blue-500'>Login</Link></p>
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
                <ToastContainer></ToastContainer>
            </div>
            <div className='w-[25%] '>
                <Lottie className='h-96 w-96 mr-96' animationData={register}></Lottie>
            </div>
        </div>
    );
};

export default Register;