const mongoose = require("mongoose");

const commentModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    comment: {
        type: String,
        required: [true, "Comments text required"],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: [true, "Authentication required"],
        ref: "User",
    },
    perfume: {
        type: mongoose.Types.ObjectId,
        required: [true, "Perfume required"],
        ref: "Perfume",
    },
});

const Comment = mongoose.model("Comment", commentModel);

module.exports = Comment;
