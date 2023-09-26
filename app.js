const express = require("express");
const app = express();
const router = require("./src/routes/api");
const bodyParser = require("body-parser");

// Security Middleware

const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");

// Database Lib important.

const mongoose = require("mongoose");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Security Middleware implement

app.use(cors());
app.use(helmet());
app.use(hpp());
require("dotenv").config();

app.use(mongoSanitize());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3000,
});

app.use(limiter);

// MongoDb connection

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("Connected to the database.");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

// routing implement

app.use("/api/v1", router);

app.use("*", (req, res) => {
  res.status(404).json({ status: "failed", data: "Not Found" });
});

module.exports = app;
