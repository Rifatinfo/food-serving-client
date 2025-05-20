import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path : "/sign-in",
                element : <Login/>
            },
            {
                path : "/sign-up",
                element : <SignUp/>
            },
        ],
    },
    {
        path :"dashboard",
        element : <Dashboard/>,
        children : [
            {
                path : 'card',
                element : <Cart/>
            }
        ]
    }
]);

export default router;