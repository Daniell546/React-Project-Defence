import * as request from "./requester";

const BASE_URL = "http://localhost:3000/api";

export const getAll = async () => {
    const result = await request.get(`${BASE_URL}/home`);

    const perfumes = Object.values(result);
    return perfumes;
};

export const getOne = (perfumeId) => request.get(`${BASE_URL}/${perfumeId}`);

export const createPerfume = async (data) => {
    const user = localStorage.getItem("user");
    if (user) {
        const owner = JSON.parse(user);
        await request.post(`${BASE_URL}/perfumes/create`, { ...data, owner });
    }
};

const perfumesAPI = {
    getAll,
    getOne,
    createPerfume,
};

export default perfumesAPI;
