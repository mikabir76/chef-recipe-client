import React from 'react';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import HeroArea from '../Components/Slider/heroArea';

const Home = () => {
    return (
        <div>
           <NavigationBar></NavigationBar> 
           <HeroArea></HeroArea>
        </div>
    );
};

export default Home;