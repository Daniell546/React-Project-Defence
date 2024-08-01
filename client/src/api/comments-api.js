import * as request from "./requester";

const BASE_URL = "http://localhost:3000/api";

export const getAllCommentsByPerfume = async (perfumeId) => {
    const result = await request.get(`${BASE_URL}/comments/all${perfumeId}`);
    const comments = Object.values(result);
    return comments;
};

export const createComment = async (perfumeId, commentData) => {
    const user = localStorage.getItem("user");
    if (user) {
        const userId = JSON.parse(user)._id
        await request.post(`${BASE_URL}/comments/create`, {
            perfumeId,
            commentData,
            userId
        });
    }
};
