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
            {
                chefCard.map(chef => <SelectedChef key={chef.id} chef={chef}></SelectedChef>)
            }
        </div>
    );
};

export default ChefRecipe;