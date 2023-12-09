import { Router } from "express";
import {
  validateTask,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();

import {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
} from "../controllers/tasksController.js";

router.route("/").get(getAllTasks).post(validateTask, createTask);

router
  .route("/:id")
  .get(validateIdParam, getTask)
  .delete(validateIdParam, deleteTask)
  .patch(validateTask, validateIdParam, updateTask);

export default router;
