import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import HeroArea from "../Home/Home";
import Blog from "../Components/Blog/Blog";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Home/Home";
import ChefRecipe from "../Components/ChefRecipe/ChefRecipe";
import ChefDetails from "../Components/ChefRecipe/ChefDetails";
import PrivateRouter from "../Provider/PrivateRouter";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import ErrorLayout from "../Layouts/ErrorLayout/ErrorLayout";

const route = createBrowserRouter(
    [
        {
            path: '/',
            element :<Main></Main>,
            children : [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: 'chef',
                    element: <ChefRecipe></ChefRecipe>
                    
                },
                {
                    path: 'chef/:id',
                    element: <PrivateRouter><ChefDetails></ChefDetails></PrivateRouter>,
                    loader: ({params}) => fetch(`https://chef-recipe-server-side-kabirmd0987-gmailcom.vercel.app/chef/${params.id}`)
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
        },
        {
            path: '*',
            element: <ErrorLayout></ErrorLayout>
        }
       
    ]
);

export default route;