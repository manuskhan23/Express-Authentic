import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected route accessed"
  });
});

export default router;