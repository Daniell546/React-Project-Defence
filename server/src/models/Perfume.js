const mongoose = require("mongoose");

const perfumeModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    brand: {
        type: String,
        required: [true, JSON.stringify('Brand required!')],
    },
    model: {
        required: [true, JSON.stringify('Model required!')],
        type: String,
    },
    imageUrl: {
        required: [true, JSON.stringify('ImageUrl required!')],
        type: String,
    },
    price: {
        required: [true, JSON.stringify('Price required!')],
        type: Number,
        minLength: 0,
    },
    description: {
        required: [true, JSON.stringify('Short description required!')],
        type: String,
    },
    owner: {
        required: [true, JSON.stringify("Not authenticated")],
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

const Perfume = mongoose.model("Perfume", perfumeModel);

module.exports = Perfume;
