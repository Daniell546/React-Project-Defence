const mongoose = require("mongoose");

const perfumeModel = new mongoose.Schema({
    id: {
        type: Number,
    },
    brand: {
        type: String,
        required: [true, "Brand required!"],
    },
    model: {
        required: [true, "Model required!"],
        type: String,
    },
    imageUrl: {
        required: [true, "ImageUrl required!"],
        type: String,
        match: [/^(http:\/\/|https:\/\/)/, "Invalid imageUrl link!"],
    },
    price: {
        min: [1, "Price must be positive number!"],
        required: [true, "Price required!"],
        type: Number,
        minLength: 0,
    },
    description: {
        required: [true, "Short description required!"],
        type: String,
    },
    owner: {
        required: [true, "Not authenticated"],
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

const Perfume = mongoose.model("Perfume", perfumeModel);

module.exports = Perfume;
