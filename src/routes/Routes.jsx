
import {
    createBrowserRouter,

} from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../pages/Home";
import Contact from "../components/pages/Contact";
import Brands from "../components/pages/Brands";
import About from "../components/pages/About";


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
        ]
    },
]);

export default router;