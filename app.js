const express = require("express");
const morgan = require("morgan");

const globalErrorHandler = require("./controllers/errorController");
const taskRoute = require("./routers/taskRoute");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/tasks/", taskRoute);

app.get(globalErrorHandler);

module.exports = app;
