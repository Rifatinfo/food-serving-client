import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate,  useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/sign-in" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;