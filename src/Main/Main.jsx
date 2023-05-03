import React from 'react';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;