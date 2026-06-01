import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {

    const isAuthenticated = false;

    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'}/>
}

export default ProtectedRoutes;