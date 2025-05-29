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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        element : <PrivateRoute><Dashboard/></PrivateRoute>,
        children : [
            {
                path : 'card',
                element : <Cart/>
            },
            // admin routes 
            {
                path : 'users',
                element : <AllUsers/>
            },
            {
                path : 'addItems',
                element : <AdminRoute><AddItems/></AdminRoute>
            },
            {
                path : 'manageItem',
                element : <AdminRoute><ManageItems/></AdminRoute>
            },
            {
                path : 'updateItem/:id',
                element : <UpdateItem/>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path : 'payment',
                element : <Payment/>
            }
        ]
    }
]);

export default router;