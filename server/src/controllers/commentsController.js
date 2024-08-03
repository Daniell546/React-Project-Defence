const express = require("express");
const router = express.Router();
const { auth } = require("../utils");
const commentsManager = require("../managers/commentsManager");
const { getErrorMessage } = require("../utils/getErrorMessage");

router.get('/all/:perfumeId', async(req, res) => {
    const comments = await commentsManager.getCommentByPerfume(req.params.perfumeId)
    res.send(comments);
})

router.post('/create', auth(), async(req, res) => {
    const perfumeId = req.body.perfumeId;
    const comment = req.body.commentData.text;
    const userId = req.body.userId;
    
    const commentData = {
        comment,
        owner: userId,
        perfume: perfumeId
    }
    try {
        
        const newComment = await commentsManager.create(commentData)
        await commentsManager.updateUser(userId, newComment._id);
        await commentsManager.updatePerfume(perfumeId, newComment._id)
        res.send(newComment)
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
        
    }
})

module.exports = router;


