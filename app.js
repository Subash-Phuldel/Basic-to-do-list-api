const express = require("express");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.get(globalErrorHandler);
module.exports = app;
