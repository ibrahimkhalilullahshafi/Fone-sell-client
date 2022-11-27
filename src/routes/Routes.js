import { createBrowserRouter } from "react-router-dom";
import Home from "../components/pages/home/Home";
import Products from "../components/pages/products/Products";
import Main from "../layout/Main";

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
            }
        ]

    }
])