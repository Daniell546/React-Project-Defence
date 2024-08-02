const express = require("express");
const router = express.Router();
const commentsManager = require("../managers/commentsManager");

router.get('/all/:perfumeId', async(req, res) => {
    const comments = await commentsManager.getCommentByPerfume(req.params.perfumeId)
    res.send(comments);
})

router.post('/create', async(req, res) => {
    const perfumeId = req.body.perfumeId;
    const comment = req.body.commentData.text;
    const userId = req.body.userId;
    
    const commentData = {
        comment,
        owner: userId,
        perfume: perfumeId
    }

    const newComment = await commentsManager.create(commentData)
    await commentsManager.updateUser(userId, newComment._id);
    await commentsManager.updatePerfume(perfumeId, newComment._id)
    res.send(newComment)
})

module.exports = router;


