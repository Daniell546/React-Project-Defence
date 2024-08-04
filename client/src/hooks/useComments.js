import { useEffect, useState } from "react";
import { createComment, editComment, fetchOneComment, getAllCommentsByPerfume } from "../api/comments-api";

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

export function useEditComment() {
    const editCommentHandler = async (commentId, newCommentData) => {
        await editComment(commentId, newCommentData)
    }
    return editCommentHandler;
}

export function useGetOneComment(commentId) {
    const [comment, setComment] = useState({});

    useEffect(() => {
        (async () => {
            const result = await fetchOneComment(commentId);
            setComment(result);
        })();
    }, [commentId]);

    return [comment];
}