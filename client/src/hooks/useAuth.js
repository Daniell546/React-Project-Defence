import { useContext } from "react";
import { login } from "../api/auth.api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const loginHandler = async (email, password) => {
        const res = await login(email, password);
        localStorage.setItem("user", JSON.stringify(res));
    };

    return loginHandler;
};
