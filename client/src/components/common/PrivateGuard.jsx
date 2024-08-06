import { useAuth } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


export default function PrivateGuard() {
    const { isAuthenticated } = useAuth()
    return isAuthenticated
        ? <Outlet />
        : <Navigate to="/login" />
}