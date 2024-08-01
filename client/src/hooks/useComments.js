import { useEffect, useState } from "react";
import { createComment, getAllCommentsByPerfume } from "../api/comments-api";

export function useGetommentsByPerfume(perfumeId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const comments = await getAllCommentsByPerfume(perfumeId)
            setComments(comments);
        })
    }, [perfumeId]);

    return [comments, setComments];
}


export function useCreateComment() {
    const commentCreateHandler = async (perfumeId, commentData) => {
        await createComment(perfumeId, commentData)
    }
    return commentCreateHandler;
}