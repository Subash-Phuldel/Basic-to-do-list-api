const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requried: [true, "Task title is missing"],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    addedDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
