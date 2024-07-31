// const jwt = require("./jwt");
// const { authCookieName } = require("../app-config");
// const User = require("../models/User");
// const TokenBlackList = require("../models/TokenBlackList");

// function auth(redirectUnauthenticated = true) {
//     return function (req, res, next) {
//         const token = req.cookies[authCookieName];
//         console.log(localStorage.getItem('auth'));
//         Promise.all([jwt.verifyToken(token), TokenBlackList.findOne({ token })])
//             .then(([data, blacklistedToken]) => {
//                 if (blacklistedToken) {
//                     return Promise.reject(new Error("blacklisted token"));
//                 }
//                 User.findById(data.id).then((user) => {
//                     req.user = user;
//                     req.isLogged = true;
//                     next();
//                 });
//             })
//             .catch((err) => {
//                 if (!redirectUnauthenticated) {
//                     next();
//                     return;
//                 }
//                 if (
//                     [
//                         "token expired",
//                         "blacklisted token",
//                         "jwt must be provided",
//                     ].includes(err.message)
//                 ) {
//                     // console.error(err);
//                     res.status(401).send({ message: "Invalid token!" });
//                     return;
//                 }
//                 next(err);
//             });
//     };
// }

// module.exports = auth;

const jwt = require("./jwt");
const User = require("../models/User");
const TokenBlackList = require("../models/TokenBlackList");

function auth(redirectUnauthenticated = true) {
    return function (req, res, next) {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            if (redirectUnauthenticated) {
                return res.status(401).send({ message: "Invalid token!" });
            }
            return next();
        }

        const token = authHeader.split(" ")[1];
        Promise.all([jwt.verifyToken(token), TokenBlackList.findOne({ token })])
            .then(([data, blacklistedToken]) => {
                if (blacklistedToken) {
                    return Promise.reject(new Error("blacklisted token"));
                }

                User.findById(data.id).then((user) => {
                    if (!user) {
                        return Promise.reject(new Error("User not found"));
                    }
                    req.user = user;
                    req.isLogged = true;
                    next();
                });
            })
            .catch((err) => {
                if (!redirectUnauthenticated) {
                    next();
                    return;
                }
                if (
                    [
                        "token expired",
                        "blacklisted token",
                        "jwt must be provided",
                    ].includes(err.message)
                ) {
                    res.status(401).send({ message: "Invalid token!" });
                    return;
                }
                next(err);
            });
    };
}

module.exports = auth;

