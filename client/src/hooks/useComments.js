import { useEffect, useState } from "react";
import { createComment, getAllCommentsByPerfume } from "../api/comments-api";

export function useGetCommentsByPerfume(perfumeId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const comments = await getAllCommentsByPerfume(perfumeId)
            setComments(comments);
        })()
    }, [perfumeId]);

    return [comments, setComments];
}


export function useCreateComment() {
    const commentCreateHandler = async (perfumeId, commentData, userId) => {
        await createComment(perfumeId, commentData, userId)
    }
    return commentCreateHandler;
}