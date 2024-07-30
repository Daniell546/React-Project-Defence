import { useContext } from "react";
import { login } from "../api/auth.api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {

    const {changeAuthState} = useContext(AuthContext)

    const loginHandler = async (email, password) => {
        const res = await login(email, password);
        changeAuthState(res)
        localStorage.setItem('auth', res.token)
        localStorage.setItem('email', res.email)
    };

    return loginHandler;
};
