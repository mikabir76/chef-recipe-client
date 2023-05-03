import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";

const route = createBrowserRouter(
    [
        {
            path: '/',
            element :<Main></Main>,
            children : [
                {
                    path : '/blog',
                    element: <Blog></Blog>
                }
                
            ]
        },
        {
            path: '/',
            element :<LoginLayout></LoginLayout>,
            children : [
                {
                    path: 'login',
                    element : <Login></Login>
                },
                {
                    path : 'register',
                    element : <Register></Register>
                }
                
            ]
        }
    ]
);

export default route;