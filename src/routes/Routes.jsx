
import {
    createBrowserRouter,

} from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../components/pages/Contact";
import Brands from "../components/pages/Brands";
import About from "../components/pages/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddProducts from "../pages/AddProducts";
import PrivateRoutes from "./PrivateRoutes";
import Products from "../pages/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/brands",
                element: <Brands></Brands>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/addProducts",
                element: <PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
            },
            {
                path: "/products/:id",
                element: <PrivateRoutes><Products></Products></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:200/brands/${params.id}`)
            },
        ]
    },
]);

export default router;