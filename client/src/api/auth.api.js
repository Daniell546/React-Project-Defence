import requester, * as request from "./requester";

const BASE_URL = "http://localhost:3030/users";

export const login = async (email, password) => {
    const authData = await requester.post(
        `http://localhost:3000/api/user/login`,
        { email, password }
    );
    return authData;
};

export const register = (email, phoneNumber, password, rePass) =>
    requester.post(`http://localhost:3000/api/user/register`, {
        email,
        phoneNumber,
        password,
        rePass,
    });

export const fetchUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

const authAPI = {
    fetchUser,
    register,
    login
};

export default authAPI;