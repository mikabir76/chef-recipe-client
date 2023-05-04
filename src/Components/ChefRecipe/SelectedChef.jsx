import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight, FaStar, FaStarHalf } from 'react-icons/fa';
import Rating from 'react-rating';
import { AiFillLike } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SelectedChef = ({ chef }) => {
    const { id, chef_name, chef_picture, years_of_experience, ratting, likes } = chef
    console.log(chef)
    return (
        <div>

            <div className="card w-96 h-full border bg-base-100 shadow-xl">
                <div>
                <figure className="px-10 pt-10">
                    <img src={chef_picture} alt="Shoes" className="h-48 w-96 rounded-md" />
                </figure>
                </div>
                <div className="card-body ms-4 mt-0">
                    <h2 className="card-title text-2xl font-semibold">{chef_name}</h2>
                    <p>Total experience {years_of_experience} years</p>
                    <div className='flex'>
                       <div className='grow'>
                       <Rating
                        className='text-yellow-500'
                        readonly
                         placeholderRating={ratting}
                         emptySymbol={<FaStarHalf></FaStarHalf>}
                         placeholderSymbol={<FaStar></FaStar>}
                         fullSymbol={<FaStar></FaStar>}
                        >

                        </Rating> {ratting}
                       </div>
                        <div>
                            <p className='flex items-center'><AiFillLike className='text-gray-400 text-xl'></AiFillLike> Likes:{likes}</p>
                        </div>
                    </div>
                    <div className='flex  text-white rounded-md hover:bg-orange-500 bg-orange-400 p-2 w-2/4 items-center justify-center'><Link><button className=' text-xl font-bold '>Recipes</button></Link>
                    <FaArrowRight className='mt-1 ms-2'></FaArrowRight> </div>  
                </div>
            </div>
        </div>
    );
};

export default SelectedChef;