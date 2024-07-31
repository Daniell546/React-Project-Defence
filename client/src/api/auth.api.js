import requester, * as request from "./requester";


const BASE_URL = "http://localhost:3030/users";

export const login = async (email, password) => {
    const authData = await requester.post(`http://localhost:3000/api/user/login`, {email, password})
    return authData;
} 


export const register = async (email, phoneNumber, password, rePass) => {
    const authData = await requester.post(`http://localhost:3000/api/user/register`, {email, phoneNumber, password, rePass})
    return authData;
} 