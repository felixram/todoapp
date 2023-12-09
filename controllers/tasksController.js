import Task from "../models/taskModel.js";
import { StatusCodes } from "http-status-codes";

export const getAllTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.user.userId }).sort({
    status: -1,
  });
  res.status(StatusCodes.OK).json({ tasks });
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  res.status(StatusCodes.OK).json({ task });
};

export const createTask = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const task = Task.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "task created." });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const removedTask = await Task.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: `task deleted` });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: `task updated` });
};
