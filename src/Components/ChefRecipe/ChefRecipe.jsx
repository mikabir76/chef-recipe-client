import React, { useEffect, useState } from 'react';
import SelectedChef from './SelectedChef';


const ChefRecipe = () => {
    const [chefCard, setChefCard] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chef')
        .then(res => res.json())
        .then(data => setChefCard(data))
    }, [])
    return (
        <div className='lg:max-w-screen-2xl mx-auto'>
            <h1>Our Honorable Chef List</h1>
           <div className='grid grid-cols-1 lg:grid-cols-3'>
           {
                chefCard.map(chef => <SelectedChef key={chef.id} chef={chef}></SelectedChef>)
            }
           </div>
        </div>
    );
};

export default ChefRecipe;