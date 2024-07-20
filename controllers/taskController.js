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

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json({
    status: "success",
    length: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.getTask = catchAsync(async (req, res, next) => {
  const task = await Task.findById(req.params.id);
  res.status(200).json({
    status: "success",
    task,
  });
});
