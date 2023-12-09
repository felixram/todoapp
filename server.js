import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./db/connect.js";
import taskRouter from "./routes/taskRouter.js";
import authRouter from "./routes/authRouter.js";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
import { authenticateUser } from "./middleware/authMiddleware.js";
import userRouter from "./routes/userRouter.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//tasks router
app.use("/api/v1/tasks", authenticateUser, taskRouter);
//auth router
app.use("/api/v1/auth", authRouter);
//user router
app.use("/api/v1/users", authenticateUser, userRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server running on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
