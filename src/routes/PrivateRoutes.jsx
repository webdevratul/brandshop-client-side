import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../authProvider/Provider";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authContext);
    if (loading) {
        return <div className="w-[100px] mx-auto mt-26 z-20">
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;