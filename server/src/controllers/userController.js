const router = require("express").Router();
const userManager = require("../managers/userManager");
const User = require("../models/User");
const TokenBlacklist = require("../models/TokenBlackList");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "SoftSecret";
const { authCookieName } = require("../app-config");
const perfumeManager = require("../managers/perfumeManager");
const { auth } = require("../utils");
const { getErrorMessage } = require("../utils/getErrorMessage");
const { isGuest } = require("../utils");

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await userManager.findUserById(userId);
    res.send(user)
})

//  Login requests

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then((user) => {
            if (email === "") {
                throw new Error("Please enter email");
            }

            if (password === "") {
                throw new Error("Please enter password");
            }
            if (!user) {
                throw new Error("Invalid email!");
            }
            return Promise.all([
                user,
                user ? user.matchPassword(password) : false,
            ]);
        })
        .then(([user, match]) => {
            if (!match) {
                // res.status(401).send("Wrong email or password");
                throw new Error("Invalid password")
            }
            user = bsonToJson(user);
            const token = createToken({ id: user._id });

            // if (process.env.NODE_ENV === "production") {
            //     res.cookie(authCookieName, token, {
            //         httpOnly: true,
            //         sameSite: "none",
            //         secure: true,
            //     });
            // } else {
            //     res.cookie(authCookieName, token, { httpOnly: true });
            // }
            res.status(200).send({ ...user, token });
        })
        .catch((err) => {
            return res.status(400).send(getErrorMessage(err));
        });
});

router.post("/register", async (req, res) => {
    const { email, phoneNumber: phonenumber, password, rePass } = req.body;
    try {
        if (password != rePass) {
            throw new Error("Passwords dont match!");
        }
        const user = await User.findOne({ email });

        if (user) {
            throw new Error("User already exist");
        }
    } catch (error) {
        return res.status(400).send(getErrorMessage(error));
    }
    return User.create({ email, phonenumber, password, rePass })
        .then((createdUser) => {
            createdUser = bsonToJson(createdUser);
            const token = createToken({ id: createdUser._id });
            // if (process.env.NODE_ENV === "production") {
            //     res.cookie(authCookieName, token, {
            //         httpOnly: true,
            //         sameSite: "none",
            //         secure: true,
            //     });
            // } else {
            //     res.cookie(authCookieName, token, { httpOnly: true });
            // }
            res.status(200).send({ ...createdUser, token });
        })
        .catch((err) => {
            res.status(400).send(getErrorMessage(err));
        });
});

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: "2d" });
}
const bsonToJson = (data) => {
    return JSON.parse(JSON.stringify(data));
};

//  Log out
router.post("/logout", auth(), (req, res) => {
    const authHeader = req.headers["authorization"];
    re
    TokenBlacklist.create({ token })
        .then(() => {
            
            res.clearCookie(authCookieName)
                .status(204)
                .send({ message: "Logged out!" });
        })
        .catch((err) => {
            res.status(400).send(getErrorMessage(err));
        });
});

router.get("/profile/:id", auth(), async (req, res) => {
    const id = req.params.id;
    try {
        const perfumes = await perfumeManager.getByUser(id);
        res.send(perfumes);
        return perfumes;
    } catch (error) {
        res.send(getErrorMessage(error));
    }
});

router.post("/profile", auth(), async (req, res) => {
    const owner = req.body;
    try {
        const perfumes = await perfumeManager.getByUser(owner);
        res.send(perfumes);
        return perfumes;
    } catch (error) {
        res.send(getErrorMessage(error));
    }
});

router.post("/editProfile", auth(), async (req, res) => {
    try {
        const newUser = req.body.user;
        const oldUser = req.body.creator;
        if (newUser.password == undefined || newUser.password == "") {
            throw new Error("Write your new password!");
        }

        if (newUser.phonenumber == undefined || newUser.phonenumber == "") {
            throw new Error("Write your new phone number!");
        }

        const email = newUser.email;
        const user = await User.findOne({ email }).lean();
        if (user && user.email != oldUser.email) {
            throw new Error("User already exist!");
        }

        const edited = await userManager.editProfile(oldUser._id, newUser);
        res.send(edited);
        return edited;
    } catch (error) {
        res.status(400).send(getErrorMessage(error));
    }
});

router.get("/profile", auth(), (req, res, next) => {
    const { _id } = req.user;
    User.findOne(_id, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
        .then((user) => {
            return res.status(200).send(user);
        })
        .catch(next);
});
module.exports = router;
