const path = require("path");

const express = require("express");

const router = require("./router");

const app = express();

app.disable("x-powered-by");

const compression = require("compression");

const morgan = require("morgan");

app.set("PORT", process.env.PORT || 5000);
app.use(express.static(path.join(__dirname, "..", "public")));

const middlewares = [
  express.urlencoded({ extended: false }),
  express.json(),
  compression(),
];

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
app.use(middlewares);

app.use(router);

module.exports = app;
