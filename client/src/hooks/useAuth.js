import { login } from "../api/auth.api";

export const useLogin = () => {
<<<<<<< HEAD

    const loginHandler = async (email, password) => {
        const res = await login(email, password);
        localStorage.setItem("user", JSON.stringify(res));
=======
    const loginHandler = async (email, password) => {
        const result = await login(email, password);
        console.log(result);
>>>>>>> parent of 86f7027 (login implementation)
    };

    return loginHandler;
};
