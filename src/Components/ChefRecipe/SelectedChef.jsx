import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight } from 'react-icons/fa';

const SelectedChef = ({chef}) => {
    const {id, chefName, chefPicture, yearsOfExperience}  = chef
    // console.log(chef)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={chefPicture} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{chefName}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SelectedChef;