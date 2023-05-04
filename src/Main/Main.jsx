import React from 'react';
import NavigationBar from '../Layouts/NavigationBar/NavigationBar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>{navigation.state === 'loading' && '<progress className="progress progress-info w-56" value="100" max="100"></progress>'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;