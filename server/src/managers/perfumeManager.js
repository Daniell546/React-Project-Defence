const Comment = require("../models/Comment");
const Perfume = require("../models/Perfume");
const User = require("../models/User");

exports.getPerfumes = () => Perfume.find();

exports.create = (data) => Perfume.create(data);

exports.getOnePerfume = (id) => Perfume.findById(id);

exports.edit = async (id, perfume, owner) => {
    const oldPerfume = await Perfume.findById(id).lean();
    if(oldPerfume.owner != owner._id) {
        throw new Error("Invalid user, trying to edit perfume article")
    }
    return await Perfume.findByIdAndUpdate(id, perfume, {runValidators: true});
};

exports.delete = (id) => Perfume.findByIdAndDelete(id);

exports.getByUser = async (id) => {
    let all = await Perfume.find().lean();
    const newArr = [];
    for (let p of all) {
        if (p.owner == id) {
            newArr.push(p);
        }
    }
    return newArr;
};

exports.search = async (text, criteria) => {
    let all = await Perfume.find().lean();
    if (text && criteria) {
        const newArr = [];
        for (let p of all) {
            if (
                p[criteria]
                    .toLocaleLowerCase()
                    .includes(text.toLocaleLowerCase())
            ) {
                newArr.push(p);
            }
        }
        return newArr;
    } else {
        return all;
    }
};

exports.updateUsersDeletePerfumeComments = async (perfumeId) => {
    try {
        // Find all comments related to the perfume
        const comments = await Comment.find({ perfume: perfumeId }).lean();
        
        // Loop through each comment and update the user document
        for (const comment of comments) {
            await User.findByIdAndUpdate(
                comment.owner,
                { $pull: { comments: comment._id } }
            );
        }
    } catch (err) {
        console.error('Error updating users when deleting perfume comments:', err);
    }
};


exports.deleteCommentsByPerfume = (perfumeId) => {
    return Comment.deleteMany({ perfume: perfumeId });
};

