const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Task title is missing"],
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
    complete: {
      type: Boolean,
      default: false,
    },
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
