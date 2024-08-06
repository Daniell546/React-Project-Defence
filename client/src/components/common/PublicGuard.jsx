import { useAuth } from "../../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";


export default function PublicGuard() {
    const { isAuthenticated } = useAuth()
    return !isAuthenticated
        ? <Outlet />
        : <Navigate to="/" />
}