import {} from "react";
import { login, register } from "../api/auth.api";
import { useAuth } from "../contexts/AuthContext";

export const useLogin = () => {
    const { changeAuthState } = useAuth();
    const loginHandler = async (email, password) => {
        const { password: _, ...result } = await login(email, password);
        changeAuthState(result);
        localStorage.setItem("user", JSON.stringify(result));
    };

    return loginHandler;
};

export const useRegister = () => {
    const { changeAuthState } = useAuth();
    const registerHandler = async (email, phoneNumber, password, rePass) => {
        const { password: _, ...result } = await register(
            email,
            phoneNumber,
            password,
            rePass
        );
        changeAuthState(result);
        localStorage.setItem("user", JSON.stringify(result));
    };

    return registerHandler;
};
