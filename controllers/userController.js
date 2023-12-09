import { StatusCodes } from "http-status-codes";
import User from "../models/userModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findById(req.user.userId);

  const secureUser = user.passRemoved();

  res.status(StatusCodes.OK).json({ user: secureUser });
};

export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
