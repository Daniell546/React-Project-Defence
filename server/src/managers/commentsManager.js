const Comment = require('../models/Comment')

exports.getCommentByPerfume = (perfumeId) => Comment.find({perfume: perfumeId}).populate('owner');
