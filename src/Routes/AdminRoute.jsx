import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = () => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-bars loading-xl"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/sign-in" state={{ from: location }} replace></Navigate>

};

export default AdminRoute;