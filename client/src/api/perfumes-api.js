import * as request from "./requester";

const BASE_URL = "http://localhost:3000/api";

export const getAll = async () => {
    const result = await request.get(`${BASE_URL}/home`);

    const perfumes = Object.values(result);
    return perfumes;
};

export const getOne = (perfumeId) => request.get(`${BASE_URL}/${perfumeId}`);


const perfumesAPI = {
    getAll,
    getOne
};

export default perfumesAPI;
