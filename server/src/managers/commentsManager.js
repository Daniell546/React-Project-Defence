const Comment = require("../models/Comment");
const User = require("../models/User");
const Perfume = require("../models/Perfume");

exports.getCommentByPerfume = (perfumeId) =>
    Comment.find({ perfume: perfumeId }).populate("owner").lean();

exports.getOneComment = (commentId) => Comment.findById(commentId).lean();

exports.create = (data) => Comment.create(data);

exports.editComment = async (id, newCommentData, owner) => {
    Comment.findByIdAndUpdate(id, newCommentData);
    const oldComment = await Comment.findById(id);
    if (oldComment.owner != owner._id) {
        throw new Error("Invalid user, trying to edit comment!");
    }
    return await Comment.findByIdAndUpdate(id, newCommentData, {runValidators: true});
   
};

exports.deleteComment = async (id) => Comment.findByIdAndDelete(id);

exports.updateUser = (userId, commentId) =>
    User.findByIdAndUpdate(userId, { $push: { comments: commentId } });

exports.updatePerfume = (perfumeId, commentId) =>
    Perfume.findByIdAndUpdate(perfumeId, { $push: { comments: commentId } });


exports.updateUserDelete = (userId, commentId) => User.findByIdAndUpdate(userId, { $pull: { comments: commentId } });

exports.updatePerfumeDelete = (perfumeId, commentId) => Perfume.findByIdAndUpdate(perfumeId, { $pull: { comments: commentId } });