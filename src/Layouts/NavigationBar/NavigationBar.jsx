import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handlerSignOut = ()=>{
    logOut()
    .then()
    .catch(err =>{
      console.log(err.message)
    })
  }
  return (
    <div className="navbar flex justify-between h-24 lg:max-w-screen-2xl mx-auto rounded-lg ">
      
        <div>
          <img className='h-8' src="/../src/assets/logo.png" alt="" />
          <h1 className='font-bold text-2xl'>FOOD<span className='text-orange-400'>MOOD</span></h1>
        </div>
        <div className='space-x-9 font-bold text-xl'>
          <NavLink to='/' className={({isActive}) => isActive ? 'text-orange-400 hover:text-2xl' : ""}>Home</NavLink>
          <NavLink to='/blog' className={({isActive}) => isActive ? 'text-orange-400 hover:text-2xl' : ""}>Blog</NavLink>
          <NavLink className={({isActive}) => isActive ? "" : "text-orange-400"}>Recipe</NavLink>
        </div>
      <div className='space-x-5 font-bold text-xl'>
      { user ? <><div className='tooltip tooltip-left' data-tip={user.displayName}><img className='rounded-3xl w-16'  src={user.photoURL} alt="" /></div> <button onClick={handlerSignOut} className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Logout</button></> : <><Link to='/login'><button className='bg-orange-400 px-6 py-2 text-white  rounded-md'>Login</button></Link></> }
        
      </div>
    </div>
  );
};

export default NavigationBar;