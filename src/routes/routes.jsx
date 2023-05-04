import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HeroArea from "../Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const route = createBrowserRouter(
    [
        {
            path: '/',
            element :<Main></Main>,
            children : [
                {
                    path: '/',
                    element: <HeroArea></HeroArea>
                },
                {
                    path : 'blog',
                    element : <Blog></Blog>
                },
                {
                    path : 'login',
                    element: <Login></Login>
                },
                {
                    path: 'register',
                    element : <Register></Register>
                }
                
            ]
        }
       
    ]
);

export default route;