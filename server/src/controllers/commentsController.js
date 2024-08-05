const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const commentsManager = require("../managers/commentsManager");
const { getErrorMessage } = require("../utils/getErrorMessage");

router.get("/all/:perfumeId", async (req, res) => {
    try {
        const comments = (
            await commentsManager.getCommentByPerfume(req.params.perfumeId)
        ).reverse();
        res.send(comments);
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});

router.get("/:commentId", async (req, res) => {
    const commentId = req.params.commentId;
    const comment = await commentsManager.getOneComment(commentId);
    res.send(comment);
});

router.post("/create", auth(), async (req, res) => {
    const perfumeId = req.body.perfumeId;
    const comment = req.body.commentData.text;
    const userId = req.body.userId;
    
    const commentData = {
        comment,
        owner: userId,
        perfume: perfumeId,
    };
    try {
        const newComment = await commentsManager.create(commentData);
        
        await commentsManager.updateUser(userId, newComment._id);
        await commentsManager.updatePerfume(perfumeId, newComment._id);
        res.send(newComment);
        return newComment;
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});

router.put("/edit/:commentId", auth(), async (req, res) => {
    const commentId = req.params.commentId;
    const newData = req.body.newComment;
    const owner = req.body.owner;
    try {
        const newComment = await commentsManager.editComment(
            commentId,
            newData,
            owner
        );
        res.send(newComment);
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});

router.delete("/delete/:commentId", auth(), async (req, res) => {
    const commentId = req.params.commentId;
    const perfumeId = req.body.perfumeId;
    const userId = req.body.user._id;

    try {
        const comment = await commentsManager.deleteComment(commentId);
        await commentsManager.updatePerfumeDelete(perfumeId, commentId);
        await commentsManager.updateUserDelete(userId, commentId);
        res.send(comment)
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
});

module.exports = router;
