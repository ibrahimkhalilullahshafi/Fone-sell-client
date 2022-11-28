import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import Blog from "../components/pages/blog/Blog";
import Home from "../components/pages/home/Home";
import Products from "../components/pages/products/Products";
import Main from "../layout/Main";
import NotFound from "./404route/NotFound";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: "/category/:id",
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/signup",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            }
        ]

    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    }
])