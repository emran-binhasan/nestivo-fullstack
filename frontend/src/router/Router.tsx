import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";
import Search from "../pages/Search";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout><Home/></Layout>
    },
    {
        path:'/search',
        element:<Layout><Search/></Layout>
    },
    {
        path:'*',
        element:<Navigate to='/' />
    }
])
