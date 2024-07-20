const Task = require("../models/taskModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createTask = catchAsync(async (req, res, next) => {
  const newTask = await Task.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      newTask,
    },
  });
});
