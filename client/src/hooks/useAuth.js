import { useContext } from "react";
import { login, register } from "../api/auth.api";
import { AuthContext } from "../contexts/AuthContext";

export const useLogin = () => {
    const {changeAuthState} = useContext(AuthContext);
    const loginHandler = async (email, password) => {
        const {password:_, ...result} = await login(email, password);
        changeAuthState(result)
        localStorage.setItem('user', JSON.stringify(result))
    };

    return loginHandler;
};

export const useRegister = () => {
    const {changeAuthState} = useContext(AuthContext);
    const registerHandler = async (email, phoneNumber, password, rePass) => {
        console.log(phoneNumber);
        const {password:_, ...result} = await register(email, phoneNumber, password, rePass)
        changeAuthState(result);
        localStorage.setItem('user', JSON.stringify(result))
    }

    return registerHandler
}