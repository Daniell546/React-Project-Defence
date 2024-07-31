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

export const deletePerfume = async (perfumeId) => request.del(`${BASE_URL}/perfumes/${perfumeId}/delete`)

export const searchByCriteria = async (text, criteria) => {
    let perfumes = [];
    if (text != "") {
        perfumes = await request.get(`${BASE_URL}/search/${text}/${criteria}`);
    } else {
        perfumes = await getAll()
    }
    return Object.values(perfumes);
};

const perfumesAPI = {
    getAll,
    getOne,
    createPerfume,
    searchByCriteria,
    deletePerfume
};

export default perfumesAPI;
