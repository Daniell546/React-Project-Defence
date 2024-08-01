const express = require("express");
const router = express.Router();
const commentsManager = require("../managers/commentsManager");

router.get('/all/:perfumeId', async(req, res) => {
    const comments = await commentsManager.getCommentByPerfume(req.params.perfumeId)
    res.send(comments);
})

module.exports = router;


