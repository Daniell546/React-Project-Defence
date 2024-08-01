const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    comment: {
        type: String,
        required: [true, JSON.stringify('Comments text required')],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: [true, JSON.stringify('Authentication required')],
        ref: 'User'
    },
    perfume: {
        type: mongoose.Types.ObjectId,
        required: [true, JSON.stringify('Perfume required')],
        ref: 'Perfume'
    }
});

const Comment = mongoose.model("Comment", commentModel);

module.exports = Comment;
