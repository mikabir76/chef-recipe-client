import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

const SelectedChef = ({chef}) => {
    const {id, chefName, chefPicture, yearsOfExperience}  = chef
    console.log(chef)
    return (
        <div className=''>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={chefPicture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{chefName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><FaArrowRight></FaArrowRight> Recipes</button>
    </div>
  </div>
</div>  
        </div>
    );
};

export default SelectedChef;