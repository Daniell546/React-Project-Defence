import requester, * as request from "./requester";
import axios from 'axios';
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

export const getUserById = async (userId) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/user/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const authAPI = {
    fetchUser,
    register,
    login,
};

export default authAPI;
