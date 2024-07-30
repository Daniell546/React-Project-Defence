import requester, * as request from "./requester";


const BASE_URL = "http://localhost:3030/users";

export const login = async (email, password) => {
    const authData = await requester.post(`http://localhost:3000/api/user/login`, {email, password})
    return authData;
} 
