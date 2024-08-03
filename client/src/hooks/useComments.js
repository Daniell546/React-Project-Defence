import { useEffect, useState } from "react";
import { createComment, getAllCommentsByPerfume } from "../api/comments-api";

export function useGetCommentsByPerfume(perfumeId) {
    const [comments, setComments] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        (async () => {
            const comments = await getAllCommentsByPerfume(perfumeId);
            setComments(comments);
        })();
    }, [perfumeId, refresh]);

    const triggerRefresh = () => setRefresh((prev) => !prev);

    return [comments, triggerRefresh];
}

export function useCreateComment() {
    const commentCreateHandler = async (perfumeId, commentData, userId) => {
        await createComment(perfumeId, commentData, userId);
    };
    return commentCreateHandler;
}
