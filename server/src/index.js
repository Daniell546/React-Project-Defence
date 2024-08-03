global.__basedir = __dirname;
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const rateLimit = require("express-rate-limit");

const routes = require("./routes");
const expressConfig = require("./config/expressConfig");
const dbConfig = require("./config/dbConfig");
const config = require("./config/config");

// Configure Express
expressConfig(app);

// Configure CORS
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:5173"],
    })
);

// // Configure rate limiter
// const limiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 50, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//     message: "Too many requests from this IP, please try again after 15 minutes",
// });

// // Apply the rate limiter to all requests
// app.use(limiter);

// Configure Database
dbConfig()
    .then(() => console.log("DB connected successfully!"))
    .catch((err) => console.log("DB error! ", err.message));

// Routes
app.use("/api", routes);

// Start the server
app.listen(3000, () => console.log(`Listening on port ${config.port}!`));
