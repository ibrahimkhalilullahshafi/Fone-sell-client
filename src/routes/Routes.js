import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";
import AddProduct from "../components/pages/addProduct/AddProduct";
import AllBuyer from "../components/pages/allBuyer/AllBuyer";
import AllSeller from "../components/pages/allSeller/AllSeller";
import Blog from "../components/pages/blog/Blog";
import Home from "../components/pages/home/Home";
import MyOrders from "../components/pages/myOrders/MyOrders";
import MyProduct from "../components/pages/myProduct/MyProduct";
import Products from "../components/pages/products/Products";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import NotFound from "./404route/NotFound";
import AdminRoute from "./adminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                path: "/addproduct",
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: "/blog",
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            }

        ]

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: "/dashboard",
                element: <MyOrders></MyOrders>
            },
            {
                path: "/dashboard/myproducts",
                element: <MyProduct></MyProduct>
            },
            {
                path: "/dashboard/allseller",
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>,
                loader: () => fetch('http://localhost:5000/allseller')
            },
            {
                path: "/dashboard/allbuyer",
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>,
                loader: () => fetch('http://localhost:5000/allbuyer')
            }
        ]
    },
    {
        path: "/*",
        element: <NotFound></NotFound>,
    }

])