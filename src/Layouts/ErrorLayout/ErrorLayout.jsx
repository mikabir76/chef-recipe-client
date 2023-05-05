import React from 'react';
import ErrorPage from '../../Components/ErrorPage/ErrorPage';
import { Outlet } from 'react-router-dom';

const ErrorLayout = () => {
    return (
        <div>
            <ErrorPage></ErrorPage>
            <Outlet></Outlet>
        </div>
    );
};

export default ErrorLayout;