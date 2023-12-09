import User from "../models/userModel.js";
import { body, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customError.js";
import mongoose from "mongoose";
import { param } from "express-validator";
import Task from "../models/taskModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnauthorizedError(
            "you are not authorized to access this route"
          );
        }

        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateTask = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("please provide a task name")
    .trim()
    .isLength({ min: 3, max: 25 })
    .withMessage("Task name must be between 3 and 25 characters long"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid id");
    const task = await Task.findById(value);
    if (!task) throw new NotFoundError(`no task with id ${value}`);
    const isOwner = req.user.userId === task.createdBy.toString();
    if (!isOwner) {
      throw new UnauthorizedError("not authorized to access this route");
    }
  }),
]);

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("please provide a valid email")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

export const validateUpdateUser = withValidationErrors([
  body("name").notEmpty().withMessage("a name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error("email already exists");
      }
    }),
]);
