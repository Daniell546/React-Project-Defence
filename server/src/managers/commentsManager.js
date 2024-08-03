const Comment = require('../models/Comment')
const User = require('../models/User')
const Perfume = require('../models/Perfume')

exports.getCommentByPerfume = (perfumeId) => Comment.find({perfume: perfumeId}).populate('owner').lean();

exports.create = (data) => Comment.create(data);

exports.updateUser = (userId, commentId) => User.findByIdAndUpdate(userId, { $push: { comments: commentId }});

exports.updatePerfume = (perfumeId, commentId) => Perfume.findByIdAndUpdate(perfumeId, { $push: { comments: commentId }});