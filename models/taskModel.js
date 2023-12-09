import mongoose from "mongoose";
import { TASK_STATUS } from "../utils/constants.js";

const taskSchema = new mongoose.Schema(
  {
    name: String,
    status: {
      type: String,
      enum: Object.values(TASK_STATUS),
      default: TASK_STATUS.PENDING,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
