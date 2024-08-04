import requester, * as request from "./requester";

const BASE_URL = "http://localhost:3000/api";

export const getAllCommentsByPerfume = async (perfumeId) => {
    const result = await request.get(`${BASE_URL}/comments/all/${perfumeId}`);
    const comments = Object.values(result);
    return comments;
};

export const createComment = async (perfumeId, commentData, userId) => {
    const newComment = await request.post(`${BASE_URL}/comments/create`, {
        perfumeId,
        commentData,
        userId,
    });
    return newComment;
};

export const editComment = async (commentId, newComment) => {
    let user = localStorage.getItem("user");
    if (user) {
        const owner = JSON.parse(user);
        await request.put(`${BASE_URL}/comments/edit/${commentId}`, {
            newComment,
            owner,
        });
    }
};

export const fetchOneComment = async (commentId) => {
    const comment = await requester.get(`${BASE_URL}/comments/${commentId}`);
    return comment;
};

export const deleteComment = async (commentId, perfumeId, user) => {
    await requester.del(`${BASE_URL}/comments/delete/${commentId}`, {perfumeId, user})
};
