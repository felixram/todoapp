import { getCurrentUser, updateUser } from "../controllers/userController.js";
import { Router } from "express";
import { validateUpdateUser } from "../middleware/validationMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.patch("/update-user", validateUpdateUser, updateUser);

export default router;
