const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        match: [/^[a-zA-Z0-9._%+-]{5,}@(gmail\.com|gmail\.bg|abv\.com|abv\.bg)/, JSON.stringify("Email must be at least 5 symbols long with proper domain!")],
        required: [true, JSON.stringify("Email is required!")],
        unique: [true, "Email already exist..."],
    },
    phonenumber: {
        required: [true, JSON.stringify("Phonenumber is required!")],
        type: Number,
        min: [1, JSON.stringify("Phonenumber must be positive number!")],
    },
    password: {
        required: [true, JSON.stringify("Password is required!")],
        type: String,
    },
    owner_id: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] 
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    },
};
// userSchema.virtual("rePass").set(function (value) {
//     if (this.password != value) {
//         throw new Error("Passwords don't match");
//     }
// });

userSchema.pre("save", async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

userSchema.pre("findOneAndUpdate", async function (next) {
    const update = this.getUpdate();

    // Check if the password field is being modified
    if (update.password) {
        const hash = await bcrypt.hash(update.password, 10);
        update.password = hash;
    }

    next();
});
const User = mongoose.model("User", userSchema);

module.exports = User;
